import React from 'react'
import Rating from '@mui/material/Rating';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Order = () => {
  return (
    <div className='px-25 py-10'>
      <div className='flex flex-wrap gap-20 items-center shadow-2xl rounded-2xl p-10'>
        <div>
          <img src="https://rukminim2.flixcart.com/image/850/1000/l13whow0/headphone/m/b/m/earbuds-pro-wireless-bluetooth-with-inbuilt-mic-touch-sensor-original-imagcqxpfar6nzes.jpeg?q=90&crop=false" alt="image" width={100} />
        </div>
        <div className='font-light flex flex-1 flex-wrap gap-2 md:justify-around items-start md:items-center'>
          <p>Deleverd on jan 04</p>
          <p className='md:w-72'>Airbus headphones include in-ear, over-the-ear, and two-way radio headsets. They are designed to reduce background noise and enhance communication. </p>
          <div>
            <Rating name="size-small" defaultValue={2} size="small" />
            <p>Rate this product now</p>
          </div>
        </div>
        <div>
          <button className='hidden md:block'>
            <KeyboardArrowRightIcon/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Order