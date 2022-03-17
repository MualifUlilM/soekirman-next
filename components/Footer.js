import logo from "../assets/logo.png";
import Image from "next/image"

export default function Footer() {
    return (
        <div className="justify-between items-center border-solid border-white border-t-2 max-w-full mx-7 p-20 mt-8 mobile:hidden tablet:hidden desktop:flex">
            <div>
                <div
                    className="font-montserrat font-bold text-white text-xl italic mb-5"
                >GET ON THE LIST</div>
                <div className="flex">
                    <input className="shadow appearance-none border rounded-l-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
                        <button className="text-white bg-gray-500 p-2 rounded-r-sm">
                        </button>
                </div>
            </div>
            <div>
                <Image src={logo} width={70} height={70} alt="" srcSet="" className="max-h-20"/>
            </div>
            <div>
                <div className="flex space-x-5">
                    <li><Image src={logo} width={30} height={30} alt="" srcSet="" className="max-h-10"/></li>
                    <li><Image src={logo} width={30} height={30} alt="" srcSet="" className="max-h-10"/></li>
                    <li><Image src={logo} width={30} height={30} alt="" srcSet="" className="max-h-10"/></li>
                    <li><Image src={logo} width={30} height={30} alt="" srcSet="" className="max-h-10"/></li>
                </div>
                <p className="text-white text-xs font-montserrat font-light py-5">&copy; Soekirman 2022</p>
                <div className="text-blue-400 underline text-xs">
                    <a href="/">SOEKIRMAN Term & Condition</a>
                </div>
            </div>
        </div>
    )
}