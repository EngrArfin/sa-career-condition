import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <nav className='nav-style flex items-center justify-between px-4  w-full h-24 bg-gray-300'>
    
            <div>
                <Link className='font-bold text-2xl text-pink-700' to="/">HeadHunters</Link>

            </div>
            <div className='flex justify-between'>
                <Link className='text-blue-600' to="/statistics">Statistics</Link>
                <Link className='ms-8' to="/appliedjobs">Applied Jobs</Link>
                <Link className='ms-8' to="/blog">Blog</Link>
            </div>
            <div>
            <button type="button" class="text-white hover:bg-purple-800 focus:outline-none focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:hover:bg-purple-700 dark:focus:ring-purple-900  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6">Start Applying</button>
            </div>

            {/* <div className='lg:hidden'>
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3Icon className='w-8'></Bars3Icon>

                </button>
            </div> */}

        </nav>
    );
};

export default Header;