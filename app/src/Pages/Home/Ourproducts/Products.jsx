import React,{useContext} from 'react'
import Rating from '@mui/material/Rating';
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { CardData } from '../../../App';


const Products = ({ item }) => {
    const navigate = useNavigate();

    const { addWishlistFun, wishlist } = useContext(CardData)

    const { id, title, price, rating, image } = item

    function wishlistFun(item) {
        return wishlist.some((ele) => ele.id == item.id)
    }

    return (
        <div className="flex flex-1 justify-center items-center gap-10 flex-wrap mt-10" >
            <div className="w-80 h-90 flex flex-col gap-10 items-center" onClick={() => navigate(`/detailspage/${id}`)}>
                <div className="w-60 h-50 flex justify-center relative group bg-[#eee]">
                    <img src={image} alt="" className="object-fill w-50 h-50" />

                    <button className={`absolute p-1 top-2 right-2 rounded-full hover:bg-red-500 hover:text-[#fff] ${wishlistFun(item) ? "bg-red-500 text-[#fff]" : "bg-white"}`} onClick={(e) => { e.stopPropagation(), addWishlistFun(item), wishlistFun(item) }}>
                        <CiHeart />
                    </button>

                    <button className="absolute top-10 right-2 bg-[#fff] p-1 rounded-full">
                        <LuEye />
                    </button>
                </div>

                <div className="flex flex-col items-start pl-10">
                    <p className="text-[#000] font-semibold">{title}</p>
                    <p className="text-[#DB4444]">${price}</p>
                    <div className="flex items-center">
                        {item.rating && (
                            <>
                                <Rating name="size-small" value={rating.rate} size="small" readOnly />
                                <p>({item.rating.count})</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Products