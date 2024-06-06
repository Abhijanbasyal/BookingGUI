import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RoomContext } from '../context/RoomContext.js';
import imageLg from '../assets/rooms/1.jpg';








const RoomDetails = () => {

  const { rooms } = useContext(RoomContext)
  const { id } = useParams();
  console.log(id);

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  const { name, description, facilities, imageLg, price } = room;



  return (
    <section>

      <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        <div className='absolute w-full h-full bg-black/70'>

        </div>
        <h1 className='text-6xl text-white z-20 font-primary text-center'>
          {name} details
        </h1>

      </div>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row h-full py-24'>
          <div className='w-full h-full px-6 lg:w-[60%]'>
            <h2 >{name}</h2>
            <p className='mb-8'>
              {description}
            </p>
            <img src={imageLg} alt='' />
            <div className='mt-12'>
              <h3 className='mb-3 '>
                Room facilities
              </h3>
              <p className='mb-12'>
                iobhsd iopha iougoadf oiadf opihadf uiogadf oiuagdf uioiudv adf iouhvouih aiodf iophaasdouifh aoid oiadfio
                uadf oihadf ipohadf oihadf oiahdf oiahdf ioahdf oiha iga opiyfg opiyha poig oasoid poajsd fpuag oihag aohg
                aiofgh akjfd giohafg ipohafg pioahfg oifg hoiag 9haf iohafg aihfg oiahg oiahgioahfiogyaifnvouisag iohjv oihaglia
                kjbasfjkg bafg.

              </p>
              <div className='grid grid-cols-3 gap-6 mb-12'>
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return <div className='flex items-center gap-x-3 flex-1' key={index} >
                    <div className='text-3xl text-accent'>
                      {icon}
                    </div>
                    <div className='text-base'>
                      {name}
                    </div>
                  </div>
                })}
              </div>
            </div>
          </div>

          <div className='w-full h-full lg:w-[60%]'>
            iobhsd iopha iougoadf oiadf opihadf uiogadf oiuagdf uioiudv adf iouhvouih aiodf iophaasdouifh aoid oiadfio
            uadf oihadf ipohadf oihadf oiahdf oiahdf ioahdf oiha iga opiyfg opiyha poig oasoid poajsd fpuag oihag aohg
            aiofgh akjfd giohafg ipohafg pioahfg oifg hoiag 9haf iohafg aihfg oiahg oiahgioahfiogyaifnvouisag iohjv oihaglia
            kjbasfjkg bafg.
          </div>

        </div>
      </div>
    </section>
  )
}

export default RoomDetails
