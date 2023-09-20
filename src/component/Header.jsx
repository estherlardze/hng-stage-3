import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../pages/index';


const Header = ({search, setSearch, filteredItems, setFilteredItems}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredImages = images.filter((item) => 
       item.tag.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
    setFilteredItems(filteredImages)
    setSearch('')
  }

  return (
    <div>
    <div className='flex justify-between mb-[30px]'>
      <form onSubmit={handleSubmit} >
       <input type="text" placeholder='search by tag...' value={search} onChange={(e) => setSearch(e.target.value)}
         className='md:w-[500px] w-[250px] rounded-2xl py-[5px] px-[10px] outline-none border border-solid'/>
      </form>
      <Link to='/login'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Logout</button>
      </Link>
      </div>
      
      <div>
      {/* {images.map((item) => (
            <div key={item.id} className='relative'>  
               <img src={item.image} alt={item.tag} className='w-[300px] h-[350px] rounded-md'/> 
               <button className='absolute top-[10px] right-[10px] bg-red-400 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded-xl'>{item.tag}</button>
            </div>
        ))} */}
      </div>
    </div>
  )
}

export default Header