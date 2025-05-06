import React, { useContext, useState } from 'react'
import Colour_Chnage from '/Colour_Chnage.png'
import delivery from '/icon-delivery.png'
import return_item from '/Icon-return.png'
import { CiHeart } from "react-icons/ci";
import Rating from '@mui/material/Rating';
import { CardData } from '../../App';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const Detailscard = ({ item, count, setCount }) => {
  const navigate=useNavigate()
  const { addToCard, addWishlistFun, wishlist, setWishlistEd } = useContext(CardData)





  const { title, price, description, image, rating } = item


  function wishlistFun(item) {
    if (!wishlist) return;

    setWishlistEd(wishlist.some(ele => ele.id === item.id));
  }

  function wishlistFun(item) {
    return wishlist.some((ele) => ele.id == item.id)
  }



  return (
    <div className='flex flex-wrap gap-10 justify-center items-center md:px-20 px-2 py-10'>
      <button onClick={() => navigate("/")} className="self-start sm:self-auto items-start w-screen cursor-pointer ">
        <FaArrowLeft className="text-xl" />
      </button>
      <div className=''>
        <img src={image} alt="img" width={400} />
      </div>
      <div className='w-100 flex flex-col gap-6'>
        <p className='text-[20px] font-semibold'>{title}</p>
        <div className='flex items-center'>
          {rating ? (
            <>
              <Rating name="size-small" value={rating.rate} size="small" readOnly />
              <p>({rating.count})</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <p className='text-[20px] font-normal'>${price}</p>
        <p>{description}</p>
        <hr />
        <p className='flex gap-4'>Colours: <img src={Colour_Chnage} alt="" /></p>
        <div className='flex gap-4 items-center'>
          <p>Size:</p>
          <p className='w-8 h-8 border-1 flex justify-center items-center rounded-[2px] hover:bg-red-400 hover:text-[#fff] select-none cursor-pointer'>XS</p>
          <p className='w-8 h-8 border-1 flex justify-center items-center rounded-[2px] hover:bg-red-400 hover:text-[#fff] select-none cursor-pointer'>S</p>
          <p className='w-8 h-8 border-1 flex justify-center items-center rounded-[2px] hover:bg-red-400 hover:text-[#fff] select-none cursor-pointer'>M</p>
          <p className='w-8 h-8 border-1 flex justify-center items-center rounded-[2px] hover:bg-red-400 hover:text-[#fff] select-none cursor-pointer'>L</p>
          <p className='w-8 h-8 border-1 flex justify-center items-center rounded-[2px] hover:bg-red-400 hover:text-[#fff] select-none cursor-pointer'>XL</p>
        </div>
        <div className='flex flex-wrap justify-between gap-2'>
          <div className='flex justify-between items-center border-1 w-40 rounded-[5px]'>

            <button className='px-4 py-3.5 hover:text-[#fff] text-[20px] hover:bg-red-500 rounded-l-[5px] object-fill' disabled={count == 1} onClick={() => setCount(prev => prev - 1)}>-</button>
            <p className="px-6 select-none" >{count}</p>
            <button className='px-4 py-3.5 hover:text-[#fff] text-[20px] hover:bg-red-500 rounded-r-[5px] object-fill' onClick={() => setCount(prev => prev + 1)}>+</button>

          </div>
          <button className='bg-[#DB4444] text-[#fff] px-12 py-3 rounded-[4px]' onClick={() => addToCard({ ...item, qty: count })}>Buy Now</button>
          <button className={`hover:bg-red-500 hover:text-[#fff] rounded-md px-1 text-4xl ${wishlistFun(item) ? 'bg-red-500 text-white' : 'bg-white'}`} onClick={() => {
            addWishlistFun(item)
            wishlistFun(item)
          }}><CiHeart /></button>
        </div>
        <div className='border-1 rounded-[8px]'>
          <div className='flex items-center gap-4 p-4'>
            <img src={delivery} alt="" />
            <div>
              <p className='text-[15px] font-semibold'>Free Delivery</p>
              <p className='underline text-[10px] font-semibold'>Enter your postal code for Delivery Availability</p>
            </div>
          </div>
          <hr />
          <div className='flex items-center gap-4 p-4' >
            <img src={return_item} alt="" />
            <div>
              <p className='text-[15px] font-semibold'>Return Delivery</p>
              <p className='text-[10px] font-semibold'>Free 30 Days Delivery Returns. <span className='underline '>Details</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detailscard