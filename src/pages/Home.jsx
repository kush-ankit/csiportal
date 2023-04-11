import React, { useEffect, useRef, useState } from 'react'
import Navbar from "../components/Navbar";

function Home() {

    const counter = useRef(0);
    const [current, setCurrent] = useState()



    const images = [
        "https://i.ibb.co/6Ym07d5/IMG3.jpg",
        "https://i.ibb.co/7gFhGr4/oie-Yr4bc-Rzln-Wtb.jpg",
        "https://i.ibb.co/k2mG0qz/Screenshot-2022-10-15-195041.png",
        "https://i.ibb.co/4TdZ5Mm/Whats-App-Image-2022-12-21-at-8-42-20-PM.jpg",
    ]
    useEffect(
        () => {
            let scrollInterval = null;
            scrollInterval = setInterval(() => {
                setCurrent(() => images[(counter.current) % images.length])
                counter.current += 1;
            }, 5000)
            return () => clearInterval(scrollInterval)
        }
    )


    return (
        <div name='Home' className='md:h-[80vh] h-[60vh] w-full'>
            <img src={current} alt="img" className='absolute -z-50 h-[60vh] md:h-[80vh] md:w-full' />
            <div className='w-full h-full'>
                <Navbar />
                <div className='w-full h-full flex items-center '>
                    <div className='md:w-3/5 h-full rounded-lg m-auto '>
                        <div className='h-full w-full md:p-10 p-5 '>
                            <div className='h-full w-full text-white flex flex-col justify-center gap-3 '>
                                <h1 className='md:text-5xl text-3xl font-semibold italic font-serif md:pb-4 pb-2 text-blue-600 backdrop-blur-md rounded-t-lg'>Computer Society <br className='md:hidden' /> of India</h1>
                                <p className=' py-5 md:text-lg text-xs pl-2 backdrop-blur-md rounded-b-lg'>The Computer Society of India (CSI) is a non-profit voluntary organization established in 1965. It is the largest, professional and non-governmental organization in India which works in the field of Information Technology (IT). It was established with the aim of advancing the knowledge and practice of Computer Science and related subjects.<div className='hidden md:flex'> It has more than 100,000 members, including professionals, educators and students, drawn from industry, academia and research organizations. The society provides a platform for IT professionals to share their knowledge and experience and to keep abreast of the latest trends in the industry.</div></p>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/5 h-full bg-transparent hidden md:flex'></div>
                </div>
            </div>
        </div >
    )
}

export default Home

