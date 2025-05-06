import React, { useContext, useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import { CardData } from '../../App'
import { useNavigate } from 'react-router-dom';

const CategorieByProduct = () => {

    const navigate=useNavigate()
    const { finalData } = useContext(CardData)






    return (
        <div className='px-20 py-10 flex flex-1 flex-wrap gap-10'>
            {finalData.map((item) => (
                <div item={item} key={item.id} className='shadow-2xl shadow-gray-200 rounded-2xl w-60 flex flex-col justify-center items-center gap-5 p-5' onClick={()=>navigate(`/detailspage/${item.id}`)}>
                    <div className='h-55 w-45 flex justify-center items-center '>
                        <img src={item.image} alt="image" width={150} className='object-cover' />
                    </div>
                    <div>
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                        <div className='flex items-center'>
                            <Rating name="size-small" value={item?.rating?.rate} size="small" readOnly />
                            <p>({item?.rating?.count})</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategorieByProduct