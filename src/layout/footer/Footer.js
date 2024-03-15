import React from 'react'
import logo from '../../assets/logo/logo.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logooutline from "../../assets/images/logooutline.png"
import CopyrightIcon from '@mui/icons-material/Copyright';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <>
            <div className='flex justify-between mt-20 px-12 footer_link'>
                <div className='footer_details'>
                    <div className='logo mb-6'>
                        <img src={logo} alt='logo' className='w-36' />
                    </div>
                    <div className='p-4 flex gap-2'>
                        <div className='facbook_colour'>
                            <FacebookRoundedIcon />
                        </div>
                        <div className='twitter_icon'>
                            <TwitterIcon />
                        </div>
                        <div className='instagram_icon'>
                            <InstagramIcon />
                        </div>
                        <div className='linkedin_icon'>
                            <LinkedInIcon />
                        </div>
                    </div>
                </div>
                <div className='flex gap-10 footer_nav'>
                    <div className='py-2'>
                        <a href="" className='py-2 text-sm footer_content'>HOW IT WORK</a>
                    </div>
                    <div className='flex flex-col'>
                        <a href="" className='py-2 text-sm footer_content'>FAQ</a>
                        <a href="" className='py-2 text-sm footer_content'>PRIVACY POLICY</a>
                        <a href="" className='py-2 text-sm footer_content'>TERMS AND CONDITION</a>
                    </div>
                    <div className='py-2'>
                        <a href="" className='py-2 text-sm footer_content'>BLOG</a>
                    </div>
                    <div className='py-2'>
                        <a href="" className='py-2 text-sm'>ARE YOU HIRING? <span style={{ color: '#FF914D' }}>FIND TALENT </span></a>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <img src={Logooutline} alt='outline' className='w-80 items-center justify-center' />
            </div>
            <div className='flex justify-center items-center pb-20'>
                <div className='text-black'>
                    <CopyrightIcon />
                </div>
                <div>
                    <p className='text-black'>2024 Mentor Hint  Inc. All rights reserved </p>
                </div>
            </div>
        </>
    )
}

export default Footer