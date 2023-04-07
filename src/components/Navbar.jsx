import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-scroll';

function Navbar() {
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
    <div className='text-white w-full md:fixed bg-slate-100 bg-opacity-20'>
      <div className='p-3 flex flex-row justify-between items-center' >
        <div className='text-3xl pl-3 font-display flex flex-row items-baseline text-blue-600'>
          <div>CSI</div>
          <div className='text-3xl font-SRMCEM'>SRMCEM</div>
        </div>
        <div className='hidden lg:flex flex-row justify-evenly w-1/2 '>
          {
            navBar.map(({ id, link, goto }) => (
              <Link to={goto} smooth className='cursor-pointer hover:text-white hover:bg-zinc-600 px-6 py-3 rounded-3xl' key={id}>{link}</Link>
            ))
          }

        </div>
        <div className='lg:hidden pr-3'>
          <RxHamburgerMenu size={30} />
        </div>
      </div>
    </div>
  )
}

export default Navbar