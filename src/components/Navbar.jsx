import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-scroll';

function Navbar() {

  function handleClick(){
    if(icon){
      
    }
  }


  var [icon, setIcon] = useState()

  icon = false;

  const navBar = [
    {
      id: 1,
      link: 'Home',
      goto: 'Home'
    },
    {
      id: 2,
      link: 'Team',
      goto: 'Team'

    },
    {
      id: 3,
      link: 'Events',
      goto: 'Event',
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
  ]

  return (
    <div className='w-full md:fixed '>
      <div className='p-3 flex flex-row md:justify-evenly justify-between items-center' >
        <div className='text-3xl pl-3 font-display flex flex-row items-baseline text-blue-600 bg-white py-1 px-6 rounded-3xl'>
          <div>CSI</div>
          <div className='text-3xl font-SRMCEM'>SRMCEM</div>
        </div>
        <div className='hidden lg:flex flex-row justify-evenly w-1/2 bg-white p-1 rounded-3xl'>
          {
            navBar.map(({ id, link, goto }) => (
              <Link to={goto} smooth className='cursor-pointer hover:text-white hover:bg-zinc-600 px-6 py-2 rounded-3xl' key={id}>{link}</Link>
            ))
          }

        </div>
        <div className='lg:hidden pr-3 text-white' onClick={handleClick} >
          {icon ? <RxHamburgerMenu size={30} /> : <RxCross2 size={30} />}
        </div>
      </div>
    </div>
  )
}

export default Navbar