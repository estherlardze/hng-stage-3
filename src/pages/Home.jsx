import React, {useState} from 'react';
import Header from '../component/Header';
import Gallery from '../component/Gallery';
import Footer from '../component/Footer';


const Home = () => {
 const [search, setSearch] = useState('')
 const [filteredItems, setFilteredItems] = useState([]);
 const [isLoading, setIsLoading] = useState(false);


 

  return (
    <div className='w-full max-w-[1000px] mx-auto mt-[20px]'>
        <Header search={search} setSearch={setSearch} setFilteredItems={setFilteredItems}/>
        <Gallery search={search} filteredItems={filteredItems} isLoading={isLoading} setIsLoading={setIsLoading}/>
        <Footer search={search} isLoading={isLoading}/>
    </div>
  )
}

export default Home