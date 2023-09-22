import React from 'react';

const ImageCard = ({item}) => {
  return (
    <div className='relative'>  
        <img src={item.image} alt={item.tag} className=' w-[250] md:w-[300px] h-[350px] rounded-md'/> 
        <button className='absolute top-[20px] right-[20px] bg-red-400 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-xl'>{item.tag}</button>
    </div>
  )
}

export default ImageCard