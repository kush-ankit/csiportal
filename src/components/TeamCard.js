import React from 'react'

function TeamCard(props) {
  return (
    <div>
    <div className="card">
          
    <img
      src={props.img}
      alt="Untitled-design-2"
      border="0"
    />
  <div className="about">
    <h1 className="name">{props.name}</h1>
    <h1 className="post">{props.post}</h1>
  </div>
</div></div>
  )
}

export default TeamCard