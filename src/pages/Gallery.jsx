import React from 'react'
import ImgComp from '../components/ImgComp'
import imagesLaptop from '../assets/LaptopPhotos'

function Gallery() {
  // const images = [
  //   {
  //     id: 1,
  //     goto: 'https://i.ibb.co/Lkdy6CD/Whats-App-Image-2022-12-21-at-8-42-21-PM.jpg',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 2,
  //     goto: 'https://i.ibb.co/6Ym07d5/IMG3.jpg',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 3,
  //     goto: 'https://i.ibb.co/6Ym07d5/IMG3.jpg',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 4,
  //     goto: 'https://i.ibb.co/4TdZ5Mm/Whats-App-Image-2022-12-21-at-8-42-20-PM.jpg',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 5,
  //     goto: 'https://i.ibb.co/k2mG0qz/Screenshot-2022-10-15-195041.png',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 6,
  //     goto: 'https://i.ibb.co/K9MGLBQ/poster-1.png',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 4,
  //     goto: 'https://i.ibb.co/4TdZ5Mm/Whats-App-Image-2022-12-21-at-8-42-20-PM.jpg',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 5,
  //     goto: 'https://i.ibb.co/k2mG0qz/Screenshot-2022-10-15-195041.png',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 6,
  //     goto: 'https://i.ibb.co/K9MGLBQ/poster-1.png',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 4,
  //     goto: 'https://i.ibb.co/4TdZ5Mm/Whats-App-Image-2022-12-21-at-8-42-20-PM.jpg',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 5,
  //     goto: 'https://i.ibb.co/k2mG0qz/Screenshot-2022-10-15-195041.png',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 6,
  //     goto: 'https://i.ibb.co/K9MGLBQ/poster-1.png',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 4,
  //     goto: 'https://i.ibb.co/4TdZ5Mm/Whats-App-Image-2022-12-21-at-8-42-20-PM.jpg',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 5,
  //     goto: 'https://i.ibb.co/k2mG0qz/Screenshot-2022-10-15-195041.png',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 6,
  //     goto: 'https://i.ibb.co/K9MGLBQ/poster-1.png',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 4,
  //     goto: 'https://i.ibb.co/4TdZ5Mm/Whats-App-Image-2022-12-21-at-8-42-20-PM.jpg',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 5,
  //     goto: 'https://i.ibb.co/k2mG0qz/Screenshot-2022-10-15-195041.png',
  //     about: 'Pollution'
  //   },
  //   {
  //     id: 6,
  //     goto: 'https://i.ibb.co/K9MGLBQ/poster-1.png',
  //     about: 'Pollution'
  //   },


  // ]


  return (
    <div name='Gallery' className='w-full h-fit md:p-10 flex flex-col justify-center items-center pb-20 md:pb-0'>
      <h1 className='text-5xl p-14 font-ourEvent text-zinc-800 italic'>Gallery</h1>
      <div className=' w-full h-screen overflow-hidden p-5 md:p-10 '>
        <div className='grid grid-cols-2 gap-2 md:grid-cols-5'>
          {imagesLaptop.map((Images) => {
            return (
              <ImgComp id={Images.indexOf()} goto={Images} about={"about"} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Gallery