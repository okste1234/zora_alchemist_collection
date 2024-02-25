import Image from 'next/image';
import { Banner } from '../components'
import Link from 'next/link';
import { NFTCollectionTokenListView, GoldRushProvider } from "@covalenthq/goldrush-kit";

import images from "../assets"

const Home = () => {
  return (
    <div className="flex justify-center sm:px-4 p-12">
      <div className="w-full minmd:w-4/5">
        <Banner
          src={images.alchemist}
          name={(<>Alchemist 4.0 <br /> Characters</>)}
          childStyles="md:text-4xl sm:text-2xl xs:text-xl text-left"
          parentStyle="justify-start mb-7 h-72 sm:h-60 p-12 xs:p-4 xs:h-44 rounded-3xl"
        />

        <GoldRushProvider
          apikey="cqt_rQDpXMfJbcqK4rYWrMvp8qTVddX6"
        // mode="dark"
        // color="emerald"
        >
          <NFTCollectionTokenListView
            chain_name={"zora-mainnet"}
            collection_address="0xfeee3700698f8d75bcc18e009022c7b44d2af44f"
            // on_nft_click={(e) => {
            //     console.log(e);
            //     route.push(`/collection/${e.nft_data.token_id}`);
            //     handleTokenDetailView(e);
            // }}

            className="bg-red-400"
            style={{ background: 'purple' }}
          >
            OPenine
          </NFTCollectionTokenListView>
        </GoldRushProvider>
      </div>
      <Link href="/nft-details">
        <div> Click me</div>
      </Link>
    </div>
  )
}

export default Home