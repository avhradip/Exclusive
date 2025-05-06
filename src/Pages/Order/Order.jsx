import React, { useContext } from 'react';
import Rating from '@mui/material/Rating';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CardData } from '../../App';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate=useNavigate()
  const { order } = useContext(CardData);

  if (!order) {
    return
  }

  return (
    <div className='px-5 py-10 space-y-8'>

      {order.length === 0 ?
        <div className="text-center text-gray-500 mt-10 space-y-4 h-screen">
          <p>You have no past orders.</p>
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Back to Home
            </button>
          </div>
        :
        order.map((orderItem, index) => (
          <div
            key={index}
            className='flex flex-col gap-6 shadow-2xl rounded-2xl p-6'
          >
            <p className="text-sm text-gray-500">
              Delivered on {new Date(orderItem.date).toLocaleDateString()}
            </p>
            {orderItem.items.map(product => (
              <div
                key={product.id}
                className='flex flex-wrap gap-6 items-center border-b pb-4'
              >
                <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
                  <img
                    src={product?.image}
                    alt={product?.title}
                    width={100}
                    className='object-contain'
                  />
                  <div className='flex flex-col flex-1 gap-2'>
                    <p className='text-base font-medium'>{product?.title}</p>
                    <p className='text-sm text-gray-600'>
                      Airbus headphones include in-ear, over-the-ear, and two-way
                      radio headsets. They are designed to reduce background noise
                      and enhance communication.
                    </p>
                    <div>
                      <Rating name="size-small" defaultValue={0} size="small" />
                      <p className='text-xs text-gray-500'>Rate this product now</p>
                    </div>
                  </div>
                </div>
                <button className='hidden md:block'>
                  <KeyboardArrowRightIcon />
                </button>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Order;
