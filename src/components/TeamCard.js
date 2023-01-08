import React from 'react'

function TeamCard(props) {
  return (
    <div className='p-5 group'>
      <div className="card hover:p-5 duration-300">

        <img
          src={props.img}
          alt="Untitled-design-2"
          border="0"
        />
        <div className="about md:pt-5 flex flex-col items-center ">
          <h1 className="name">{props.name}</h1>
          <h1 className="post text-transparent group-hover:text-black">{props.post}</h1>
        </div>
      </div></div>
  )
}

export default TeamCard