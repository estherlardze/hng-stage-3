import React from 'react';
import {AiOutlineInstagram, AiFillGithub, AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex flex-col text-center mt-[70px] mb-[20px]'>
        <div className='flex gap-[20px] mx-auto'>
          <AiFillGithub size={29}/>
          <AiFillLinkedin size={29}/>
          <AiOutlineTwitter size={29}/>
          <AiOutlineInstagram size={29}/>
        </div>
        <p className='text-gray-500'>By Esther Lardze</p>
    </div>
  )
}

export default Footer