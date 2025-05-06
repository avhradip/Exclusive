import React from 'react'
import add from '/bb.png'

const Adds = () => {
    const data=["23 Hours", "05 Days", "59 Minutes", "35 Seconds"]
    return (
        <div className='bg-black flex flex-col lg:flex-row flex-wrap justify-center lg:justify-between items-center my-10 text-[#fff] px-6 py-10'>
            <div className='p-6 lg:p-10 max-w-lg text-center lg:text-left'>
                <p className='text-[#00FF66] mb-4 lg:mb-10 text-sm'>Categories</p>
                <p className='text-3xl md:text-5xl font-semibold mb-6 lg:mb-10'>Enhance Your Music Experience</p>
                <div className='flex gap-3 md:gap-5 text-xs md:text-[10px] justify-center lg:justify-start mb-6 lg:mb-10'>
                    {data.map((time, index) => (
                        <div key={index} className='bg-[#fff] text-[#000] w-12 md:w-14 h-12 md:h-14 flex flex-col justify-center items-center rounded-full'>
                            <p className='font-bold'>{time.split(" ")[0]}</p>
                            <p>{time.split(" ")[1]}</p>
                        </div>
                    ))}
                </div>
                <button className='bg-[#00FF66] px-6 md:px-9 py-2 md:py-3 rounded-[2px] text-sm md:text-base'>Buy Now!</button>
            </div>
            <div className='p-6 lg:p-10'>
                <img src={add} alt="Music Experience" className="w-full max-w-xs md:max-w-md lg:max-w-lg" />
            </div>
        </div>
    )
}

export default Adds
