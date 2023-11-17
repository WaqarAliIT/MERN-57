import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <ul  className='flex justify-around h-8 bg-slate-500'>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
        <li>
            <Link to='/SignUp'>SignUp</Link>
        </li>

        <li>
            <Link to='/Posts'>Posts</Link>
        </li>
        <li>
            <Link to='/Calculator'>Calculator</Link>
        </li>
        <li>
            <Link to='/Security'>Security</Link>
        </li>
    </ul>
  )
}

export default Header