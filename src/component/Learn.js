import React from 'react'
import Line from '../assets/images/orangeline.png'

const Learn = () => {
    return (
        <>
            <div className='learn_background'>
                <div className='mt-10 text-3xl flex items-center justify-center top-3' >
                    <p className='pt-6 text-black font-medium'><span style={{ color: '#0b93db' }}>Learn </span>your way</p>
                </div>
                <div className='flex items-center justify-center mb-10 mt-2'>
                    <img src={Line} alt='line' className='w-32' />
                </div>
                <div>
                    <p className='text-center'>Everyone's needs are different - We match you with experienced tutors who personalise your learning to help you achieve your goals.</p>
                </div>
            </div>
        </>
    )
}

export default Learn