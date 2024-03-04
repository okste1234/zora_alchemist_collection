import { NFTCollectionTokenListView, GoldRushProvider } from "@covalenthq/goldrush-kit";


const Sample = () => {
    return (
        <div>
            <GoldRushProvider
                apikey={process.env.NEXT_PUBLIC_API_KEY}
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
    )
}

export default Sample;