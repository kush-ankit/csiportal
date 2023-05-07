import React, { useEffect, useRef, useState } from 'react'
import Navbar from "../components/Navbar";
import '../Style/Home.css'
import imagesMobile from '../assets/MobilePhotos';
import imagesLaptop from '../assets/LaptopPhotos';

function Home() {

    const counter = useRef(0);
    const [current1, setCurrent1] = useState(imagesMobile[0]);
    const [current2, setCurrent2] = useState(imagesLaptop[0]);
    // const images = [
    //     "https://i.ibb.co/7gFhGr4/oie-Yr4bc-Rzln-Wtb.jpg",
    //     "https://i.ibb.co/k2mG0qz/Screenshot-2022-10-15-195041.png",
    //     "https://i.ibb.co/4TdZ5Mm/Whats-App-Image-2022-12-21-at-8-42-20-PM.jpg",
    // ]
    useEffect(
        () => {
            let scrollInterval = null;
            scrollInterval = setInterval(() => {
                counter.current += 1;
                setCurrent1(() => imagesMobile[(counter.current) % imagesMobile.length])
                setCurrent2(() => imagesLaptop[(counter.current) % imagesLaptop.length])
            }, 5000)
            return () => clearInterval(scrollInterval)
        }
    )


    return (
        <div name='Home' className='h-full w-full bg-black'>
            <Navbar />
            <div className='w-full h-full absolute z-30 flex items-end md:justify-start justify-center'>
                <div className=' text-white font-poppins md:p-10 animate-charcter '>
                    <p className='md:text-4xl text-xl font-bold '>Computer Society of India</p>
                    <p className='md:text-2xl text-md'>SRMCEM Student Chapter</p>
                </div>
            </div>
            <img src={current1} alt="img" className='h-[100vh] w-full opacity-40 md:hidden flex' />
            <img src={current2} alt="img" className='h-[100vh] w-full opacity-40 hidden md:flex' />
        </div >
    )
}

export default Home

