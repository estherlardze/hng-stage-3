import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {auth} from '../component/firebase'
import {CreateUserWithEmailAndPassword} from 'firebase/auth';


export default function Signup(){
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        CreateUserWithEmailAndPassword(auth, email, password)
        .then(data => {
         console.log(data)
         navigate('/login')
        }.catch(err => alert(err.code))
    }
    
    return(
      <div className='w-full max-w-xs mx-auto mt-[100px]'>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
               Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email"/>
          </div>
          <div className="mb-6">
             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
               Password
             </label>
             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder='password'/>
          </div>
         <div className="flex flex-col items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign Up
            </button>
            <Link to='/login' className="inline-block align-baseline font-bold text-sm mt-2  text-blue-500 hover:text-blue-800" href="#">
               Already have an account ? Login
            </Link>
         </div>
      </form>
</div>
    )
}
