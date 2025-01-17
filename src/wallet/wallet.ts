import {Prover} from "./prover"
import {Balance} from "./entities/balance"
import {Address} from "../entities/address"

export interface Wallet extends Prover {
  /** Get total ergo balance.
   */
  getTotalBalance(): Promise<Balance>

  /** Get wallet balance of a given token ID.
   * @param tokenId - ID of a token
   */
  getBalance(tokenId: string): Promise<bigint>

  /** Get change address.
   */
  getChangeAddress(): Promise<Address>

  /** Get ergo addresses.
   * @param unused - show only unused addresses
   */
  getAddresses(unused: boolean): Promise<Address[]>
}
