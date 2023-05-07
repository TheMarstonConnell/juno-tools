import type { LinkTabProps } from './LinkTab'

export const cw20LinkTabs: LinkTabProps[] = [
  {
    title: 'Instantiate',
    description: `Create a new CW20 Base contract`,
    href: '/contracts/cw20/base/instantiate',
  },
  {
    title: 'Query',
    description: `Dispatch queries with your CW20 Base contract`,
    href: '/contracts/cw20/base/query',
  },
]

export const cw1SubkeysLinkTabs: LinkTabProps[] = [
  {
    title: 'Instantiate',
    description: `Create a new CW1 Subkeys contract`,
    href: '/contracts/cw1/subkeys/instantiate',
  },
  {
    title: 'Query',
    description: `Dispatch queries with your CW1 Subkeys contract`,
    href: '/contracts/cw1/subkeys/query',
  },
]

export const cw721BaseLinkTabs: LinkTabProps[] = [
  {
    title: 'Create',
    description: `Create a new NFT`,
    href: '/contracts/cw721/base/instantiate',
  },
  {
    title: 'View',
    description: `View your NFT`,
    href: '/contracts/cw721/base/query',
  },
]
