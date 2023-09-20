import React, {useState} from 'react';
import Header from '../component/Header';
import Gallery from '../component/Gallery';
import Footer from '../component/Footer';


const Home = () => {
 const [search, setSearch] = useState('')
 const [filteredItems, setFilteredItems] = useState([]);

 

  return (
    <div className='w-full max-w-[1000px] mx-auto mt-[20px]'>
        <Header search={search} setSearch={setSearch} setFilteredItems={setFilteredItems}/>
        <Gallery search={search} filteredItems={filteredItems} />
        <Footer />
    </div>
  )
}

export default Home