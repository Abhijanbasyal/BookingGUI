import React, { useContext } from 'react'

//room context
import { RoomContext } from "../context/RoomContext.js";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

import { BsChevronDown } from 'react-icons/bs';


const list = [
  { name: '0 Kids' },
  { name: '1 Kids' },
  { name: '2 Kids' },
  { name: '3 Kids' },
  { name: '4 Kids' },
];

const KIdsDropdown = () => {
  const { kids, setKids } = useContext(RoomContext)

  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
      <MenuButton className='w-full h-full flex items-center justify-between'>
        {kids === "0 Kids" ? "No Kids" : kids}
        <BsChevronDown />
      </MenuButton>

      <MenuItems as='ul' className='bg-white absolute w-full flex flex-col z-40'>
        {list.map((li, index) => {
          return <MenuItem onClick={()=> setKids(li.name)} as='li' key={index} className='border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer '>{li.name}</MenuItem>
        })}

      </MenuItems>
    </Menu>
  )
}

export default KIdsDropdown
