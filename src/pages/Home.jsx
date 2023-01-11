import React from 'react'

function Home() {
    return (
        <div className=' md:p-10 md:h-screen w-screen'>
            <img src="https://i.ibb.co/D96qPDx/2ewf.png" alt="back" className='fixed h-screen w-screen -z-50 md:hidden' />
            <div name="Home" className='h-screen w-full overflow-y-scroll no-scrollbar  rounded-lg'>
                <div className=' bg-opacity-60 w-full h-full overflow-hidden duration-300 '>
                    <div className='w-full h-full p-10 flex justify-center items-center'>
                        <div className='w-full h-full flex items-center'>
                            <div className='md:w-[80%] w-full h-[80%] rounded-lg'>
                                <div className='h-full w-full md:p-10'>
                                    <div className='h-full w-full'>
                                        <h1 className='md:text-5xl text-3xl font-semibold italic font-Heading md:pb-4 pb-2'>Computer Society of India</h1>
                                        <p className='font-semibold'>The Computer Society of India (CSI) is a non-profit voluntary organization established in 1965. It is the largest, professional and non-governmental organization in India which works in the field of Information Technology (IT). It was established with the aim of advancing the knowledge and practice of Computer Science and related subjects. It has more than 100,000 members, including professionals, educators and students, drawn from industry, academia and research organizations. The society provides a platform for IT professionals to share their knowledge and experience and to keep abreast of the latest trends in the industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-full flex items-center'>
                            <img src="https://i.ibb.co/SvMqy65/graphic-designer-job-description-removebg-preview.png" alt="img" className='w-full'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home