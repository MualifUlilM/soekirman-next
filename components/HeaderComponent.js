import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, { useEffect, useState } from 'react'
import soekirmanLogo from '../assets/logo.png'
import { ThirdwebProvider, ConnectWallet } from '@3rdweb/react'
import { useWeb3 } from '@3rdweb/hooks'
import { client } from '../lib/sanityClient'


export default function Header() {

    const { address, connectWallet } = useWeb3();
    

    const [isLogin, setIsLogin] = useState(false);
    // const welcomeUser = (userName, toastHandler = toast) => {
    //     toastHandler.success(
    //         `Welcome back${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
    //         {
    //             style: {
    //                 background: '#04111d',
    //                 color: '#fff',
    //             },
    //         }
    //     )
    // }

    useEffect(() => {
        if(Boolean(address)){
            console.log(address)
            setIsLogin(true)
        }else{
            console.log("Empty")
            setIsLogin(false)
        }
    }, [address]
    )

    const siteTitle = "Soekirman"
    const menu = [
        { 'name': 'Home', 'link': '/' },
        { 'name': 'About', 'link': '/about' },
        { 'name': 'Contact', 'link': '/contact' },
        { 'name': 'Blog', 'link': '/blog' }
    ]

    return (

        <div className="max-w-7xl m-auto py-5 px-5 flex justify-between ">
            <div className='flex items-center justify-center'>
                    <Image src={soekirmanLogo} height={70} width={70}></Image>
                <div className='pl-5  font-bold text-xl italic' >{siteTitle.toUpperCase()}</div>
            </div>
            <div className="flex items-center font-semibold italic">
                {menu.map((item, index) => {
                    return <a key={item.name} href={item.link} className=" text-sm mr-5 hover:text-blue-400">{item.name}</a>
                })}
                <Link href="/galleries">
                    <div className=' text-sm mr-5 hover:text-blue-400 cursor-pointer'>Galleries</div>
                </Link>
                {
                    !isLogin ? <button
                    onClick={() => connectWallet('injected').then(()=>{
                        setIsLogin(true)
                    })}
                    className="bg-blue-600 px-5 py-2 rounded-md  font-semibold italic">
                    Connect Wallet
                </button> : <div></div> 
                }
                {/* <ConnectWallet/> */}
            </div>
        </div>
    )
}

