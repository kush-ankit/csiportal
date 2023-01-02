import React from 'react'

function Navbar() {
  const navBar = [
    {
      id: 1,
      link: 'Home',

    },
    {
      id: 2,
      link: 'Events',
    },
    {
      id: 3,
      link: 'Gallery'
    },
    {
      id: 4,
      link: 'Contact us'
    },
    {
      id: 5,
      link: 'Join us'
    },
    {
      id: 6,
      link: 'Feedback'
    }
  ]

  return (
    <div className='bg-white rounded-md absolute w-full'>
      <div className='p-3 flex flex-row justify-between items-center' >
        <div className='text-5xl pl-5 font-display'>CSI</div>
        <div className='flex flex-row justify-evenly w-1/2'>
          {
            navBar.map(({id, link})=>(
              <div className='cursor-pointer hover:text-blue-500' key={id}>{link}</div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar