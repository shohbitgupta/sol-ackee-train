//-------------------------------------------------------------------------------
///
/// TASK: Implement the add reaction functionality for the Twitter program
/// 
/// Requirements:
/// - Initialize a new reaction account with proper PDA seeds
/// - Increment the appropriate counter (likes or dislikes) on the tweet
/// - Set reaction fields: type, author, parent tweet, and bump
/// - Handle both Like and Dislike reaction types
/// 
///-------------------------------------------------------------------------------

use anchor_lang::prelude::*;

use crate::states::*;

pub fn add_reaction(ctx: Context<AddReactionContext>, reaction: ReactionType) -> Result<()> {
    msg!("Initializing Reaction account with:");
    msg!("- Author: {}", ctx.accounts.reaction_author.key());
    msg!("- Parent Tweet: {}", ctx.accounts.tweet.key());
    msg!("- Bump: {}", ctx.bumps.tweet_reaction);

    let reaction_author = &ctx.accounts.reaction_author;
    let tweet = &mut ctx.accounts.tweet;
    let tweet_reaction = &mut ctx.accounts.tweet_reaction;

    tweet_reaction.reaction_author = reaction_author.key();    
    tweet_reaction.parent_tweet = tweet.key();                 
    tweet_reaction.reaction = reaction.clone();                  
    tweet_reaction.bump = ctx.bumps.tweet_reaction;

    match reaction {
        ReactionType::Like => tweet.likes += 1,
        ReactionType::Dislike => tweet.dislikes += 1,
    }
    
    Ok(())
}

#[derive(Accounts)]
pub struct AddReactionContext<'info> {
    #[account(mut)]
    pub reaction_author: Signer<'info>,

    #[account(
        init,
        space = 8 + Reaction::INIT_SPACE,
        payer = reaction_author,
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
    pub system_program: Program<'info, System>,
}
