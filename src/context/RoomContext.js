import React, { createContext, useEffect, useState } from 'react';

//data
import { roomData } from "../data.js";

export const RoomContext = createContext();


const RoomProvider = ({ children }) => {

  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setKids] = useState('0 Kids');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

 useEffect(()=> {
  setTotal(Number(adults[0]) + Number(kids[0]) )

 });

const handleClick = (e) => {
  e.preventDefault();
  setLoading(true);

  const newRooms = roomData.filter((room) => {
    return total <= room.maxPerson;

  });
  setTimeout(()=>{
   setRooms(newRooms);
   setLoading(false); 
  },3000);

  setRooms(newRooms);
}
console.log(rooms)


  return (
    <RoomContext.Provider value={{ rooms, adults, setAdults, kids, setKids, handleClick, loading }}>
      {children}
    </RoomContext.Provider>
  )
}

export default RoomProvider
