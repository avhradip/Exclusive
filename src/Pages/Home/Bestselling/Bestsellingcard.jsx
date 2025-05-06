import React, { useContext } from 'react'
import Rating from '@mui/material/Rating';
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { CardData } from '../../../App';

const Bestsellingcard = ({ item }) => {
    const navigate = useNavigate()
    const { addWishlistFun, wishlist, remove } = useContext(CardData)

    const { id, title, price, rating, image } = item



    const isInWishlist = wishlist.some((ele) => ele.id == item.id)


    return (
        <div className='w-55 h-90 flex flex-col gap-10 bg-gray-100 p-4 rounded-xs' onClick={() => navigate(`/detailspage/${id}`)}>
            <div className="flex justify-center relative group">
                <img src={image} alt="img" className="object-center w-80 h-50" />
                <button className={`absolute p-1 top-2 right-2 rounded-full ${isInWishlist ? "bg-red-500 text-[#fff]" : "bg-white"}`} onClick={(e) => {
                    e.stopPropagation()
                    if (isInWishlist) {
                        remove(item)
                    }
                    addWishlistFun(item)
                }}>
                    <CiHeart />
                </button>
                <button className="absolute top-10 right-2 bg-[#fff] p-1 rounded-full">
                    <LuEye />
                </button>
            </div>

            <div className='flex flex-col pl-2 '>
                <p className='text-[#000] font-semibold text-sm truncate'>{title}</p>
                <p className='text-[#DB4444]'>${price}</p>
                <div className='flex items-center'>
                    <Rating name="size-small" defaultValue={rating.rate} size="small" />
                    <p>({rating.count})</p>
                </div>
            </div>
        </div>
    )
}

export default Bestsellingcard