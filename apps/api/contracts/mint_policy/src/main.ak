use aiken;

pub fn mint(ctx: ScriptContext) -> Bool {
    tx_signed_by(ctx, PUBKEY_HASH)
}
