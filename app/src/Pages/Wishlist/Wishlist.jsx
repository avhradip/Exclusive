import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Wishlistcard from './Wishlistcard';
import { CardData } from '../../App';
import img from '/p.png';
import Justforyou from './Justforyou';

const Wishlist = () => {

    const { totalWishlist, remove, moveAll } = useContext(CardData)
    const navigate = useNavigate()

    const [cardJustForYou, setCardJustForYou] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=4')
                if (response.ok) {
                    const data = await response.json()
                    setCardJustForYou(data)
                }

            } catch (e) {
                console.log('Error' + e.massage());

            }
        }
        fetchData()
    }, [])


    return (
        <div className='px-20 py-10'>
            <div className='flex flex-wrap md:flex-nowrap gap-10 justify-between items-center'>
                <p>Wishlist ({totalWishlist})</p>
                <button className='border-1 border-[#a4a1a1] text-[10px] px-4 py-2 rounded-[4px]' onClick={() => console.log(item)}>Move All To Bag</button>
            </div>
            <div>
                <div className='h-auto py-10' >
                    <Wishlistcard />
                </div>
                <div className=''>
                        <div className='flex flex-wrap md:flex-nowrap gap-10 justify-between'>
                            <div className='flex items-center gap-4 font-semibold text-[#000]'>
                                <img src={img} alt="Category Icon" />
                                <p>Just For You</p>
                            </div>
                            <div>
                                <button className='border-2 border-[#8f8e8e] px-4 py-2 rounded-[5px]' onClick={() => navigate('/allproducts')}>See All</button>
                            </div>
                        </div>
                    <div className='flex flex-1 flex-wrap justify-center gap-8 md:gap-0 md:justify-between mt-10'>
                        {cardJustForYou.map((item, index) => (
                            <Justforyou key={index} item={item} />
                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Wishlist