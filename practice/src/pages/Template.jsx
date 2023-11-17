import React from 'react'
import Header from '../components/Header'
function Template(props) {
  return (
    <React.Fragment>
        <Header/>
        <div className='flex justify-between'>
            <div className=' bg-red-700 w-40 h-screen'>Adds</div>
            <div>{props.children}</div>
            <div className=' bg-red-700 w-40 h-screen'>Aside</div>
        </div>
        <div className=' h-12 bg-slate-600'>Footer</div>

    </React.Fragment>
  )
}

export default Template