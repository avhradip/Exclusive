import React, { useContext } from 'react'
import Rating from '@mui/material/Rating';
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { CardData } from '../../App';


const Allproductscard = ({ item }) => {
    const navigate = useNavigate()
    const { addWishlistFun, wishlist, remove } = useContext(CardData)
    const { price, title, image, rating } = item



    const isInWishlist = wishlist.some((ele) => ele.id === item.id)



    return (
        <div className='w-50' onClick={() => navigate(`/detailspage/${item.id}`)}>
            <div className="w-60 h-65 flex justify-center items-center relative group">
                <img src={image} alt={title} width={150} className="object-fill w-50 h-60" />
                <button className={`absolute p-1 top-2 right-2 rounded-full ${isInWishlist ? "bg-red-500 text-[#fff]" : "bg-white"}`} onClick={(e) => {
                    e.stopPropagation()
                    if (isInWishlist) {
                        remove(item)
                    } else {
                        addWishlistFun(item)
                    }
                }}>
                    <CiHeart />
                </button>
                <button className="absolute top-10 right-2 bg-[#fff] p-1 rounded-full">
                    <LuEye />
                </button>
            </div>

            <div className='flex flex-col items-start pl-10'>
                <p className='text-[#000] font-semibold'>{title}</p>
                <p className='text-[#DB4444]'>${price}</p>
                <div className='flex items-center'>
                    <Rating name="size-small" defaultValue={rating.rate} size="small" />
                    <p>({rating.count})</p>
                </div>
            </div>
        </div>
    )
}

export default Allproductscard