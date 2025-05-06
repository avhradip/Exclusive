import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import Rating from '@mui/material/Rating';
import { CardData } from '../../../App';

const Salescard = ({ item }) => {
    const { addWishlistFun, wishlist ,remove} = useContext(CardData)
    const { price, image, rating } = item
    const navigate = useNavigate();

    function goTodetailspage(item) {
        navigate(`/detailspage/${item.id}`)
    }


        const isInWishlist = wishlist.some((ele) => ele.id === item.id)
    

    return (
        <div className='flex flex-col gap-5 w-100 ' onClick={() => goTodetailspage(item)}>
            <div className=" bg-[#eee] w-50 h-50 flex justify-center items-center relative group">
                <img src={image} alt="" className=' object-fill w-50 h-50' />
                <button className={`absolute p-1 top-2 right-2 rounded-full ${isInWishlist ? "bg-red-500 text-[#fff]" : "bg-white"}`} onClick={(e) => {
                    e.stopPropagation()
                    if(isInWishlist){
                        remove(item)
                    }else{
                        addWishlistFun(item)
                    }
                  
                     }}>
                    <CiHeart />
                </button>
                <button className="absolute top-10 right-2 bg-[#fff] p-1 rounded-full" >
                    <LuEye />
                </button>
            </div>

            <div className='flex flex-col gap-4'>
                <p>${price}</p>
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
            </div>
        </div>
    )
}

export default Salescard