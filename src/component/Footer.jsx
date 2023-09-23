import React from 'react';
import {AiOutlineInstagram, AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai';
 import {Link} from 'react-router-dom'

const Footer = ({search, isLoading}) => {
  return (
    <div className='flex flex-col text-center mt-[70px] mb-[20px]'>
        {(!search || !isLoading) && 
        <div className='flex gap-[20px] mx-auto'>
         <Link to='https://github.com/estherlardze'>
          <AiFillGithub size={29}/>
         </Link> 
          <AiFillLinkedin size={29}/>
          <Link to='https://twitter.com/e_lardze'>
           <AiOutlineTwitter size={29}/>
          </Link>
          <Link to='https://instagram.com/e_lardze'>
           <AiOutlineInstagram size={29}/>
          </Link>
        </div>
}
         {(!search ||  !isLoading) &&  <p className='text-gray-500'>By Esther Lardze</p>}
    </div>
  )
    }
  


export default Footer