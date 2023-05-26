import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <nav className='nav-style flex items-center justify-between px-4  w-full h-24 bg-gray-300'>
    
            <div>
                <Link className='font-bold text-2xl text-pink-700' to="/">Sa Career</Link>

            </div>
            <div className='flex justify-between'>
                <Link className='text-red-600 m-9 text-xl ' to="/statistics">Statistics</Link>
                <Link className='text-red-600 m-9 text-xl' to="/appliedjobs">Apply Job</Link>
                <Link className='text-red-600 m-9 text-xl' to="/blog">Blog</Link>
            </div>
            <div>
        <button type="button" class="text-white hover:bg-red-800 focus:outline-none focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:hover:bg-red-700 dark:focus:ring-red-900  bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 mb-6">Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;