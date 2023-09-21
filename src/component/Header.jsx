import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../pages/index';


const Header = ({search, setSearch, setFilteredItems}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredImages = images.filter((item) => {
     if(!search) return item
     
     else if(item.tag.toLowerCase().includes(search.toLowerCase()))
     {
      setFilteredItems(filteredImages)
     }    
  })
    console.log(filteredImages)
   
    setSearch('')
  }

  return (
    <div className='flex justify-between mb-[30px]'>
      <form onSubmit={handleSubmit} >
       <input type="text" placeholder='search by tag...' value={search} onChange={(e) => setSearch(e.target.value)}
         className='md:w-[500px] w-[250px] rounded-2xl py-[5px] px-[10px] outline-none border border-solid'/>
      </form>
      <Link to='/login'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Logout</button>
      </Link>
      </div>
  
  )
}

export default Header