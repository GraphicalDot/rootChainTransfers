
import {Rootexit} from '../../generated/schema'

import { ExitCall } from '../../generated/RootChainManager/RootChainManager'

export function handleRootChainManagerExits(call: ExitCall): void {
    let id = call.transaction.hash.toHex()
    let transaction = new Rootexit(id)
  
    transaction.timestamp = call.block.timestamp
    transaction.transactionHash = call.transaction.hash
    transaction.inputData = call.inputs.inputData

    transaction.save()
  
}

