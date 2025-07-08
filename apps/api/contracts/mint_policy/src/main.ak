// Import Aiken libraries
use aiken/transaction
use aiken/script_context
use aiken/address
use aiken/value

// ✅ Enter the wallet hash (the wallet allowed to mint)
const owner: bytes = "addr1qz6329rc9eh4cuzkc0hxvz8xpa6kl2y6m8x0k3fdrwlp3ury508vagvq7mqcus2fc5q5wexdntd86zfhg2c5jlven8psa690ph"
const deadline: int = 1751542361  // POSIX timestamp

// ✅ Main entry function for the contract
fn main(ctx: script_context) -> bool {
    // ✅ Check if the transaction is signed by the owner wallet
    transaction.is_signed_by(ctx.tx, owner) &&
    time.active_before(ctx.tx.valid_range, deadline)
}
