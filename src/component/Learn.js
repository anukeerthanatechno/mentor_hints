import React from 'react'
import Line from '../assets/images/orangeline.png'
import Banner from '../assets/images/skillbanner.png'


const Learn = () => {
    const Date = [
        { day: 'Sun', date: '1' },
        { day: 'Mon', date: '2' },
        { day: 'Tue', date: '3' },
        { day: 'Wed', date: '4' },
        { day: 'thu', date: '5' },
    ];

    const Time = [
        { time: "09:10 AM" },
        { time: "09:30 AM" },
        { time: "10:30 AM" },
        { time: "08:40 PM" }
    ]
    return (
        <>
            <div className='learn_background'>
                <div className='container-box'>
                    <div className='mt-10 text-3xl flex items-center justify-center top-3' >
                        <p className='pt-6 text-black font-medium'><span style={{ color: '#0b93db' }}>Learn </span>your way</p>
                    </div>
                    <div className='flex items-center justify-center mb-10 mt-2'>
                        <img src={Line} alt='line' className='w-32' />
                    </div>
                    <div>
                        <p className='text-center'>Everyone's needs are different - We match you with experienced tutors who personalise your learning to help you achieve your goals.</p>
                    </div>
                    <div>
                        <div className='grid-cols-2 gap-32 items-center justify-center flex mx-12 py-10'>
                            <div>
                                <h6 className='text-3xl font-medium text-black'>Make Mentor Hint moves in your career</h6>
                                <p>Access top software developers who help you switch to a tech role or get promoted</p>
                            </div>
                            <div className='w-1/2'>
                                <img src={Banner} alt='banner' className='w-auto' />
                            </div>
                        </div>
                        <div className='grid-cols-2 gap-32 items-center justify-center flex mx-12 py-10'>
                            <div className='learn_card'>
                                <div>
                                    <p className='text-start pt-2 pb-2 px-1 text-black'>Appointemnt</p>
                                </div>
                                <div>
                                    <ul className='grid grid-cols-5 p-2 gap-7 learn_card_calc text-black'>
                                        {Date.map((item, idx) => (
                                            <li key={idx} className="flex flex-col items-center"> {/* Added flexbox styles to each li */}
                                                <span>{item.day}</span>
                                                <span>{item.date}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className='text-start pt-4 px-1 text-black'>Available Time</p>
                                </div>
                                <div>
                                    <ul className='learn_card_time py-2'>
                                        {Time.map((item, idx) => (
                                            <li className="learn_card_time_item" key={idx}>{item.time}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='confirm_button'>
                                    <button className='p-2 text-white '>
                                        Confirm
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h6 className='text-3xl font-medium text-black'>Upskill on your own time</h6>
                                    <p>Take classes when you’re free. You can easily do it alongside your full time job or over the weekends.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Learn

// #FF914D