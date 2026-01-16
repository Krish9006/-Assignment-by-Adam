import React from 'react';

const Footer = () => {
    return (
        <footer className='bottom-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'>
            <div className='flex flex-col md:flex-row justify-center items-center text-center py-8 px-4 text-gray-300'>
                <div className='flex items-center space-x-2'>
                    <span>&copy; {new Date().getFullYear()}</span>
                    <span className='text-white font-bold text-lg'>E-Shop</span>
                </div>
                <span className='hidden md:inline mx-2'>•</span>
                <span className='mt-2 md:mt-0'>All rights reserved</span>
            </div>
        </footer>
    );
};

export default Footer;