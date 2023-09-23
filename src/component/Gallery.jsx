import React, { useState, useEffect } from 'react'
import { images } from '../pages/index';
import ImageCard  from './ImageCard';
import Loader from './Loader'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'


const Gallery = ({search, isLoading, setIsLoading}) => {
  const [image, setImage] = useState(images)

 
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(image);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImage(items);
  }
  return (
    <div>
      {isLoading ? (<Loader />)
     :
   ( <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
      {(provided) => (
       <div className='flex flex-wrap gap-[20px] mx-[30px] md:mx-[auto]' {...provided.droppableProps}
        ref={provided.innerRef}>

         {!search && images.map((item, index) => (
         
           <Draggable  key={item.id} draggableId={item.id.toString()} index={index}>
            
            {(provided) => (
            //  <ImageCard item={item} {...provided.droppableProps}
            //   ref={provided.innerRef} {...provided.dragHandleProps} />
            <div className='relative' {...provided.droppableProps} ref={provided.innerRef} {...provided.dragHandleProps}> 

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
  </div>
 ) } 
export default Gallery