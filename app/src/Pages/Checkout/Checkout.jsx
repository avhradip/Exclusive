import React, { useContext, useState } from 'react';
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { CardData } from '../../App';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const{total}=useContext(CardData)
  const navigate=useNavigate()

  return (
    <div className='flex flex-col md:flex-row flex-wrap gap-10 md:justify-between px-6 md:px-24 py-10'>

      <div className='flex flex-col w-full md:w-1/2 gap-4'>
        <p className="text-3xl font-semibold mb-2">Billing Details</p>
        <Input placeholder="First Name*" inputProps={{ 'aria-label': 'First Name' }} className="bg-white p-2 rounded-md w-full" />
        <Input placeholder="Company Name" inputProps={{ 'aria-label': 'Company Name' }} className="bg-white p-2 rounded-md w-full" />
        <Input placeholder="Street Address*" inputProps={{ 'aria-label': 'Street Address' }} className="bg-white p-2 rounded-md w-full" />
        <Input placeholder="Apartment, floor, etc. (optional)" inputProps={{ 'aria-label': 'Apartment Details' }} className="bg-white p-2 rounded-md w-full" />
        <Input placeholder="Town/City*" inputProps={{ 'aria-label': 'Town or City' }} className="bg-white p-2 rounded-md w-full" />
        <Input placeholder="Phone Number*" inputProps={{ 'aria-label': 'Phone Number' }} className="bg-white p-2 rounded-md w-full" />
        <Input placeholder="Email Address*" inputProps={{ 'aria-label': 'Email Address' }} className="bg-white p-2 rounded-md w-full" />

        <div className="flex items-center gap-2">
          <Checkbox style={{color:'red'}} />
          <p className="text-sm">Save this information for faster check-out next time</p>
        </div>
      </div>

      <div className="w-full md:w-96">
        <div className="flex flex-col gap-4 border-gray-300 p-6 rounded-md">
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

          <div>
            <FormControl>
              <FormLabel id="gender-radio-group">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="gender-radio-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Bank" />
                <FormControlLabel value="male" control={<Radio />} label="Cash on delivery" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border-2 w-full md:w-40 h-10 border-gray-400 outline-none rounded-md px-2"
              onChange={(e)=>e.target.value}
            />
            <div>
              <button className="bg-[#DB4444] px-4 py-2 rounded-md text-white w-full md:w-auto">
                Apply Coupon
              </button>
            </div>
          </div>
          <button className="bg-[#DB4444] w-full py-3 text-white rounded-md text-lg" onClick={()=>navigate('/')}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
