import React, { useEffect, useState } from 'react'
import img from '/p.png';
import Products from './Products';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';


const Ourproducts = () => {
    const [card, setCard] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products?limit=6')
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
                        <p>Our Products</p>
                    </div>
                    <div className='text-3xl font-semibold pr-5'>
                        <p>Explore Our Products</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 justify-center items-center gap-10 flex-wrap mt-10'>
                {!card || card.length === 0 ? (
                    <Loading />
                ) : (
                    card.map((item) => (
                        <Products key={item.id} item={item} />
                    ))
                )}

            </div>
            <div className='flex justify-center items-center mt-10'>
                <button className='bg-[#DB4444] px-9 py-4 rounded-[4px] text-[#fff]' onClick={() => navigate('/allproducts')}>View All Products</button>
            </div>
        </div>
    )
}

export default Ourproducts