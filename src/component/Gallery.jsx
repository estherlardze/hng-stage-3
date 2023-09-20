import React from 'react'
import { images } from '../pages/index'

const Gallery = ({search, setFilteredItems, filteredItems}) => {
  return (
    <div className='flex flex-wrap gap-[20px] '>

        {!search ?  images.map((item) => (

            <div key={item.id} className='relative'>  
               <img src={item.image} alt={item.tag} className='w-[300px] h-[350px] rounded-md'/> 
               <button className='absolute top-[10px] right-[10px] bg-red-400 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-xl'>{item.tag}</button>
            </div>
            ))
            :
            filteredItems.map((item) => (
                <div key={item.id} className='relative'>  
                   <img src={item.image} alt={item.tag} className='w-[300px] h-[350px] rounded-md'/> 
                   <button className='absolute top-[10px] right-[10px] bg-red-400 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-xl'>{item.tag}</button>
                </div>
            ))
        }
    </div>
  )
}

export default Gallery