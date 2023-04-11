import React from 'react'

function Add() {
  return (
    <div className=' w-full bg-white bg-opacity-90 px-10 py-5 flex md:flex-row flex-col md:justify-end md:items-center items-start gap-3 md:gap-10 text-xs md:text-base'>
      <div className='font-light '>Website Developed by :</div>
      <div className='flex justify-end items-center gap-5 '>
        <div>
          <img src="https://i.ibb.co/SwRjTxk/167212281343-removebg.png" alt="Ankit" className='md:h-16 h-12  bg-slate-300 rounded-full' />
        </div>
        <div className='leading-4 '>
          <div className='font-semibold'>Ankit Kushwaha</div>
          <div className='font-light'>Full-Stack Developer</div>
        </div>
      </div>
      <div className='flex justify-end items-center gap-5 '>
        <div>
          <img src="https://i.ibb.co/HTsPwc4/aditya-1.png" alt="Ankit" className='md:h-16 h-12 bg-slate-300 rounded-full' />
        </div>
        <div className='leading-4'>
          <div className='font-semibold'>Aditya kumar Singh</div>
          <div className='font-light text-xs'>Front-end & Mobile Developer</div>
        </div>
      </div>
    </div>
  )
}

export default Add