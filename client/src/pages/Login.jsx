import React from 'react'

const Login = () => {
  return (
    <div name='login' className="bg-white  rounded-2xl shadow-2xl md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out w-screen p-4 flex flex-col justify-center h-screen ">
             <h2 className='p-3 text-3xl font-bold text-pink-400'></h2>
             <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
             <h3 className='text-xl font-semibold text-blue-400 pt-2'>Sign In!</h3>
             <div className='flex space-x-2 m-4 items-center justify-center'>
               
             </div>
             {/* Inputs */}
             <div className='flex flex-col items-center justify-center'>
              <input type='email' className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Email'></input>
              <input type="password" className='rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0' placeholder='Password'></input>
              <button className='rounded-2xl m-2 text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in'>
                Sign In
              </button>
             </div>
             <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
             <p className='text-blue-400 mt-4 text-sm'>Don't have an account?</p>
             <p className='text-blue-400 mb-4 text-sm font-medium cursor-pointer'>Create a New Account?</p>
          </div>
  )
}

export default Login