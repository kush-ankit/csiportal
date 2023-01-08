import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';

function Navbar() {
  const navBar = [
    {
      id: 1,
      link: 'About us',

    },
    {
      id: 2,
      link: 'Home',
    },
    {
      id: 3,
      link: 'Events'
    },
    {
      id: 4,
      link: 'Gallery'
    },
    {
      id: 5,
      link: 'Contact us'
    },
    {
      id: 6,
      link: 'Feedback'
    }
  ]

  return (
    <div className='text-gray-700 rounded-md w-full fixed'>
      <div className='p-3 flex flex-row justify-between items-center' >
        <div className='text-5xl pl-5 font-display flex flex-row items-baseline'>
          <div>CSI</div>
          <div className='pl-2 text-3xl font-SRMCEM'>SRMCEM</div>
        </div>
        <div className='hidden lg:flex flex-row justify-evenly w-1/2'>
          {
            navBar.map(({ id, link }) => (
              <div className='cursor-pointer hover:text-blue-500' key={id}>{link}</div>
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