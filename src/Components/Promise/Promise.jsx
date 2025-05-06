import React from 'react'
import s from '/Services.png'
import s2 from '/Services2.png'
import s3 from '/Services3.png'

const Promise = () => {
    return (
        <div className='flex flex-1 flex-wrap gap-10 justify-center md:justify-around py-20'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <img src={s} alt="img" />
                <div className='flex flex-col items-center'>
                    <p className='text-[20px] font-bold'>FREE AND FAST DELIVERY</p>
                    <p className='font-normal'>Free delivery for all orders over $140</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <img src={s2} alt="img" />
                <div className='flex flex-col items-center'>
                    <p className='text-[20px] font-bold'>24/7 CUSTOMER SERVICE</p>
                    <p className='font-normal'>Friendly 24/7 customer support</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <img src={s3} alt="img" />
                <div className='flex flex-col items-center'>
                    <p className='text-[20px] font-bold'>MONEY BACK GUARANTEE</p>
                    <p className='font-normal'>We reurn money within 30 days</p>
                </div>
            </div>
        </div>
    )
}

export default Promise