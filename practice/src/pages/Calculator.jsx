import React from 'react'
import Swal from 'sweetalert2';
import { useState } from 'react';
export default function Calculator() {
const [num1,setNum1]=useState(0);
const [num2,setNum2]=useState(0);
const [result,setResult]=useState("");

// const calculate=(a,b,op)={
// switch(op){
    
// case '+':
//     useResult(a+b);
//     break;

// case '-':
//         useResult(a-b);
//         break;
//  case '/':
//             useResult(a/b);
//             break;
// case '*':
// useResult(a*b);
//                 break;
    
    
// }

// }

    const handle=(e)=>{
        e.preventDefault();
    }

  return (
    <React.Fragment>
        <h1 className='. text-center bg-black text-white p-4 text-xl hover:text-black hover:bg-slate-500 border'>Calculator</h1>
        <div className='flex justify-center items-center h-screen'>
            <form action="" className='flex flex-col gap-3 justify-center'  onSubmit={handle}>
                <div>
                <label htmlFor="">Number 1: </label>
                <input type="number" className='border-[2px] rounded' onChange={(e)=> setNum1(e.target.value)} value={num1} />
                </div>

                <div>
                <label htmlFor="">Number 2: </label>
                <input type="number" className='border-[2px] rounded' onChange={(e)=> setNum2(e.target.value)} value={num2} />
                </div>

                <div>
                    <button className=' bg-slate-400 w-10 h-10 rounded-[50%] text-lg'
                    onClick={()=>{
                        setResult(Number(num1)+Number(num2))

                    }}
                    >+</button>
                    <button className=' bg-slate-400 w-10 h-10 rounded-[50%] text-lg' 
                    onClick={()=>{
                        setResult(Number(num1)-Number(num2))
                    }}
                    >-</button>
                    <button className=' bg-slate-400 w-10 h-10 rounded-[50%] text-lg'
                    onClick={()=>{
                        setResult(Number(num1)*Number(num2))
                    }}
                    >*</button>
                    <button className=' bg-slate-400 w-10 h-10 rounded-[50%] text-lg'
                    onClick={()=>{
                        setResult(Number(num1)/Number(num2))
                    }}
                    >/</button>
                    <button className=' bg-slate-400 w-10 h-10 rounded-[50%] text-lg' 
                    onClick={()=>{
                        setResult(Number(num1)/Number(num2))
                    }}
                    >%</button>
                </div>
                    <div className=' bg-slate-500 p-10'>
                    Result: <span>{result}</span>    
                    </div>
            </form>
        </div>

    </React.Fragment>
  )
}
