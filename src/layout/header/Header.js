import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo/logo.png';
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
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
    const [activeLink, setActiveLink] = useState(window.location.pathname); // Initialize with current path

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1023);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMenuItemClick = (link) => {
        setActiveLink(link);
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-full static'>
            <div className='w-full lg:px-10 py-4 px-7 lg:flex justify-between items-center top-0 left-0'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt='logo' className='w-36' />
                </div>

                {isMobile && (
                    <div onClick={toggleMenu} className='absolute right-8 top-6 lg:hidden'>
                        {isOpen ? <CloseOutlinedIcon /> : <MenuIcon />}
                    </div>
                )}

                <ul className={`lg:flex pl-9 lg:pl-0 lg:items-center lg:pb-0 ${(!isMobile || isOpen) ? 'block' : 'hidden'}`}>
                    {
                        links.map((item, idx) => (
                            <li className={`my-7 lg:my-0 lg:ml-8 ${item.link === activeLink ? 'active' : ''}`} key={idx}>
                                <a href={item.link}
                                    key={idx}
                                    onClick={() => handleMenuItemClick(item.link)}
                                    style={{ color: item.link === activeLink ? '#0b93db' : '' }}
                                >{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
                {(!isMobile || isOpen) && (
                    <div className='flex loginMobile'>
                        <div className='flex items-center justify-center loginres'>
                            <div>
                                <LockOutlinedIcon />
                            </div>
                            <p>Login</p>
                        </div>
                        <div className='loginres signupmobile'>
                            <button className='py-1 px-3 lg:ml-8 rounded lg-static signupbutton'>
                                Sign up for free
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div >
    );
}

export default Header;


// import React, { useState, useEffect } from 'react';
// import logo from '../../assets/logo/logo.png';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

// const Header = () => {
//     const links = [
//         { name: 'Home', link: '/home' },
//         { name: 'About', link: '/about' },
//         { name: 'Tech network', link: '/technetwork' },
//         { name: 'Blog', link: '/blog' },
//         { name: 'Contact', link: '/contact' },
//     ];

//     const [isOpen, setIsOpen] = useState(false);
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 1023);
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const handleMenuItemClick = () => {
//         setIsOpen(false);
//     };

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className='w-full static'>
//             <div className='w-full lg:px-10 py-4 px-7 lg:flex justify-between items-center top-0 left-0'>
//                 <div className='flex items-center gap-2'>
//                     <img src={logo} alt='logo' className='w-36' />
//                 </div>

//                 {isMobile && (
//                     <div onClick={toggleMenu} className='absolute right-8 top-6 lg:hidden'>
//                         {isOpen ? <CloseOutlinedIcon /> : <MenuIcon />}
//                     </div>
//                 )}

//                 <ul className={`lg:flex pl-9 lg:pl-0 lg:items-center lg:pb-0 ${(!isMobile || isOpen) ? 'block' : 'hidden'}`}>
//                     {
//                         links.map((item, idx) => (
//                             <li className='my-7 lg:my-0 lg:ml-8' key={idx}>
//                                 <a href={item.link}
//                                     key={idx}
//                                     onClick={handleMenuItemClick}
//                                 >{item.name}</a>
//                             </li>
//                         ))
//                     }
//                 </ul>
//                 {(!isMobile || isOpen) && (
//                     <div className='flex loginMobile'>
//                         <div className='flex items-center justify-center loginres'>
//                             <div>
//                                 <LockOutlinedIcon />
//                             </div>
//                             <p>Login</p>
//                         </div>
//                         <div className='loginres signupmobile'>
//                             <button className='py-1 px-3 lg:ml-8 rounded lg-static signupbutton'>
//                                 Sign up for free
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div >
//     );
// }

// export default Header;




