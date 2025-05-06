import React, { useContext, useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { CardData } from '../../App';


const Cart = () => {
  const navigate = useNavigate()
  const { cart, setCart, deleteFun, EditDecrement, EditIncrement, total } = useContext(CardData)


  return (
    <div>
      <button onClick={() => navigate('/')}>back To Home</button>
      <div className="px-4 md:px-10 lg:px-20 flex flex-col gap-10 py-10">
        <div className="flex flex-col justify-center w-full">
          <div className="hidden md:flex border-b pb-2 w-full">
            <p className="text-[18px] md:text-[20px] font-semibold flex-1 text-center">Product</p>
            <p className="text-[18px] md:text-[20px] font-semibold flex-1 text-center">Price</p>
            <p className="text-[18px] md:text-[20px] font-semibold flex-1 text-center">Quantity</p>
            <p className="text-[18px] md:text-[20px] font-semibold flex-1 text-center">Subtotal</p>
            <p className="text-[18px] md:text-[20px] font-semibold flex-1 text-center">Clear</p>
          </div>

          {Array.isArray(cart) && cart.map((item) => (
            <div className="flex items-center justify-around pb-4">
              <div className="" onClick={() => navigate(`/detailspage/${item.id}`)}>
                <img src={item?.image} alt="image" className="w-16 h-16 object-contain" />
              </div>
              <div>
                <p className="flex-1 text-center">${item?.price}</p>
              </div>
              <div className='flex items-center gap-2 bg-red-500 text-[#fff] rounded-[4px]'>
                <button onClick={() => EditDecrement(item)}><IoIosArrowBack /></button>
                <p className='bg-[#fff] text-[#000] px-2'>{item.qty}</p>
                <button onClick={() => EditIncrement(item)}><IoIosArrowForward /></button>
              </div>

              <div>
                <p className="flex-1 text-center font-semibold">${(item?.price * item?.qty).toFixed(2)}</p>
              </div>
              <div>
                <button className="text-red-500 flex-1 flex justify-center" onClick={() => deleteFun(item)}>
                  <MdDeleteOutline size={22} />
                </button>
              </div>
            </div>
          ))}
          <div className='flex justify-between'>
            <button onClick={() => navigate('/')}>Return To Shop</button>
            <button>Update Cart</button>
          </div>
        </div>



        <div className="flex flex-wrap gap-6 justify-between">
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border-2 w-full md:w-60 h-10 border-gray-400 outline-none rounded-md px-2"
            />
            <div>
              <button className="bg-[#DB4444] px-4 py-2 rounded-md text-white w-full md:w-auto" >
                Apply Coupon
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-2 border-gray-300 w-full md:w-96 p-6 rounded-md">
            <p className="text-xl font-semibold">Cart Total</p>
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>${total}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <p>Total:</p>
              <p>${total}</p>
            </div>
            <button className="bg-[#DB4444] w-full py-3 text-white rounded-md text-lg" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
