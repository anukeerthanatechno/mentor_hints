import React from 'react'
import Videoimage from '../assets/images/videoimage.png'
import Play from '../assets/images/play.png'
import Line from '../assets/images/orangeline.png'


const Membership = () => {
    return (
        <>
            <div className='mt-10 text-3xl flex items-center justify-center' >
                <p className='text-black font-medium'>How can <span style={{ color: '#0b93db' }}>1:1 mentorship </span> help you</p>
            </div>
            <div className='flex items-center justify-center mb-10 mt-2'>
                <img src={Line} alt='line' className='w-32' />
            </div>
            <div className='relative flex items-center justify-center'>
                <img src={Play} alt='play' className='absolute w-12' />
                <img src={Videoimage} alt='image' className='w-3/4' />
            </div>
        </>
    )
}

export default Membership