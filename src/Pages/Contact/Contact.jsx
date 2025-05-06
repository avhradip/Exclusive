import React from 'react';
import phone from '/phone.png';
import mail from '/mail.png';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';

const Contact = () => {
  return (
    <div className='px-6 md:px-20 py-10 flex flex-1 flex-wrap justify-between gap-4'>
      <div className='flex flex-col gap-5 shadow-2xl p-6 rounded-md'>
        <div className='flex gap-2 items-center'>
          <img src={phone} alt="phone" className="w-6 h-6" />
          <p className="font-semibold">Call To Us</p>
        </div>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>
        <hr />
        <div className='flex gap-2 items-center'>
          <img src={mail} alt="mail" className="w-6 h-6" />
          <p className="font-semibold">Write To Us</p>
        </div>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Email: customer@exclusive.com</p>
        <p>Email: support@exclusive.com</p>
      </div>

      <div className='shadow-2xl p-6 rounded-md'>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-2'>
            <TextField fullWidth label="Your Name *" variant="filled" />
            <TextField fullWidth label="Your Email *" variant="filled" />
            <TextField fullWidth label="Your Phone *" variant="filled" />
          </div>
          <Textarea minRows={6} placeholder="Your Message *" variant="soft" className="w-full" />
          <div className='flex justify-end items-baseline'>
            <button className='bg-[#DB4444] px-12 py-3 text-white rounded-md text-lg w-full md:w-auto'>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
