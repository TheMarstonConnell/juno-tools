import { HomeCard } from 'components/HomeCard'
import type { NextPage } from 'next'
import Brand from 'public/brand/brand.svg'
import { withMetadata } from 'utils/layout'

const HomePage: NextPage = () => {
  return (
    <section className="px-8 pt-4 pb-16 mx-auto space-y-8 max-w-4xl">
      <div className="flex justify-center items-center py-8 max-w-xl">
          <h1 className="font-heading text-8xl font-bold w-full text-plumbus" >Slate</h1>
      </div>
      <h1 className="font-heading text-4xl font-bold">Welcome!</h1>
      <p className="text-xl">
        Slate is a 1:1 NFT creation studio and soon to be marketplace. Slate makes it easy to post files to the Jackal Protocol and save them as an NFT on neutron that can be bought and sold. Never has it been easier to create 1:1 NFTs.
      </p>

      <br />

      <div className="grid gap-8 md:grid-cols-2">
        <HomeCard
          className="p-4 -m-4 hover:bg-gray-500/10 rounded"
          link="/contracts/cw721/base"
          title="NFT Studio "
        >
          Create and view NFT projects here!
        </HomeCard>
        <HomeCard
            className="p-4 -m-4 hover:bg-gray-500/10 rounded"
            link="/"
            title="Marketplace (Coming Soon)">
          A place to buy and sell 1:1 NFTs!
        </HomeCard>

      </div>
    </section>
  )
}

export default withMetadata(HomePage, { center: false })
