const WellcomeToSoekirman = () => {
    return (
        <div className="desktop:max-w-7xl mobile:max-w-full tablet:max-w-full mx-auto items-center">

            <div className="flex justify-center max-w-7xl">
                <img
                    src="https://indonesiamendesain.com/wp-content/uploads/2020/07/Example-of-computer-illustration-digital-art-oct16.jpg"
                    className="h-full w-full object-cover"
                    alt=""
                    srcSet=""
                />
            </div>

            <div
                className="flex mobile:flex-col tablet:flex-col desktop:flex-row px-2 py-20 justify-center items-center desktop:space-x-5 tablet:text-center desktop:text-left mobile:text-center"
            >

                <div className="max-w-3xl">
                    <h1 className="font-montserrat font-bold italic  text-4xl">
                        WELCOME TO THE SOEKIRMAN CLUB
                    </h1>
                    <p className=" font-montserrat font-light py-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        dignissim imperdiet interdum. Vivamus eu sapien nisi. Morbi odio
                        risus, aliquet non purus pellentesque, feugiat fermentum orci. Donec
                        interdum blandit congue. Aenean tincidunt, ex eget viverra auctor,
                        justo leo pharetra ex, et tristique urna magna ac arcu. Mauris
                        scelerisque, arcu vitae hendrerit porttitor, enim metus dapibus augue,
                        id lacinia erat nisi id leo. Donec sodales, erat eu mattis vestibulum,
                        lorem neque ultrices orci, et rutrum tortor lacus et ante. Nullam
                        ornare nulla quis turpis maximus hendrerit sed imperdiet dolor.
                        Vivamus sit amet egestas velit, eget placerat purus. Suspendisse in
                        egestas ante, quis condimentum neque. Nullam malesuada libero elit, a
                        viverra diam vehicula eget. Curabitur a varius nisl, ut luctus nibh.
                        Nulla molestie ornare rutrum. Vivamus urna turpis, pellentesque et
                        varius vel, porta nec orci.
                    </p>
                </div>

                <div className="max-w-2xl">
                    <img
                        src="https://indonesiamendesain.com/wp-content/uploads/2020/07/Example-of-computer-illustration-digital-art-oct16.jpg"
                        className="h-full w-full object-cover"
                        alt=""
                        srcSet=""
                    />
                </div>
            </div>

            <div className="flex items-center mobile:flex-col tablet:flex-col desktop:flex-row tablet:text-center desktop:text-left mobile:text-center" id="example">
                <div className="max-w-5xl">
                    <h2 className="text-blue-400 font-montserrat italic font-normal text-4xl">
                        FAIR DISTRIBUTION
                    </h2>
                    <h3 className=" font-montserrat text-2xl">
                        (BONDING CURVES ARE A PONZI)
                    </h3>
                    <p className=" font-montserrat py-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        dignissim imperdiet interdum. Vivamus eu sapien nisi. Morbi odio
                        risus, aliquet non purus pellentesque, feugiat fermentum orci.
                    </p>
                </div>
                <div className="max-w-xl">
                    <p className="text-indigo-50 font-thin">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                        recusandae harum distinctio, debitis nulla dicta explicabo placeat,
                        consequuntur, atque impedit eos earum consequatur eveniet qui amet
                        tempora provident. Iure, labore!
                    </p>
                </div>
            </div>

            <div id="buy-soekirman" className="flex justify-between bg-blue-600 text-white h-auto p-8 items-center mobile:flex-col tablet:flex-col desktop:flex-row mobile:space-y-5 tablet:space-y-7 desktop:space-y-0">
                <div className="max-w-2 font-montserrat font-extrabold text-2xl italic">
                    BUY SOEKIRMAN
                </div>
                <div className="tablet:text-center desktop:text-left mobile:text-center max-w-sm text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione eius
                    vero corporis dolores voluptate,
                </div>
                <div className="">
                    <button
                        type="button"
                        className=" font-montserrat font-semibold h-auto w-auto rounded-lg  text-lg py-4 px-5 bg-white text-black"
                    >
                        Buy On OpenSea
                    </button>
                </div>
            </div>
            <div className="h-10 border-b-2 border-gray-600"></div>
        </div>
    )
}

export default WellcomeToSoekirman