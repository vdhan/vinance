use anchor_lang::prelude::*;

declare_id!("FQ6he6mMVEAjqSAbRYr24ye2DwfUh2ysRCJRVRXRKYXJ");

#[program]
pub mod contract {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
