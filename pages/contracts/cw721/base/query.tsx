import clsx from 'clsx'
import { Conditional } from 'components/Conditional'
import { ContractPageHeader } from 'components/ContractPageHeader'
import { FormControl } from 'components/FormControl'
import { AddressInput } from 'components/forms/FormInput'
import { useInputState } from 'components/forms/FormInput.hooks'
import { JsonPreview } from 'components/JsonPreview'
import { LinkTabs } from 'components/LinkTabs'
import { cw721BaseLinkTabs } from 'components/LinkTabs.data'
import { useContracts } from 'contexts/contracts'
import { useWallet } from 'contexts/wallet'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useQuery } from 'react-query'
import type { QueryType } from 'utils/contracts/cw721/base/query'
import { dispatchQuery, QUERY_LIST } from 'utils/contracts/cw721/base/query'
import { withMetadata } from 'utils/layout'
import { links } from 'utils/links'
import  Image from 'next/image'
import {ImagePreview} from "../../../../components/ImagePreview";

const CW1SubkeysQueryPage: NextPage = () => {
  const { cw721Base: contract } = useContracts()
  const wallet = useWallet()

  const contractState = useInputState({
    id: 'contract-address',
    name: 'contract-address',
    title: 'Contract Address',
    subtitle: 'Address of the NFT contract',
  })
  const address = contractState.value

  const ownerState = useInputState({
    id: 'owner-address',
    name: 'owner-address',
    title: 'Owner Address',
    subtitle: 'Address of the owner',
  })
  const ownerAddress = ownerState.value

  const tokenIdState = useInputState({
    id: 'token-id',
    name: 'token-id',
    title: 'Token ID',
    subtitle: 'Identifier of the token',
    placeholder: 'some_token_id',
  })
  const tokenId = tokenIdState.value

  const [type, setType] = useState<QueryType>('owner_of')

  const addressVisible = type === 'approval' || type === 'all_operators' || type === 'tokens'
  const tokenVisible =
    type === 'owner_of' || type === 'approval' || type === 'approvals' || type === 'nft_info' || type === 'all_nft_info'

  const { data: response } = useQuery(
    [address, type, contract, wallet, ownerAddress, tokenId] as const,
    async ({ queryKey }) => {
      const [_address, _type, _contract, _wallet, _ownerAddress, _tokenId] = queryKey
      const messages = contract?.use(_address)
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const ownerAddress = _ownerAddress || _wallet.address

      const result = await dispatchQuery({
        ownerAddress,
        tokenId: "0",
        messages,
        type: "nft_info",
      })
      return result
    },
    {
      placeholderData: null,
      onError: (error: any) => {
        toast.error(error.message)
      },
      enabled: Boolean(address && type && contract && wallet),
    },
  )

  const router = useRouter()

  useEffect(() => {
    if (address.length > 0) {
      void router.replace({ query: { contractAddress: address } })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address])
  useEffect(() => {
    const initial = new URL(document.URL).searchParams.get('contractAddress')
    if (initial && initial.length > 0) contractState.onChange(initial)
  }, [])

  return (
    <section className="py-6 px-12 space-y-4">
      <NextSeo title="Slate NFT Studio Viewer" />
      <ContractPageHeader
        description="Create a 1:1 NFT in the Jackal NFT studio for neutron."
        link={links['Docs CW721 Base']}
        title="NFT Studio"
      />
      <LinkTabs activeIndex={1} data={cw721BaseLinkTabs} />

      <div className="grid grid-cols-2 p-4 space-x-8">
        <div className="space-y-8">
          <AddressInput {...contractState} />

          <Conditional test={addressVisible}>
            <AddressInput {...ownerState} />
          </Conditional>

        </div>
        <ImagePreview response={response} />
        {/*<JsonPreview content={address ? { type, response } : null} title="Query Response" />*/}
      </div>
    </section>
  )
}

export default withMetadata(CW1SubkeysQueryPage, { center: false })
