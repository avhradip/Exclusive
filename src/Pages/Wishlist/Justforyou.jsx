import React from 'react'
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';


const Justforyou = ({ item }) => {
    const { image, price, title, rating } = item
    const navigate=useNavigate()

    return (
        <div className='w-50'>
            <div className='flex justify-center items-center w-50 h-50 mb-4' onClick={()=>navigate(`/detailspage/${item.id}`)}>
                <img src={image} alt="image" className='w-50 h-50' />
            </div>
            <p>{title}</p>
            <p>{price}</p>
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
    )
}

export default Justforyou