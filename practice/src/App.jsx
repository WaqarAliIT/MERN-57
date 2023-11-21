
import React from 'react'
import Header from './components/Header'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import { Routes, Route } from 'react-router-dom'
// import CirclesFlexInline from './components/CirclesFlexInline'
// import TailwindPractice from './components/TailwindPractice'
// import Ternary from './components/Ternary'
import SignUp from './pages/SignUp'
import Calculator from './pages/Calculator'
import Security from './pages/Security'
import Posts from './pages/Posts'
import StopWatch from './components/StopWatch'
import Responsiveness from './components/Responsiveness'

//import CirclesFlexInline from './components/CirclesFlexInline'


function App() {
  
  return (
    <React.Fragment>
      
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>     
        <Route path='/Calculator' element={<Calculator/>}/>    
        <Route path='/Security' element={<Security/>}/>
        <Route path='/Posts' element={<Posts/>}/>
        <Route path='/Responsiveness' element={<Responsiveness/>}/>
        {/* <Route path='/Posts' element={<Posts/:id>}/> */}
      </Routes>

            
     </React.Fragment>
  )
}

export default App
