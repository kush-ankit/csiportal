import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <div name="Home" className='overflow-y-scroll no-scrollbar'>
            <Navbar />
            <Main />
        </div>
    )
}

export default Home