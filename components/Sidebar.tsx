import clsx from 'clsx'
import { Anchor } from 'components/Anchor'
import { useWallet } from 'contexts/wallet'
import { useRouter } from 'next/router'
import { NETWORK } from 'utils/constants'
import { footerLinks, links, socialsLinks } from 'utils/links'

import { SidebarLayout } from './SidebarLayout'
import { WalletLoader } from './WalletLoader'

const routes = [
  { text: 'Studio', href: `/contracts/cw721/base` }
]

export const Sidebar = () => {
  const router = useRouter()
  const wallet = useWallet()

  return (
    <SidebarLayout>
      {/* juno brand as home button */}
      <Anchor href="/" onContextMenu={(e) => [e.preventDefault(), router.push('/brand')]}>
          <h1 className='font-heading text-5xl font-bold text-plumbus hover:text-plumbus-light transition' >Slate</h1>
      </Anchor>

      {/* wallet button */}
      <WalletLoader />

      {/* main navigation routes */}
      {routes.map(({ text, href }) =>
        NETWORK === 'testnet' ? (
          <Anchor
            key={href}
            className={clsx(
              'py-2 px-4 -mx-4 uppercase', // styling
              'hover:bg-white/5 transition-colors', // hover styling
              { 'font-bold text-plumbus': router.asPath.startsWith(href) }, // active route styling
              // { 'text-gray-500 pointer-events-none': disabled }, // disabled route styling
            )}
            href={href}
          >
            {text}
          </Anchor>
        ) : (
          text !== 'Token Faucet' && (
            <Anchor
              key={href}
              className={clsx(
                'py-2 px-4 -mx-4 uppercase', // styling
                'hover:bg-white/5 transition-colors', // hover styling
                { 'font-bold text-plumbus': router.asPath.startsWith(href) }, // active route styling
                // { 'text-gray-500 pointer-events-none': disabled }, // disabled route styling
              )}
              href={href}
            >
              {text}
            </Anchor>
          )
        ),
      )}

      <div className="flex-grow" />

      {/* juno network status */}
      <div className="text-sm">Network: {wallet.network}</div>

      {/* footer reference links */}
      <ul className="text-sm list-disc list-inside">
        {footerLinks.map(({ href, text }) => (
          <li key={href}>
            <Anchor className="hover:text-plumbus hover:underline" href={href}>
              {text}
            </Anchor>
          </li>
        ))}
      </ul>

      {/* footer attribution */}
      <div className="text-xs text-white/50">
        Slate {process.env.APP_VERSION} <br />
        Made by{' '}
        <Anchor className="text-plumbus hover:underline" href={links.jackalLabs}>
          Jackal Labs
        </Anchor>
      </div>

      {/* footer social links */}
      <div className="flex gap-x-6 items-center text-white/75">
        {socialsLinks.map(({ Icon, href, text }) => (
          <Anchor key={href} className="hover:text-plumbus" href={href}>
            <Icon aria-label={text} size={20} />
          </Anchor>
        ))}
      </div>
    </SidebarLayout>
  )
}
