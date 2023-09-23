import React, { useState, useEffect } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import Loader from './Loader';
import { images} from '../pages/index';

const Gallery = ({ search, isLoading, setIsLoading}) => {

  const [image, setImage] = useState(images);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleMoveImage = (dragIndex, hoverIndex) => {
    const draggedImage = image[dragIndex];
    const newImageArray = [...image];
    newImageArray.splice(dragIndex, 1);
    newImageArray.splice(hoverIndex, 0, draggedImage);
    setImage(newImageArray);
  };
  const Image = ({ item, index }) => {
    const [, ref] = useDrag({
      type: 'IMAGE',
      item: { index },
    });
    const [, drop] = useDrop({
      accept: 'IMAGE',
      hover: (draggedItem) => {
        if (draggedItem.index !== index) {
          handleMoveImage(draggedItem.index, index);
          draggedItem.index = index;
        }
      },
    });
    return (
      <div ref={(node) => ref(drop(node))} className='relative'>
        <img
          src={item.image}
          alt={item.tag}
          className='w-[250px] md:w-[300px] h-[350px] rounded-md'
        />
        <button className='absolute top-[20px] right-[20px] bg-red-400 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-xl'>
          {item.tag}
        </button>
      </div>
    );
  };
  return (
    <div>
      { isLoading ? (
        <Loader />
      ) : (
    <div className='flex flex-wrap gap-[20px] mx-[30px] md:mx-[auto]'>
      { !search && image.map((item, index) => (
        <Image key={item.id} item={item} index={index} />
      ))}
    </div>
      )
}
    </div>  
      );
};
export default Gallery;