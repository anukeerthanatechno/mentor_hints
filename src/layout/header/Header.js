import React, { useState } from 'react'
import logo from '../../assets/logo/logo.png'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';



const Header = () => {
    const links = [
        { name: 'Home', link: '/home' },
        { name: 'About', link: '/about' },
        { name: 'Tech network', link: '/technetwork' },
        { name: 'Blog', link: '/blog' },
        { name: 'Contact', link: '/contact' },
    ]

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='w-full'>
            <div className='w-full md:px-10 py-4 px-7 md:flex justify-between items-center fixed top-0 left-0'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt='logo' className='w-36' />
                </div>

                <div onClick={() => setIsOpen(!isOpen)} className='absolute right-8 top-6 md:hidden'>
                    {
                        isOpen ? <MenuIcon /> : <CloseOutlinedIcon />
                    }
                </div>

                <ul className='md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12'>
                    {
                        links.map((item, idx) => (
                            <li className='my-7 md:my-0 md:ml-8'>
                                <a href='/'
                                    key={idx}
                                >{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='flex'>
                    <div className='flex items-center justify-center'>
                        <div>
                            <LockOutlinedIcon />
                        </div>
                        <p>Login</p>
                    </div>
                    <div>
                        <button className='py-1 px-3 md:ml-8 rounded md-static signupbutton'>
                            Sign up for free
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header



