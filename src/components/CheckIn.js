import React, { useState } from 'react'

import DatePicker from 'react-datepicker';


import 'react-datepicker/dist/react-datepicker.css';

import {BsCalendar} from 'react-icons/bs';

const CheckIn = () => {

  const [startDate, setStartDate] = useState(false);

  return (
    <div className='relatve flex items-center justify-end h-full '>
      <div className='absolute z-10 pr-8 '>
        <div>
          <BsCalendar className='text-accent text-base'/>
        </div>
      </div>
      <DatePicker  className='p-2 h-[4rem] w-[16rem]  lg:h-[4.5rem] lg:w-80 focus:outline-none ' selected={startDate} placeholderText='Check in' onChange={(date)=> setStartDate(date)}/>
    </div>
  )
}

export default CheckIn
