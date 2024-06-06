import React from 'react';

//Link 
import { Link } from 'react-router-dom';

import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

const Room = ({ room }) => {
  //destructure room
  const { id, name, image, size, maxPerson, description, price } = room;

  return (
    <div className='bg-white shadow-2xl min-h-[500px] group'>
      <div className='overflow-hidden h-56'>
        <img src={image} alt='' className='h-full  group-hover:scale-110 transition-all duration-300 w-full  ' />
      </div>
      {/* details */}
      <div className='bg-white shadow-lg max-w-[300px]  mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-teritary tracking-[1px] font-semibold text-base'>
        <div className='flex justify-between w-[90%]'>

          {/* size */}
          <div className='flex items-center '>
            <div className='text-accent'>
              < BsArrowsFullscreen className='text-[15px]' />

            </div>
            <div className='flex gap-x-1'>
              <div>Size</div>
              <div>{size}m2</div>
            </div>
          </div>

          {/* rooms capacity */}
          <div className='flex items-center gap-x-2'>
            <div className='text-accent'>
              < BsPeople className='text-[15px]' />

            </div>
            <div className='flex gap-x-1'>
              <div>Max People</div>
              <div>{maxPerson}</div>
            </div>
          </div>
        </div>



      </div>
      {/* name */}
      <div className='text-center'>
        <Link to={`/room/${id}`}>
          <h3 className='h3'>
            {name}
          </h3>
          <p className='max-w-[300px] mx-auto mb-3 lg:mb-6'>{description.slice(0,56)}</p>
        </Link>
      </div>
      {/* button */}
      <Link to={`/room/${id}`} className='max-w-[240px] mx-auto flex items-center'>
        Book now for Rs{price}
      </Link>
    </div>
  )
}

export default Room
