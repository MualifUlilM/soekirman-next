function SideTextImageComponent(props) {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex justify-between py-16 border-b-2 border-gray-600 pb-16 mobile:flex-col table:flex-col desktop:flex-row tablet:text-center desktop:text-left mobile:text-center p-5">
                <div className="max-w-3xl mx-auto desktop:mr-4 desktop:pr-5">
                    <h1 className=" text-3xl font-montserrat font-bold italic">{props.title.toUpperCase()}</h1>
                    <p className="py-5  font-montserrat font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laborum, obcaecati atque dolorum aperiam omnis veniam nulla eligendi rem quaerat, eaque sapiente. Quibusdam atque odio tempore deserunt, facilis incidunt eum!</p>
                    <p className="py-5  font-montserrat font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta cupiditate quas ipsa corporis, aliquid blanditiis sunt nobis officia voluptatum qui consequuntur nesciunt neque ab amet sint ex aliquam atque. Aliquid!</p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <img
                        src="https://indonesiamendesain.com/wp-content/uploads/2020/07/Example-of-computer-illustration-digital-art-oct16.jpg"
                        className="h-full w-full object-cover"
                        alt=""
                        srcSet=""
                    />
                </div>
            </div>
        </div>
    )
}

export default SideTextImageComponent