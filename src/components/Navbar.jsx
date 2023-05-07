import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-scroll';
import './Navbar.css'

function Navbar() {

  const [menu, setMenu] = useState(true);
  const [isScroll, setIsScroll] = useState(false);


  const navBar = [
    {
      id: 1,
      link: 'Home',
      goto: 'Home'
    },
    {
      id: 3,
      link: 'Events',
      goto: 'Event',
    },
    {
      id: 2,
      link: 'Team',
      goto: 'Team'

    },
    {
      id: 4,
      link: 'Gallery',
      goto: 'Gallery',
    },
    {
      id: 5,
      link: 'Contact us',
      goto: 'Contact'
    },
    {
      id: 6,
      link: 'Feedback',
      goto: 'Feedback'
    }
  ];
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 300) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  }


  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
  })


  return (
    <div>
      <div style={{ 
        backgroundColor: isScroll ? '#D8DAF0' : 'transparent',
        color: isScroll ? 'black' : 'white',
     }} className='w-full fixed top-0 z-50 duration-500'>
        <div className='p-3 flex flex-row md:justify-evenly justify-between items-center' >
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/csi-srmcem.appspot.com/o/csisrmcem%20Logo.png?alt=media&token=272ac959-24e8-4562-8e86-ebae8e4969d5" alt="Logo" className='md:w-[6rem] md:h-[6rem] w-[3.5rem] h-[3.5rem] rounded-full' />
          </div>
          <div className='hidden lg:flex flex-row justify-evenly w-1/2 p-1 rounded-3xl'>
            {
              navBar.map(({ id, link, goto }) => (
                <Link to={goto} smooth className='cursor-pointer  hover:scale-150 duration-300 px-6 py-2 rounded-3xl' key={id}>{link}</Link>
              ))
            }

          </div>
          <div className='lg:hidden pr-3 ' onClick={() => { setMenu(!menu); setIsScroll(false) }}>
            {menu ? <RxHamburgerMenu size={30} /> : <RxCross2 size={30} />}
          </div>
        </div>
      </div>
      {
        !menu && <div className='bg-black fixed z-50 w-full h-[100vh] bg-opacity-90' onClick={() => { setMenu(!menu) }}>
          <div className='w-full h-full'>
            <div className='flex flex-col justify-center items-center w-full h-full gap-5 '>
              {
                navBar.map(({ id, link, goto }) => (
                  <Link to={goto} smooth className='cursor-pointer text-white text-xl px-3 py-1 rounded-xl' key={id} onClick={() => setMenu(!menu)}>{link}</Link>
                ))
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar