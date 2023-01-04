import React from 'react'

function Main() {
  return (
    <div className='h-screen w-full overflow-y-scroll no-scrollbar' >
      <img src="https://i.ibb.co/7gFhGr4/oie-Yr4bc-Rzln-Wtb.jpg" alt="mainBack" className='rounded-md lg:flex hidden opacity-60 h-screen w-full absolute -z-50 overflow-y-scroll no-scrollbar'/>
      <img src={'https://i.ibb.co/c266fBG/Whats-App-Image-2022-12-21-at-8-42-21-PM.jpg'} alt="another" className='h-full w-full lg:hidden absolute -z-50 opacity-60'/>
      <div className='bg-black bg-opacity-40 h-full w-full absolute -z-40 '></div>
        <div className='h-10 w-full hidden lg:flex'></div>
        <div className='flex lg:flex-row flex-col justify-evenly items-center h-full w-full'>
          <div className='lg:max-w-screen-lg  flex flex-col justify-center items-left lg:text-white text-black lg:bg-inherit bg-white bg-opacity-40 rounded-md p-3 m-3'>
            <p className='lg:text-5xl text-4xl font-bold '>Computer Society of India</p>
            <p className=' pt-5'>The Computer Society of India (CSI) is a professional body for Information Technology professionals in India. Established in 1965, it is the largest professional body of its kind in India, with over 100,000 members. The CSI is a non-profit, non-governmental organization, registered under the Societies Registration Act of 1860. Its mission is to promote and advance the theory, practice and application of computer and IT science and technology. It also works to further the professional growth of its members and facilitate the development of the Indian IT industry.</p>
          </div>
          
        </div>
    </div>
  )
}

export default Main