import React from 'react'

function ImgComp(props) {
    return (
        <div className='flex justify-center items-center'>
            <div className='hover:opacity-60 '>
                <img src={props.goto} alt={"image" + props.id} className='hover:scale-75 duration-300 h-full w-full rounded-md' />
            </div>
        </div>
    )
}

export default ImgComp