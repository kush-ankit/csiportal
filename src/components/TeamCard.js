import React from 'react'

function TeamCard(props) {
  return (
    <div className='md:p-5 group flex justify-center'>
      <div className='-z-10 absolute overflow-hidden'>
        <img
          src='https://i.ibb.co/0tygFKB/blob-haikei-removebg-preview.png'
          alt="Untitled-design-2"
          border="0"
          className='scale-150 opacity-90 pt-10 w-fit md:w-60'
        />
      </div>
      <div className="card hover:scale-125 duration-300 flex flex-col justify-center items-center ">
        <img
          src={props.img}
          alt="Untitled-design-2"
          border="0"
        />
        <div className="about md:pt-5 flex flex-col items-center ">
          <h1 className="name">{props.name}</h1>
          <h1 className="post md:text-transparent md:group-hover:text-black">{props.post}</h1>
        </div>
      </div>
    </div>
  )
}

export default TeamCard