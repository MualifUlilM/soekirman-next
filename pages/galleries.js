import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { ethers, Signer } from "ethers";

import { ThirdwebSDK } from "@3rdweb/sdk";
import { useWeb3 } from "@3rdweb/hooks";
import Header from "../components/HeaderComponent";
import NFTCard from "../components/NFTCard";






function Galleries() {

  const { provider } = useWeb3();
  const [nfts, setNfts] = useState([])
  const [listings, setListings] = useState([])


  // NFT Module
  const nftModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(provider.getSigner())
    return sdk.getNFTModule("0xaD0fD2041F28f5E87fb1658c97F43A6a3249d36d")
  }, [provider])

  useEffect(() => {
    if (!nftModule) return
      ; (async () => {
        const nfts = await nftModule.getAll()
        setNfts(nfts)
        console.log('🐎 ',nfts)
      })()
  }, [nftModule])

  // MarketPlaceModule

  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(provider.getSigner())
    return sdk.getMarketplaceModule(
      '0x9fAd13bbD83Fe208DB0ACdAEB2e13cDEcB5B96CE'
    )
  }, [provider])

  useEffect(() => {
    if (!marketPlaceModule) return
    ;(async () => {
      const listings = await marketPlaceModule.getAllListings()
      setListings(listings)
      
    })()
  }, [marketPlaceModule])

  return (
    <div className=" min-h-screen">
      <Header />
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        <div className="flex justify-start items-center mb-10">
          <h1 className=" text-5xl font-bold italic">GALLERIES</h1>
        </div>
        <div className="flex items-center max-w-7xl mx-auto">
          <div className="grid grid-cols-3 max-w-3xl align-middle content-center">
            {nfts.map(nft => (
             <NFTCard nftItem={nft} title={nft.name} listings={listings} key={nft.id} />
            ))}
        </div> </div>
      </div>
    </div>
  )
}

export default Galleries;