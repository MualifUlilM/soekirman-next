export default function TheTeam(){

    let images = [
        {
          id: 1,
          photo:
            'https://cdn.pixabay.com/photo/2021/11/11/13/08/leopard-6786267__340.jpg',
        },
        {
          id: 2,
          photo:
            'https://cdn.pixabay.com/photo/2020/07/01/17/34/wolf-5360340__340.jpg',
        },
        {
          id: 3,
          photo:
            'https://cdn.pixabay.com/photo/2020/09/23/17/12/flowers-5596564__340.png',
        },
        {
          id: 4,
          photo:
            'https://cdn.pixabay.com/photo/2021/10/27/08/43/forest-6746433__340.jpg',
        },
      ];

    return (
        <div id="the-team" className="flex max-w-7xl mx-auto border-t-2 border-gray-600 border-solid pt-8 items-center mobile:flex-col tablet:flex-col desktop:flex-row tablet:text-center desktop:text-left mobile:text-center">
      <div>
          <h1 className="font-montserrat font-bold italic  text-4xl">
        MEET THE TEAM
      </h1>
      <p className="font-montserrat font-light  mt-5">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti fugit
        vitae quaerat odio laborum repellat voluptas, eaque asperiores animi
        magni architecto deserunt autem dolorum quo totam distinctio blanditiis
        nostrum facere!
      </p>
      </div>
      <div className="container mx-auto justify-center items-center max-w-xl mt-5 mb-5">
    <div className="desktop:flex desktop:flex-wrap grid grid-cols-2">
      <div className="w-full lg:w-1/2 p-3 rounded-md">
        {
            images.forEach(image => {
                return <img src={image.photo} alt="image" className="rounded-md"/>
            })
        }
      </div>
    </div>
  </div>
  </div>
    )
}