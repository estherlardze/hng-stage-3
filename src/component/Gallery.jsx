import React from 'react'
import { images } from '../pages/index';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const Gallery = ({search, filteredItems}) => {
  return (
    <DragDropContext onDragEnd={(result) => console.log(result)} >
    <div className='flex flex-wrap gap-[20px] mx-[30px] md:mx-[auto]'>
   
        {!search ? images.map((item) => (
           <Droppable droppableId={item.id}>
              {(provided) => (
            <div key={item.id} className='relative' {...provided.droppableProps} ref={provided.innerRef}>  
               <img src={item.image} alt={item.tag} className=' w-[94%] md:w-[300px] h-[350px] rounded-md'/> 
               <button className='absolute top-[20px] right-[20px] bg-red-400 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-xl'>{item.tag}</button>
            </div>
              )}
            </Droppable>
            ))
            :
            filteredItems.map((item) => (
                <Droppable droppableId={item.id}>
                    {(provided) => (
                <div key={item.id} className='relative' {...provided.droppableProps} ref={provided.innerRef}>  
                   <img src={item.image} alt={item.tag} className='w-[300px] h-[350px] rounded-md'/> 
                   <button className='absolute top-[10px] right-[10px] bg-red-400 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-xl'>{item.tag}</button>
                </div>
                )}
                </Droppable>
            ))
        }
         </div>
     </DragDropContext>
  )
}

export default Gallery