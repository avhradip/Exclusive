import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { CardData } from '../../../App';

const Products = ({ item }) => {
    const navigate = useNavigate();
    const { addWishlistFun, wishlist } = useContext(CardData);

    const { id, title, price, rating, image } = item;

    const isWishlisted = wishlist.some(ele => ele.id === id);

    return (
        <div className="w-50 flex flex-col gap-5 items-center bg-gray-100 p-4 rounded-xs ">
            <div className="relative group cursor-pointer" onClick={() => navigate(`/detailspage/${id}`)}>
                <img src={image} alt="product" className="object-fill w-48 h-48" />

                <button
                    className={`absolute top-2 right-2 p-2 rounded-full ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white'
                        } hover:bg-red-500 hover:text-white transition`}
                    onClick={(e) => {
                        e.stopPropagation();
                        addWishlistFun(item);
                    }}
                >
                    <CiHeart size={18} />
                </button>

                <button
                    className="absolute top-12 right-2 bg-white p-2 rounded-full hover:bg-gray-200 transition"
                    onClick={(e) => {
                        e.stopPropagation();
                        // Future functionality
                    }}
                >
                    <LuEye size={18} />
                </button>
            </div>

            <div className="w-full text-left">
                <p className="text-black font-semibold text-sm truncate">{title}</p>
                <p className="text-[#DB4444] font-medium">${price}</p>
                <div className="flex items-center gap-1 text-sm">
                    {rating && (
                        <>
                            <Rating name="size-small" value={rating.rate} size="small" readOnly />
                            <p>({rating.count})</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
