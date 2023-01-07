import React from 'react'
import { FiFacebook } from 'react-icons/fi';

function Contact() {
    return (
        <div className='bg-[#ccc] m-0 flex flex-col justify-center items-center h-screen w-full p-10'>
            <div className='bg-white h-full w-full rounded-md shadow-2xl flex flex-row justify-center items-center'>
                <div className='w-1/3 h-full bg-violet-900 rounded-l-md'>
                    <div className='w-full h-2/3'>

                    </div>
                    <div className='w-full h-1/3 flex flex-row justify-end'>
                        <div className=' w-3/4 h-full'>
                            <a href="www.facebook.com" target='_blank'><FiFacebook size={30} /></a>
                            <div>linked in</div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className='w-1/4 h-full bg-rose-400 rounded-tl-full'>

                        </div>
                    </div>
                </div>
                <div className='w-2/3 h-full rounded-r-md'>

                </div>
            </div>

        </div>

    )
}

export default Contact