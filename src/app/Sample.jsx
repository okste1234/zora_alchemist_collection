"use client";
import "@covalenthq/goldrush-kit/styles.css";
import {
    GoldRushProvider,
    NFTCollectionTokenListView,

} from "@covalenthq/goldrush-kit";

export default function GoldRushExample() {
    return (
        <main className="">
            <GoldRushProvider
                apikey={process.env.NEXT_PUBLIC_API_KEY}
                mode="dark"
                color="emerald"
            >
                <NFTCollectionTokenListView
                    collection_address="0xfeee3700698f8d75bcc18e009022c7b44d2af44f"
                    chain_name={"zora-mainnet"}
                />
            </GoldRushProvider>
        </main>
    );
}