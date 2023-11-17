import React from 'react'
import {useState} from 'react'


export default function StopWatch() {
 const [time,setTime]=useState(0);
 
 const start =()=>{
           
        setInterval(()=>{
             setTime((time)=>time+1)},1000)
    
 }
 return (
    <React.Fragment>
        <div className='flex flex-col'>
        <button className='border bg-green-600 rounded w-[80px]' onClick={start}
        >Play</button>


<button className='border bg-red-600 rounded w-[80px] rounded hover:border' onClick={()=>{
            {
            
         
                
            
            };

        }}>Stop</button>

        <div className=' bg-black text-white w-40 h-40 rounded-[5px] flex'>
        {`Minutes: ${Math.floor(time/60)}: Seconds: ${time%60}`}
            
        </div>
        </div>

    </React.Fragment>
  )
}
