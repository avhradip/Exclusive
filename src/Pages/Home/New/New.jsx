import React from 'react'
import img from '/p.png';
import ps5 from '/ps.png';
import g from '/g.png'
import a from '/a.png'
import s from '/s.png'


const New = () => {
    return (
        <div className='py-10'>
            <div className=''>
                <div className='flex items-center gap-4 font-semibold text-[#DB4444]'>
                    <img src={img} alt="Category Icon" />
                    <p>Featured</p>
                </div>
                <div className='text-3xl font-semibold pr-5'>
                    <p>New Arrival</p>
                </div>
            </div>

            <div className='flex flex-wrap gap-6 justify-center py-10 px-4'>

                <div className='bg-black w-full md:w-[400px] h-[440px] bg-center text-white flex flex-col justify-end p-4' style={{ backgroundImage: `url(${ps5})`, backgroundSize: 'cover' }}>
                    <div className='max-w-xs'>
                        <p className='text-xl md:text-2xl'>PlayStation 5</p>
                        <p className='font-light text-sm md:text-base'>Black and White version of the PS5 coming out on sale.</p>
                        <p className='underline text-sm md:text-base'>Shop Now</p>
                    </div>
                </div>


                <div className='flex flex-col gap-6 w-full md:w-auto'>

                    <div className='bg-black text-white flex flex-col justify-end p-4 bg-center bg-no-repeat w-full md:w-100 h-60'
                        style={{ backgroundImage: `url(${g})`, backgroundSize: 'cover' }}>
                        <p className='text-xl md:text-2xl'>Women’s Collections</p>
                        <p className='font-light text-sm md:text-base'>Featured woman collections that give you another vibe.</p>
                        <p className='underline text-sm md:text-base'>Shop Now</p>
                    </div>


                    <div className='flex flex-wrap md:flex-nowrap gap-6'>

                        <div className='bg-black text-white flex flex-col justify-end p-4 bg-center bg-no-repeat w-full md:w-47 h-45' style={{ backgroundImage: `url(${a})`, backgroundSize: 'cover' }}>
                            <p className='text-lg md:text-xl'>Speakers</p>
                            <p className='font-light text-sm'>Amazon wireless speakers</p>
                            <p className='underline text-sm'>Shop Now</p>
                        </div>


                        <div className='bg-black text-white flex flex-col justify-end p-4 bg-center bg-no-repeat w-full md:w-47 h-45' style={{ backgroundImage: `url(${s})`, backgroundSize: 'cover' }}>
                            <p className='text-lg md:text-xl'>Perfume</p>
                            <p className='font-light text-sm'>GUCCI INTENSE OUD EDP</p>
                            <p className='underline text-sm'>Shop Now</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default New