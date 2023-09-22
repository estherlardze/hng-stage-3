import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../pages/index';
import ImageCard from './ImageCard';


const Header = ({search, setSearch}) => {

    const filteredImages = search ? images.filter((item) => (
      item.tag.toLowerCase().includes(search.toLowerCase())
      
     )) : 'No results found'
   
   

  return (
  <div>
    <div className='flex justify-between mb-[30px]'>
      <form onSubmit={(e) => e.preventDefault()}>
       <input type="text" placeholder='search by tag...' value={search} onChange={(e) => setSearch(e.target.value)}
         className='md:w-[500px] w-[250px] rounded-2xl py-[5px] px-[10px] outline-none border border-solid'/>
      </form>
      <Link to='/'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Logout</button>
      </Link>
      </div>

     <div className='flex flex-wrap gap-[20px] mx-[30px] md:mx-[auto]'>
      {Array.isArray(filteredImages) && filteredImages.map((item) => (
          <ImageCard item ={item} key={item.id}/>
        ))} 
      
      </div>
      </div>
  )
}

export default Header