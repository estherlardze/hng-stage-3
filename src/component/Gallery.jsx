import React from 'react'
import { images } from '../pages/index';
import ImageCard  from './ImageCard'


const Gallery = ({search}) => {

  return (
    <div className='flex flex-wrap gap-[20px] mx-[30px] md:mx-[auto]'>
      {!search && images.map((item) => (
        <ImageCard item={item} key={item.id}/>
       ))}
       </div>
     ) }    
export default Gallery