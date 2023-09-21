import React, { useState } from 'react';
import {database} from '../component/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from 'react-router-dom'



export default function Login(){

  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(database, email, password).then((data) => {
    console.log(data, "authData");
    navigate('/home')
  })
  .catch((error) => {
    console.error(error)
  });
}


    return(
      <div className='w-full max-w-xs mx-auto mt-[100px]'>
         <h1 className='text-center text-2xl font-semibold '>Log in with Email and password</h1>
        <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input value={email} onChange={(e) => setemail(e.target.value)} 
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="email" required/>
          </div>

          <div className="mb-6">
             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
               Password
             </label>
             <input value={password} onChange={(e) => setPassword(e.target.value)} 
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder='password' required/>
          </div>

         <div className="flex flex-col items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Log in
            </button>
         </div>

      </form>
</div>
    )
}
