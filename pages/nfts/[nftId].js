import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { useRouter } from "next/router"
import { useEffect, useMemo, useState } from "react";
import Header from "../../components/HeaderComponent";
import { FaWallet } from 'react-icons/fa'

const Nft = () => {
    const router = useRouter();
    const { provider } = useWeb3()
    const [selectedNft, setSelectedNft] = useState()
    const [listings, setListings] = useState([])
    const [selectedMarketNft, setSelectedMarketNft] = useState()
    const isListed = router.query.isListed
    const [isLoading, setIsloading] = useState(true)
    const [nftOwner, setNftOwner] = useState()


    const nftModule = useMemo(() => {
        if (!provider) return

        const sdk = new ThirdwebSDK(
            provider.getSigner(),
        )
        return sdk.getNFTModule('0xaD0fD2041F28f5E87fb1658c97F43A6a3249d36d')
    }, [provider])

    useEffect(() => {
        if (!nftModule) return
            ; (async () => {
                // const nfts    = await nftModule.getAll()
                const nfts = await nftModule.getAllWithOwner()
                const selectedNftItem = nfts.find((nft) => nft.metadata.id === router.query.nftId)
                setSelectedNft(selectedNftItem)
                console.log("🌻 ", nfts)
                console.log("💮  ", selectedNft)
            })()
    }, [nftModule])

    const marketPlaceModule = useMemo(() => {
        if (!provider) return

        const sdk = new ThirdwebSDK(provider.getSigner())
        return sdk.getMarketplaceModule(
            '0x9fAd13bbD83Fe208DB0ACdAEB2e13cDEcB5B96CE'
        )
    }, [provider])

    useEffect(() => {
        if (!marketPlaceModule) return
            ; (async () => {
                setListings(await marketPlaceModule.getAllListings())
            })()
    }, [marketPlaceModule])

    useEffect(() => {
        if (!listings || isListed === 'false') return
            ; (async () => {
                setSelectedMarketNft(
                    listings.find((marketNft) => marketNft.asset?.id === selectedNft.metadata.id)
                )

                console.log("⛅  ", selectedNft)
            })()
    }, [selectedNft, listings, isListed])

    const buyItem = async (
        listingId = selectedMarketNft.id,
        quantityDesired = 1,
        module = marketPlaceModule
    ) => {

        await module
            .buyoutDirectListing({
                listingId: selectedMarketNft.id,
                quantityDesired: 1,
            })
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        if (Boolean(selectedMarketNft) && Boolean(selectedNft)) {
            console.log("🌻 ", selectedMarketNft)
            console.log("🌻 ", selectedNft)
        }
    })

    // console.log('🥮 ', selectedNft)


    function ownerFormat(str){
        return "Owned By "+ str.replace('0x', '').slice(0,str.replace('0x', '').length-(str.replace('0x', '').length-6))
    }

    return (
        <div className=" min-h-screen">
            <Header />
            <div className="max-w-7xl mx-auto flex">
                    <img srcSet={selectedNft?.metadata.image} className="h-90 w-80"></img>
                    <div className="px-5 ml-10 w-full">
                    <h3 className=" font-semibold text-2xl">SOEKIRMAN NFT</h3>
                    <h3 className=" font-semibold text-2xl">{selectedNft?.metadata.name}</h3>
                    <div className=" text-xl">{ownerFormat(Boolean(selectedNft)? selectedNft.owner : "")}</div>
                    <div className="p-5 bg-gray-900 mt-10 flex items-center rounded-xl">
                        <div>
                            <div className="bg-blue-500 h-20 w-96 flex items-center justify-center text-2xl font-semibold  rounded-xl" onClick={buyItem}>
                                <FaWallet className="mr-5"/>
                                <p>BUY NFT</p>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Nft  