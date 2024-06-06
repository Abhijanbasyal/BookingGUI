import React, { useState } from 'react'

import DatePicker from 'react-datepicker';


import 'react-datepicker/dist/react-datepicker.css';
import {BsCalendar} from 'react-icons/bs';


const CheckOut = () => {

  const [endDate, setEndDate] = useState(false);

  return (
    <div className='relatve flex items-center justify-end h-full '>
      <div className='absolute z-10 pr-8 '>
        <div>
          <BsCalendar className='text-accent text-base'/>
        </div>
      </div>
      <DatePicker  className='p-2 h-[4rem] w-[16rem]  lg:h-[4.5rem] lg:w-80 focus:outline-none ' selected={endDate} placeholderText='Check Out' onChange={(date)=> setEndDate(date)}/>
    </div>
  )
}

export default CheckOut
