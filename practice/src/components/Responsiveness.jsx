import React from 'react'

export default function Responsiveness() {
  return (
    <React.Fragment>
        <div className='lg:flex'>
            <div className=' lg:w-1/2 h-[200px] bg-blue-500 m-2 md:w-1/1 sm:w-1/1'></div>
            <div className=' lg:w-1/2 h-[200px] bg-blue-500 m-2 md:w-1/1 sm:w-1/1' ></div>
        </div>
        <div className='h-[200px] bg-yellow-600 m-2'>

        </div>

        <div className='lg:flex'>
            <div className='lg:w-1/3 h-[150px] md:1/1 sm:1/1 bg-orange-400 m-2'></div>
            <div className='lg:w-1/3 h-[150px] md:1/1 sm:1/1 bg-orange-400 m-2'></div>
            <div className='lg:w-1/3 h-[150px] md:1/1 sm:1/1 bg-orange-400 m-2'></div>
        </div>

        <div className='lg:flex md:flex md:flex-wrap sm:block'>
            <div className='lg:w-[calc(25%-16px)] h-[150px] md:w-[calc(50%-20px)] sm:1/1 bg-gray-700 m-2'></div>
            <div className='lg:w-[calc(25%-16px)] h-[150px] md:w-[calc(50%-20px)] sm:1/1 bg-gray-700 m-2'></div>
            <div className='lg:w-[calc(25%-16px)] h-[150px] md:w-[calc(50%-20px)] sm:1/1 bg-gray-700 m-2'></div>
            <div className='lg:w-[calc(25%-16px)] h-[150px] md:w-[calc(50%-20px)] sm:1/1 bg-gray-700 m-2'></div>

        </div>

    </React.Fragment>
  )
}
