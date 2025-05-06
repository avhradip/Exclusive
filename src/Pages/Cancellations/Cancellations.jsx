import React from 'react'
import img1 from '/img1.png'
import img2 from '/img2.png'
import img3 from '/img3.png'
import img4 from '/img4.png'
import img5 from '/img5.png'

const Cancellations = () => {

  const data = [
    { img: img1, date: "Cancelled on Dce 26.2020", description: "Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of stretchy, light, and inexpensive fabric and are easy to clean." },
    { img: img2, date: "Cancelled on jan 05.2021", description: "The iPhone 11 has a 6.1-inch (15 cm) IPS LCD with a resolution of 1792 X 828 pixels (1.4 megapixels) at a pixel density of 326 PPI with a maximum brightness of 625 nits and a 1400:1 contrast ratio and it is equivalent to the iPhone XR. It supports Dolby Vision, HDR10, True-Tone, and a wide color gamut." },
    { img: img3, date: "Cancelled on feb 06.2020", description: "A digital single-lens reflex camera (digital SLR or DSLR) is a digital camera that combines the optics and mechanisms of a single-lens reflex camera with a solid-state image sensor and digitally records the images from the sensor." },
    { img: img4, date: "Cancelled on may 16.2021", description: "A digital single-lens reflex camera (digital SLR or DSLR) is a digital camera that combines the optics and mechanisms of a single-lens reflex camera with a solid-state image sensor and digitally records the images from the sensor." },
    { img: img5, date: "Cancelled on apr 26.2024", description: "A brand of desktop and laptop hardware from Asus that is geared toward the gamer. The ROG brand was introduced in 2006. See gaming PC. ROG Mothership (G2700) Using an overclocked i9 CPU and an NVIDIA RTX graphics card, this Windows 10 laptop's twin fans were designed to dissipate heat." }
  ]

  return (
    <div className='px-20 py-5'>
      {data.map((item, index) => (
        <div key={index} className='flex flex-wrap justify-center md:justify-between items-center rounded-2xl shadow-2xl gap-10 p-10 mb-10'>
          <img src={item.img} alt="" className='w-40 h-30' />
          <p>{item.date}</p>
          <div className='w-70'>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cancellations