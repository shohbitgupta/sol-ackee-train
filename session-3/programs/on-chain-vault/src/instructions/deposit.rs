//-------------------------------------------------------------------------------
///
/// TASK: Implement the deposit functionality for the on-chain vault
/// 
/// Requirements:
/// - Verify that the user has enough balance to deposit
/// - Verify that the vault is not locked
/// - Transfer lamports from user to vault using CPI (Cross-Program Invocation)
/// - Emit a deposit event after successful transfer
/// 
///-------------------------------------------------------------------------------
use anchor_lang::prelude::*;
use anchor_lang::solana_program::program::invoke;
use anchor_lang::solana_program::system_instruction;
use crate::state::Vault;
use crate::errors::VaultError;
use crate::events::DepositEvent;


#[derive(Accounts)]
pub struct Deposit<'info> {
    /// The user depositing lamports (can be anyone)
    #[account(mut)]
    pub user: Signer<'info>,

    /// The target vault (must already exist, PDA derived by authority)
    #[account(
        mut,
        seeds = [b"vault", vault.vault_authority.as_ref()],
        bump,
    )]
    pub vault: Account<'info, Vault>,

    /// System program for CPI transfer
    pub system_program: Program<'info, System>,
}

pub fn _deposit(ctx: Context<Deposit>, amount: u64) -> Result<()> {
    // basic argument check
    if amount == 0 {
        return err!(VaultError::InsufficientBalance); // or a custom ZeroAmount error if you prefer
    }

    // read accounts
    let user = &ctx.accounts.user;
    let vault = &ctx.accounts.vault;

    // Check vault is not locked
    if ctx.accounts.vault.locked {
        return err!(VaultError::VaultLocked);
    }

    // Check user has enough lamports (use canonical borrow)
    let user_lamports = **user.lamports.borrow();
    if user_lamports < amount {
        return err!(VaultError::InsufficientBalance);
    }

    // Build and invoke system transfer (user signs)
    let ix = system_instruction::transfer(&ctx.accounts.user.key(), &ctx.accounts.vault.key(), amount);
    invoke(
        &ix,
        &[
            user.to_account_info(),
            vault.to_account_info(),
            ctx.accounts.system_program.to_account_info(),
        ],
    )?;

    // Emit event
    emit!(DepositEvent {
        vault: ctx.accounts.vault.key(),
        user: ctx.accounts.user.key(),
        amount,
    });

    Ok(())
}