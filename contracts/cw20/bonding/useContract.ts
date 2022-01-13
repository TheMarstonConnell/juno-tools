import { useCallback, useEffect, useState } from 'react'
import { useWallet } from 'contexts/wallet'
import {
  CW20BondingContract,
  CW20BondingInstance,
  CW20Bonding as initContract,
} from './contract'

interface InstantiateProps {
  codeId: number
  initMsg: Record<string, unknown>
  label: string
}

interface InstantiateResponse {
  readonly contractAddress: string
  readonly transactionHash: string
}

export interface UseCW20BondingContractProps {
  instantiate: ({
    codeId,
    initMsg,
    label,
  }: InstantiateProps) => Promise<InstantiateResponse>
  use: () => CW20BondingInstance | undefined
  updateContractAddress: (contractAddress: string) => void
}

export function useCW20BondingContract(): UseCW20BondingContractProps {
  const wallet = useWallet()

  const [address, setAddress] = useState<string>('')
  const [CW20Bonding, setCW20Bonding] = useState<CW20BondingContract>()

  useEffect(() => {
    setAddress(localStorage.getItem('contract_address') || '')
  }, [])

  useEffect(() => {
    if (wallet.initialized) {
      const getCW20BondingInstance = async (): Promise<void> => {
        const cw20BondingContract = initContract(wallet.getClient())
        setCW20Bonding(cw20BondingContract)
      }

      getCW20BondingInstance()
    }
  }, [wallet])

  const updateContractAddress = (contractAddress: string) => {
    setAddress(contractAddress)
  }

  const instantiate = useCallback(
    ({
      codeId,
      initMsg,
      label,
    }: InstantiateProps): Promise<InstantiateResponse> => {
      return new Promise((resolve, reject) => {
        if (!CW20Bonding) return reject('Contract is not initialized.')
        CW20Bonding.instantiate(wallet.address, codeId, initMsg, label)
          .then(resolve)
          .catch(reject)
      })
    },
    [CW20Bonding, wallet]
  )

  const use = useCallback((): CW20BondingInstance | undefined => {
    return CW20Bonding?.use(address)
  }, [CW20Bonding, address])

  return {
    instantiate,
    use,
    updateContractAddress,
  }
}