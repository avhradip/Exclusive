import React, { useEffect, useState } from 'react'
import img from '/p.png';
import Bestsellingcard from './Bestsellingcard';
import { useNavigate } from 'react-router-dom';

const Bestselling = () => {
    const navigate=useNavigate()
    const [card, setCard] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=4')
                if (response.ok) {
                    const data = await response.json()
                    setCard(data)
                }

            } catch (e) {
                console.log('Error' + e.massage());

            }
        }
        fetchData()
    }, [])


    return (
        <div className='py-20'>
            <div className='flex flex-1 flex-wrap gap-10 justify-center items-center md:justify-between'>
                <div>
                    <div className='flex items-center gap-4 font-semibold text-[#DB4444]'>
                        <img src={img} alt="Category Icon" />
                        <p>This Month</p>
                    </div>
                    <div className='text-3xl font-semibold pr-5'>
                        <p>Best Selling Products</p>
                    </div>
                </div>
                <div className=''>
                    <button className='bg-[#DB4444] px-9 py-4 rounded-[4px] text-[#fff]' onClick={()=>navigate('/allproducts')}>View All</button>
                </div>
            </div>
            <div className='flex flex-1 justify-center items-center gap-10 flex-wrap mt-10'>
                    {card.map((item)=>(
                        <Bestsellingcard key={item.id} item={item} />
                    ))}
               
            </div>

        </div>
    )
}

export default Bestselling