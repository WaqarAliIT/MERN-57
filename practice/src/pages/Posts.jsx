import React, { useState } from 'react'
import axios from 'axios'
import Lottie from 'lottie-react';
import loader from '../assets/loader.json'

export default function Posts() {
const [posts,setPosts]=useState([]);

function fetchPost(){
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((result)=>setPosts(result.data));

}
    
    return (
    <React.Fragment>
    
    <Lottie options={{animationData:loader}} style={{width:"200px", height:"200px"}}/>
        
        <button className=" bg-red-900 w-full" onClick={fetchPost}>POSTS</button>
         
         <div>
            {
            posts.map((data)=>{
                return(
                                        <div key={data} className='Border-[2px]'>
                        <div>{data.id}</div>
                        <div>{data.title}</div>
                    <div>{data.body}</div>
                    </div>
                    
                )
               }    )
            }
        </div>
    </React.Fragment>
  )
}
