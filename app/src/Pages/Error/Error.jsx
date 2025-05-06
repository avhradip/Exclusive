import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className='flex justify-center items-center h-screen px-4'>
            <div className='flex flex-col items-center gap-6 text-center'>
                <p className='text-4xl md:text-7xl font-semibold'>404 Not Found</p>
                <p className='text-sm md:text-base max-w-md'>
                    Your visited page not found. You may go to the home page.
                </p>
                <button 
                    className='bg-[#DB4444] w-full sm:w-auto px-10 py-3 rounded-md text-white text-sm md:text-base' 
                    onClick={handleClick}
                >
                    Back to Home Page
                </button>
            </div>
        </div>
    );
};

export default Error;
