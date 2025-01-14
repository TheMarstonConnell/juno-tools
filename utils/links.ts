import { ImGithub, ImTwitter } from 'react-icons/im'
import { SiDiscord, SiTelegram } from 'react-icons/si'

import { BLOCK_EXPLORER_URL } from './constants'

export const links = {
  // main links
  jackalLabs: `https://jackallabs.io`,
  Discord: `https://discord.com/invite/5GKym3p6rj`,
  Docs: `https://docs.jackalprotocol.com`,
  GitHub: `https://github.com/JackalLabs`,
  jackal: `https://jackalprotocol.com`,
  Telegram: `https://t.me/+rtuZnbTlHaIzNjVh`,
  Twitter: `https://twitter.com/Jackal_Labs`,
  Explorer: BLOCK_EXPLORER_URL,

  // reference links
  'Docs Create Airdrop': `https://docs.juno.tools/docs/dashboards/airdrop/guide#create`,
  'Docs CW20 Base': `https://docs.juno.tools/docs/dashboards/cw-20/base/introduction`,
  'Docs CW1 Subkeys': `https://docs.juno.tools/docs/dashboards/cw-1/subkeys/introduction`,
  'Docs CW721 Base': `https://docs.juno.tools/docs/dashboards/cw-721/base/introduction`,
}

export const footerLinks = [
  { text: 'Powered by Jackal', href: links.jackal },
]

export const legacyNavbarLinks = [
  { text: 'Airdrops', href: `/airdrops` },
  { text: 'CW20 - Soon', href: `/contracts/cw20`, disabled: true },
  { text: 'CW1 - Soon', href: `/contracts/cw1`, disabled: true },
  { text: 'CW721 - Soon', href: `/contracts/cw721`, disabled: true },
]

export const socialsLinks = [
  { text: 'Discord', href: links.Discord, Icon: SiDiscord },
  { text: 'GitHub', href: links.GitHub, Icon: ImGithub },
  { text: 'Telegram', href: links.Telegram, Icon: SiTelegram },
  { text: 'Twitter', href: links.Twitter, Icon: ImTwitter },
]
