//-------------------------------------------------------------------------------
///
/// TASK: Implement the remove reaction functionality for the Twitter program
/// 
/// Requirements:
/// - Verify that the tweet reaction exists and belongs to the reaction author
/// - Decrement the appropriate counter (likes or dislikes) on the tweet
/// - Close the tweet reaction account and return rent to reaction author
/// 
///-------------------------------------------------------------------------------

use anchor_lang::prelude::*;

use crate::errors::TwitterError;
use crate::states::*;

pub fn remove_reaction(ctx: Context<RemoveReactionContext>) -> Result<()> {
    let tweet_reaction = &ctx.accounts.tweet_reaction;
    let tweet = &mut ctx.accounts.tweet;
    // Verify that the reaction belongs to the reaction author
    require!(
        tweet_reaction.reaction_author == ctx.accounts.reaction_author.key(),
        TwitterError::InvalidReactionAuthor
    );
    
    // Verify that the reaction is for the correct tweet
    require!(
        tweet_reaction.parent_tweet == tweet.key(),
        TwitterError::InvalidParentTweet
    );
    
    // Decrement the appropriate counter based on reaction type
    match tweet_reaction.reaction {
        ReactionType::Like => {
            require!(tweet.likes > 0, TwitterError::MaxLikesReached);
            tweet.likes = tweet.likes.checked_sub(1).unwrap();
        },
        ReactionType::Dislike => {
            require!(tweet.dislikes > 0, TwitterError::MaxDislikesReached);
            tweet.dislikes = tweet.dislikes.checked_sub(1).unwrap();
        },
    }
    
    Ok(())
}

#[derive(Accounts)]
pub struct RemoveReactionContext<'info> {
    #[account(mut)]
    pub reaction_author: Signer<'info>,
     #[account(
        mut,
        close = reaction_author,
        seeds = [
            "TWEET_REACTION_SEED".as_bytes(), 
            reaction_author.key().as_ref(), 
            tweet.key().as_ref()
        ],
        bump,
    )]
    pub tweet_reaction: Account<'info, Reaction>,
    #[account(mut)]
    pub tweet: Account<'info, Tweet>,
}
