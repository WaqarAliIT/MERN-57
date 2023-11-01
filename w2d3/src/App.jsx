import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let color="";

  return (
    <>
    
    
      <h1>Circle</h1>
      <div className="wrap">
      <button onClick={function (){
           color =alert("I am Waqar Ali");
          }}>
          Click me
        </button>

      </div>
      <div className="wrap">
      


        <div className="bigcircle"></div>
      </div>

      <div className="wrap">
        


        {/*<div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        */}
      </div>
    

    </>
  )
}

export default App
