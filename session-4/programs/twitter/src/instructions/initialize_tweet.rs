//-------------------------------------------------------------------------------
///
/// TASK: Implement the initialize tweet functionality for the Twitter program
/// 
/// Requirements:
/// - Validate that topic and content don't exceed maximum lengths
/// - Initialize a new tweet account with proper PDA seeds
/// - Set tweet fields: topic, content, author, likes, dislikes, and bump
/// - Initialize counters (likes and dislikes) to zero
/// - Use topic in PDA seeds for tweet identification
/// 
///-------------------------------------------------------------------------------

use anchor_lang::prelude::*;

use crate::errors::TwitterError;
use crate::states::*;

pub fn initialize_tweet(
    ctx: Context<InitializeTweet>,
    topic: String,
    content: String,
) -> Result<()> {
    if topic.chars().count() > TOPIC_LENGTH {
        return Err(TwitterError::TopicTooLong.into());
    }

    if content.chars().count() > CONTENT_LENGTH {
        return Err(TwitterError::ContentTooLong.into());
    }

    let tweet = &mut ctx.accounts.tweet;
    tweet.topic = topic;
    tweet.content = content;
    tweet.tweet_author = ctx.accounts.tweet_authority.key();
    tweet.likes = 0;
    tweet.dislikes = 0;
    tweet.bump = ctx.bumps.tweet;
    Ok(())
}

#[derive(Accounts)]
#[instruction(topic: String)]
pub struct InitializeTweet<'info> {
    #[account(mut)]
    pub tweet_authority: Signer<'info>,
    #[account(
        init,
        space = 8 + Tweet::INIT_SPACE,
        payer = tweet_authority,
        seeds = [
            topic.as_bytes().as_ref(),    // 1. Topic FIRST (matches test)
            b"TWEET_SEED",                // 2. Seed prefix SECOND (matches test)
            tweet_authority.key().as_ref() // 3. Authority key THIRD (matches test)
        ],
        bump,
    )]
    pub tweet: Account<'info, Tweet>,
    pub system_program: Program<'info, System>,
}
