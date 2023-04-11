import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';


function Contact() {
    return (
        <div>
            <div className='flex justify-center py-5'>
                <h1 className='text-5xl font-ourEvent text-zinc-800 italic'>Contact us</h1>
            </div>
            <div name='Contact' className=' m-0 flex flex-col justify-center items-center md:h-screen h-full w-full md:p-10 p-5'>
                <div className=' h-full w-full rounded-md shadow-2xl flex md:flex-row flex-col justify-center items-center md:bg-blue-900'>
                    <div className='w-3/5 h-full rounded-l-md text-white md:flex  justify-center items-center hidden '>
                        <div className='md:h-[80%] md:w-[80%]'>
                            <div className='md:h-1/3 w-fit flex flex-col justify-evenly'>
                                <div className='text-5xl py-5'>Let's Talk</div>
                                <div className='text-[#ccc]'>Fill up the form and our Team will get back <br className='hidden md:flex' /> to you within 24 hours. </div>
                            </div>
                            <div className='md:h-1/3 flex justify-evenly flex-col py-5'>
                                <div className='flex text-1xl hover:text-blue-500'>
                                    <BsTelephone size={20} />
                                    <div className='pl-5'>+91 96961 17951</div>
                                </div>
                                <div className='flex text-1xl hover:text-blue-500 py-5'>
                                    <FiMail size={20} />
                                    <div className='pl-5'>er.ankitkush@gmail.com</div>
                                </div>
                                <div className='flex text-1xl hover:text-blue-500'>
                                    <MdLocationPin size={20} />
                                    <div className='pl-5'>Rajpal Lodge,near Omega ,lucknow</div>
                                </div>
                            </div>
                            <div className='md:h-1/3 md:w-[70%] flex md:justify-center items-center'>
                                <div className='flex text-3xl justify-evenly w-full'>
                                    <div className='hover:text-blue-500'><AiFillFacebook /></div>
                                    <a href='https://www.linkedin.com/company/computer-society-of-india-csi-srmcem/' target='_blank' rel="noreferrer" className='hover:text-blue-500'><AiFillLinkedin /></a>
                                    <a href='https://instagram.com/csi_srmcem?igshid=ZDdkNTZiNTM=' target='_blank' rel='noreferrer' className='hover:text-blue-500'><AiFillInstagram /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-2/5 w-full h-full rounded-r-md md:p-10 backdrop-blur-lg'>
                        <div className='h-full w-full  flex justify-center items-center'>
                            <div className='h-[80%] w-[80%]'>
                                <form action="">
                                    <p className='py-3'>Your Name</p>
                                    <input name='Name' type="text" placeholder='Fullname' className='w-full p-2 border-2 bg-slate-200 rounded-sm hover:border-blue-500 outline-none' />
                                    <p className='py-3'>Your Email</p>
                                    <input name='email' type="text" placeholder='Email' className='w-full p-2 border-2 bg-slate-200 rounded-sm hover:border-blue-500 outline-none' />
                                    <p className='py-3'>Description Here</p>
                                    <textarea name="Description" id="Desc" cols="30" rows="5" placeholder='Describe yourself ...' className='w-full p-2  border-2 bg-slate-200 rounded-sm hover:border-blue-500 outline-none' ></textarea>
                                    <div className='h-full w-full flex justify-center items-center p-5'>
                                        <button type='submit' className='bg-gradient-to-r from-blue-500 to-cyan-500 py-2 px-5 rounded-md hover:border-2 border-black duration-200 outline-none hover:outline-none'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >

    )
}

export default Contact