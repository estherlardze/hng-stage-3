import React, { useState } from 'react';


export default function Login(){

    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
    } 


    return(
      <div className='w-full max-w-xs mx-auto mt-[100px]'>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input value={email} onChange={(e) => e.target.value} 
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Username" required/>
          </div>

          <div className="mb-6">
             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
               Password
             </label>
             <input value={password} onChange={(e) => e.target.value} 
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder='password' required/>
          </div>

         <div className="flex flex-col items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Log in
            </button>
         </div>

      </form>
</div>
    )
}
