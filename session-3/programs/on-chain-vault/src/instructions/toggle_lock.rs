//-------------------------------------------------------------------------------
///
/// TASK: Implement the toggle lock functionality for the on-chain vault
/// 
/// Requirements:
/// - Toggle the locked state of the vault (locked becomes unlocked, unlocked becomes locked)
/// - Only the vault authority should be able to toggle the lock
/// - Emit a toggle lock event after successful state change
/// 
///-------------------------------------------------------------------------------

use anchor_lang::prelude::*;
use crate::errors::VaultError;
use crate::state::Vault;
use crate::events::ToggleLockEvent;

#[derive(Accounts)]
pub struct ToggleLock<'info> {
    // TODO: Add required accounts and constraints
    #[account(mut)]
    pub vault_authority: Signer<'info>,

    #[account(
        mut, 
        seeds = [b"vault", vault.vault_authority.as_ref()],
        bump
    )]
    pub vault: Account<'info, Vault>,
}

pub fn _toggle_lock(ctx: Context<ToggleLock>) -> Result<()> {
    let vault = &mut ctx.accounts.vault;
    msg!("Toggle lock instruction called");
    
    if vault.vault_authority.key() != ctx.accounts.vault_authority.key() {
        return err!(VaultError::InvalidAuthority);
    }   

    vault.locked = !vault.locked;
    emit!(ToggleLockEvent {vault:vault.key(),locked:vault.locked, vault_authority: ctx.accounts.vault_authority.key() });
    Ok(())
}