//-------------------------------------------------------------------------------
///
/// TASK: Implement the withdraw functionality for the on-chain vault
/// 
/// Requirements:
/// - Verify that the vault is not locked
/// - Verify that the vault has enough balance to withdraw
/// - Transfer lamports from vault to vault authority
/// - Emit a withdraw event after successful transfer
/// 
///-------------------------------------------------------------------------------

use anchor_lang::prelude::*;
use crate::state::Vault;
use crate::errors::VaultError;
use crate::events::WithdrawEvent;


#[derive(Accounts)]
pub struct Withdraw<'info> {
    #[account(mut)]
    pub vault_authority: Signer<'info>,

    #[account(
        mut,
        seeds = [b"vault", vault.vault_authority.as_ref()],
        bump,
    )]
    pub vault: Account<'info, Vault>,

    pub system_program: Program<'info, System>,
}


pub fn _withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()> {
    let vault = &mut ctx.accounts.vault;
    let authority = &ctx.accounts.vault_authority;

    // Ensure authority matches
    require_keys_eq!(
        vault.vault_authority,
        ctx.accounts.vault_authority.key(),
        VaultError::InvalidAuthority
    );

    // Lock check
    if vault.locked {
        return err!(VaultError::VaultLocked);
    }

    // Balance check
    let vault_balance = **vault.to_account_info().lamports.borrow();
    require!(vault_balance >= amount, VaultError::InsufficientBalance);

    // Direct lamport movement
    **vault.to_account_info().try_borrow_mut_lamports()? -= amount;
    **authority.to_account_info().try_borrow_mut_lamports()? += amount;

    // Emit event
    emit!(WithdrawEvent {
        vault: vault.key(),
        vault_authority: authority.key(),
        amount,
    });

    Ok(())
}