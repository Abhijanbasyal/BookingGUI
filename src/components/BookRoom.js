import React, { useContext } from 'react'
import CheckIn from './CheckIn'
import CheckOut from './CheckOut'
import AdultsDropDown from './AdultsDropdown'
import KIdsDropdown from './KIdsDropdown'
import { RoomContext } from '../context/RoomContext'

const BookRoom = () => {

  const { handleClick } = useContext(RoomContext)
  return (
    <form className='h-[300px] w-full lg:h-[70px]'>
      <div className='flex flex-col w-full h-full lg:flex-row '>
        <div className='flex-1 border-r'>
          <CheckIn />

        </div>
        <div className='flex-1 border-r'>
          <CheckOut />

        </div>
        <div className='flex-1 border-r'>
          <AdultsDropDown />

        </div>
        <div className='flex-1 border-r'>
          <KIdsDropdown />

        </div>

        <button onClick={(e) => handleClick(e)} type='submit' className=''>CHeck Now</button>
      </div>
    
    </form>
  )
}

export default BookRoom
