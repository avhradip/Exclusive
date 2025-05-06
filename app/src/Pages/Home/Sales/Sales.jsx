import React, { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import i from "/p.png";
import Salescard from './Salescard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../../Redux/ProductSlice';


const Sales = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { data, loading, error } = useSelector(state => state?.product)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <div>
            <div className='flex items-center gap-4 font-semibold text-[#DB4444]'>
                <img src={i} alt="Today's Sale" />
                <p>Today’s</p>
            </div>

            <div className='flex flex-wrap gap-2 items-center'>
                <div className='text-3xl font-semibold pr-5'>
                    <p>Flash Sales</p>
                </div>
                <div className='flex items-center gap-5'>
                    <div>
                        <p className='text-[10px]'>Days</p>
                        <p className='text-2xl font-bold'>03</p>
                    </div>
                    <p className='text-2xl font-bold'>:</p>
                    <div>
                        <p className='text-[10px]'>Hours</p>
                        <p className='text-2xl font-bold'>23</p>
                    </div>
                    <p className='text-2xl font-bold'>:</p>
                    <div>
                        <p className='text-[10px]'>Minutes</p>
                        <p className='text-2xl font-bold'>19</p>
                    </div>
                    <p className='text-2xl font-bold'>:</p>
                    <div>
                        <p className='text-[10px]'>Seconds</p>
                        <p className='text-2xl font-bold'>56</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto p-4 py-10 flex gap-4 overflow-x-scroll example">
                {data?.map((item) => (
                    <Salescard key={item.id} item={item} />
                ))}
            </div>
            <div className='flex justify-center'>
                <button className='bg-[#DB4444] px-9 py-4 rounded-[4px] text-[#fff]' onClick={() => navigate('/allproducts')}>View All Products</button>
            </div>
            <hr className='text-[#8e8c8c] mt-10' />

        </div>
    );
};

export default Sales;
