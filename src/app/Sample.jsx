// "use client";
// import "@covalenthq/goldrush-kit/styles.css";
// import {
//     GoldRushProvider,
//     NFTCollectionTokenListView,

// } from "@covalenthq/goldrush-kit";

// export default function GoldRushExample() {
//     return (
//         <main className="">
//             <GoldRushProvider
//                 apikey={process.env.NEXT_PUBLIC_API_KEY}
//                 mode="dark"
//                 color="emerald"
//             >
//                 <NFTCollectionTokenListView
//                     collection_address="0xfeee3700698f8d75bcc18e009022c7b44d2af44f"
//                     chain_name={"zora-mainnet"}
//                 />
//             </GoldRushProvider>
//         </main>
//     );
// }

"use client";
import { NFTCollectionTokenListView, GoldRushProvider } from "@covalenthq/goldrush-kit";
import "@covalenthq/goldrush-kit/styles.css";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useRef } from "react";
import { useNftContext } from "./context/NFTProvider";
// import { DetailCollection } from "../components/ui/home/DetailCollection";

export default function GoldRushExample() {

    // const route = useRouter();
    const { updateNftData, setnftAddress, nftAddress } = useNftContext();
    // const contractRef = useRef("")

    // const handleTokenDetailView = (e) => {
    //     updateNftData(e);
    // }

    // const handleSubmit = (e) => {
    //   e.preventDefault()
    //   setnftAddress(contractRef.current.value);
    // }

    return (
        <section className="flex justify-center gap-x-8 p-8">
            <section className="nft-collection-container w-9/12">
                <GoldRushProvider
                    apikey={process.env.NEXT_PUBLIC_API_KEY}
                    mode="dark"
                    color="emerald"
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
            </section>
            <section className="w-3/12">
                {/* <DetailCollection collection_address={nftAddress} /> */}

            </section>
        </section >
    );
}