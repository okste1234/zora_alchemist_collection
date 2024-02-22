import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
// import { useTheme } from "next-themes";
import { ALCHEMY_LOCALSTORE } from "../utils/constant";

export const NftContext = createContext({});

const getNftData = () => {
    let res = {};
    useEffect(() => {
        if (typeof window !== undefined) {
            const storedData = window.localStorage.getItem(ALCHEMY_LOCALSTORE);
            res = JSON.parse(storedData);
        }
    }, []);
    return res;
};

export const NftProvider = ({ children }) => {
    // const { theme } = useTheme();
    const [nftAddress, setnftAddress] = useState("0xfeee3700698f8d75bcc18e009022c7b44d2af44f");
    const [chains, setChains] = useState([]);
    const [tableState, setTableState] = useState({});
    const [color, setColor] = useState("slate");
    const [borderRadius, setBorderRadius] = useState("medium");
    const [nftData, setNftData] = useState(getNftData());

    // const mode = theme;

    const updateNftData = (_data) => {
        setNftData(_data);
        const replacer = (key, value) => {
            if (typeof value === 'bigint') {
                return (value);
            }
            return value;
        };
        localStorage.setItem(ALCHEMY_LOCALSTORE, JSON.stringify(_data, replacer, 2));
    };

    return (
        <NftContext.Provider
            value={{
                nftAddress,
                setnftAddress,
                chains,
                setChains,
                tableState,
                setTableState,
                setColor,
                color,
                setBorderRadius,
                borderRadius,
                nftData,
                updateNftData
            }}
        >
            {children}
        </NftContext.Provider>
    );
};

export const useNftContext = () => useContext(NftContext);
