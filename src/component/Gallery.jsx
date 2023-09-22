import React, {useState} from 'react'
import { images } from '../pages/index';
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const Gallery = ({search, filteredItems}) => {
  
  return (
    <DragDropContext onDragEnd={(result) => console.log(result)} >
       <Droppable droppableId="characters">
         {(provided) => (
       <div className='flex flex-wrap gap-[20px] mx-[30px] md:mx-[auto]' {...provided.droppableProps} ref={provided.innerRef}>
          {images.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id}index={index} >
              {(provided) => (
             <div  className='relative' {...provided.droppableProps} {...provided.dragHandleProps} ref={provided.innerRef}>  
               <img src={item.image} alt={item.tag} className=' w-[250] md:w-[300px] h-[350px] rounded-md'/> 
              <button className='absolute top-[20px] right-[20px] bg-red-400 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-xl'>{item.tag}</button>
             </div>
              )}
             </Draggable>
          ))}
      {provided.placeholder}
       </div>
         )}
        </Droppable>
      </DragDropContext>
            
        )}
           
            {/* // filteredItems.map((item) => (
            //     <Droppable droppableId={item.id}>
            //         {(provided) => (
            //     <div key={item.id} className='relative' {...provided.droppableProps} ref={provided.innerRef}>  
            //        <img src={item.image} alt={item.tag} className='w-[300px] h-[350px] rounded-md'/> 
            //        <button className='absolute top-[10px] right-[10px] bg-red-400 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-xl'>{item.tag}</button>
            //     </div>
            //     )} */}
              
            
export default Gallery