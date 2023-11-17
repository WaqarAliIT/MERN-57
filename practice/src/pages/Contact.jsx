import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';
function Contact() {

const handleSubmit=(e)=>{
  e.preventDefault();
  Swal.fire(`Form Submitter...... Name: ${name}.. Email: ${email}.... Message: ${msg
  }`)
}

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [msg,setMsg]=useState("");


  return (
    <div>
        <h1 className='. text-center bg-black text-white text-3xl'> Contact Us </h1>

        <form action="" onSubmit={handleSubmit}>
        <center>
        
          <input type="text" placeholder='Name: John'  onChange={(e)=>{
            setName(e.target.value)}} className='. w-1/3 border m-5 p-2 rounded'  required/> <br />
         
          <input type="email" onChange={(e)=>{
            setEmail(e.target.value)}} placeholder='Email: Jogn@gmail.com' className='. border w-1/3 m-5 p-2 rounded ' required /><br />
          
          <textarea onChange={(e)=>{
            setMsg(e.target.value)}} name="" id="" cols="30" rows="10" className='border w-1/3 rounded ' ></textarea><br/>
          <input type="submit" placeholder='Name: John' className='. bg-green-500 m-5 p-2 rounded' />
          
          
          </center>


        </form>
    </div>
  )
}

export default Contact