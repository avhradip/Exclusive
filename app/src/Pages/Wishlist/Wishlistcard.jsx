import React, { useContext } from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CardData } from '../../App';


const Wishlistcard = () => {
    const { wishlist, remove } = useContext(CardData)


    return (
        <div className='flex gap-2 flex-wrap'>
            {wishlist.map((item) => (
                <div >
                    <div className='w-25 h-30 flex flex-col justify-center items-center relative bg-[#eee]'>
                        <img src={item.image} alt="" width={70} />
                        <button className='absolute bottom-25 left-20' onClick={() => remove(item)}>
                            <MdOutlineDeleteOutline />
                        </button>
                    </div>
                    <p className='text-[10px] w-20 font-semibold'>{item.title}</p>
                    <p className='text-[#DB4444] text-[10px]'>${item.price}</p>
                </div>
            ))}
        </div>
    )
}

export default Wishlistcard