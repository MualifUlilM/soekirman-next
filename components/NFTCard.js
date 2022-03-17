import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
        <div className="text-white m-2" onClick={()=>router.push({
            pathname: `/nfts/${nftItem.id}`,
            query: {
                isListed: isListed,
            }
        })}>
            <img src={nftItem.image} className="h-80 w-60 object-cover rounded-lg"></img>
            <div className="flex justify-between py-2 items-center px-2">
                <div>{title}</div>
                {
                    isListed ? (
                        <div className="flex items-center">
                            <img srcSet="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" className="h-5 w-5 pr-2"></img>
                            <div>{price}</div>
                        </div>) : (<div></div>)
                }
            </div>
        </div>
    )
}

export default NFTCard;