import React from 'react'

function Events() {


    const Event = [
        {
            id: 1,
            Photo: 'https://i.ibb.co/30BJ2kX/NATIONAL-POLLUTION-CONTROL-DAY-Card-Landscape-6-x-4-in.png',
            Name: 'National Pollution Control Day',
            Description: 'To spread awareness about pollution control among the youth generation of Engineers by the means of quiz and poster making competition.',
        },
        {
            id: 2,
            Photo: 'https://i.ibb.co/K9MGLBQ/poster-1.png',
            Name: `Introduction to Python`,
            Description: 'Introducing the audience to the basics of programming concepts and giving them the foremost knowledge about python and discussing its real-worldapplications.',
        },
        {
            id: 3,
            Photo: 'https://i.ibb.co/S3tvPLC/poster.png',
            Name: 'Hacktoberfest 2022',
            Description: 'Introduced students to getting started with Open-Source contributions with the help of beginner friendly event, Hacktoberfest 2022.',
        },
        {
            id: 4,
            Photo: 'https://i.ibb.co/jGWKLfD/poster-flutter.png',
            Name: 'Introduction to Flutter',
            Description: 'Introducing the field basics of hybrid application development with the introduction of Flutter.',
        }
    ];



    return (
        <div name='Event' className='w-fit h-fit'>
            <div className='h-full w-full  md:p-10 p-5'>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                    <div className='text-5xl pb-14 font-ourEvent text-zinc-800 italic'>
                        Our Events
                    </div>
                    <div className='w-full md:h-full  rounded-lg grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-4 '>
                        {Event.map(({ id, Photo, Name, Description, More }) => (
                            <div key={id} className=' shadow-2xl shadow-violet-500 md:w-4/5 md:p-9 p-2 flex items-center justify-between flex-col rounded-xl hover:scale-110 duration-300'>
                                <img src={Photo} alt="Event" className='rounded-lg h-1/2 hover:scale-110 duration-500' />
                                <p className='md:text-3xl textxl font-Heading font-bold '>{Name}</p>
                                <p className='hidden md:flex'>{Description}</p>
                                <button id={id} className='bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-md cursor-pointer hover:ring-2 ring-black md:hidden' >Know more</button>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Events