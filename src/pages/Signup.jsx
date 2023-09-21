import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {database } from '../component/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"


export default function Signup(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleSignup = (e) => {
      e.preventDefault();

     createUserWithEmailAndPassword(database, email, password).then((data) => {
      console.log(data, "authData");
      navigate('/login')
    })
    .catch((error) => {
      console.error(error)
      // ..
    });
  }
  
    
    return(
      <div className='w-full max-w-xs mx-auto mt-[100px]'>
        <h1 className='text-center text-3xl font-semibold '>Sign Up</h1>
        <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
               Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             id="username" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-6">
             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
               Password
             </label>
             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
         <div className="flex flex-col items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign Up
            </button>
         </div>
      </form>
</div>
    )
}
