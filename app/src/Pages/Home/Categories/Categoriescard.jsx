import React, { useContext } from 'react'
import { CardData } from '../../../App'
import { useNavigate } from 'react-router-dom'

const Categoriescard = ({item}) => {
  const {showCategorie}=useContext(CardData)
  const navigate=useNavigate()
  const {name,img}=item
  return (
    <div className='min-w-50 h-40 flex flex-col justify-center items-center hover:bg-[#DB4444] hover:text-[#fff] rounded-[5px] border-1 mt-10' onClick={()=>{
      showCategorie(item)
      navigate('/categoriebyproduct')
      }}>
      <p className='text-[100px]'>{img}</p>
      <p>{name}</p>
    </div>
  )
}

export default Categoriescard