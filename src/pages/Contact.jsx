import React from 'react'
import { AiFillFacebook,AiFillLinkedin,AiFillInstagram } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';


function Contact() {
    return (
        <div className='bg-[#ccc] m-0 flex flex-col justify-center items-center h-screen w-full p-10'>
            <div className=' h-full w-full rounded-md shadow-2xl flex flex-row justify-center items-center bg-[#06063b]'>
                <div className='w-3/5 h-full rounded-l-md text-white flex justify-center items-center'>
                    <div className='h-[80%] w-[80%]'>
                        <div className='h-1/3 w-fit flex flex-col justify-evenly'>
                            <div className='text-5xl pb-5'>Let's Talk</div>
                            <div className='text-[#ccc]'>Fill up the form and our Team will get back <br /> to you within 24 hours. </div>
                        </div>
                        <div className='h-1/3 flex justify-evenly flex-col'>
                            <div className='flex text-1xl hover:text-blue-500'>
                                <BsTelephone size={20}/>
                                <div className='pl-5'>+91 96961 17951</div>
                            </div>
                            <div className='flex text-1xl hover:text-blue-500'>
                                <FiMail size={20}/>
                                <div className='pl-5'>er.ankitkush@gmail.com</div>
                            </div>
                            <div className='flex text-1xl hover:text-blue-500'>
                                <MdLocationPin size={20}/>
                                <div className='pl-5'>Rajpal Lodge,near Omega ,lucknow</div>
                            </div>
                        </div>
                        <div className='h-1/3 w-[70%] flex justify-center items-center'>
                            <div className='flex text-3xl justify-evenly w-full'>
                                <div className='hover:text-blue-500'><AiFillFacebook/></div>
                                <div className='hover:text-blue-500'><AiFillLinkedin/></div>
                                <div className='hover:text-blue-500'><AiFillInstagram/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-2/5 h-full rounded-r-md p-10 '>
                    <div className='h-full w-full bg-white rounded-lg flex justify-center items-center'>
                        <div className='h-[80%] w-[80%]'>
                            <form action="">
                                <p className='py-3'>Your Name</p>
                                <input name='Name' type="text" placeholder='Put your name here' className='w-full p-2 border-2 bg-slate-200 rounded-sm hover:border-blue-500' />
                                <p className='py-3'>Your Email</p>
                                <input name='email' type="text" placeholder='Email Here' className='w-full p-2 border-2 bg-slate-200 rounded-sm hover:border-blue-500' />
                                <p className='py-3'>Description Here</p>
                                <textarea name="Description" id="Desc" cols="30" rows="5" className='w-full p-2  border-2 bg-slate-200 rounded-sm hover:border-blue-500' ></textarea>
                                <div className='h-full w-full flex justify-center items-center p-5'>
                                    <button type='submit' className='bg-gradient-to-r from-blue-500 to-cyan-500 py-2 px-5 rounded-md hover:border-2 border-black duration-200'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >

        </div >

    )
}

export default Contact