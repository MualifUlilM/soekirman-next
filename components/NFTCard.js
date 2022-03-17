import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from 'next/link'

const NFTCard = ({ nftItem, title, listings }) => {
    const [isListed, setIsListed] = useState(false);
    const [price, setPrice] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const listing = listings.find((listing) => listing.asset.id === nftItem.id)
        for (let index = 0; index < listings.length; index++) {
            // console.log("🎴 ",listings[index].asset.id);
            // console.log(listings[index])
        }
        if (Boolean(listing)) {
            setIsListed(true)
            setPrice(listing.buyoutCurrencyValuePerToken.displayValue)
        }
    }, [listings, nftItem])



    return (
        <Link className="" href={`https://testnets.opensea.io/assets/0xad0fd2041f28f5e87fb1658c97f43a6a3249d36d/${nftItem.id}`} >
            <a className="flex flex-col m-2 items-center" target="_blank">
            <img src={nftItem.image} className="h-80 w-60 object-cover rounded-lg items-center"></img>
            <div className="flex justify-between py-2 px-2 w-full ">
                <div>{title}</div>
                {
                    isListed ? (
                        <div className="flex items-center">
                            <img srcSet="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" className="h-5 w-5 pr-2"></img>
                            <div>{price}</div>
                        </div>) : (<div></div>)
                }
            </div>
            </a>
        </Link>
    )
}

export default NFTCard;