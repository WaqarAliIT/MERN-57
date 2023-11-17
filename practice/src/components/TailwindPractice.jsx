import React from 'react'

export default function TailwindPractice() {
  return (
    <React.Fragment>
        <h1 className='. text-center bg-black text-white p-4 text-xl hover:text-black hover:bg-slate-500 border' >Tailwind CSS Practice</h1>

    <div className=". h-screen bg-slate-900 flex justify-center items-center">
        <div className='. h-5/6 bg-slate-300 w-11/12 flex'>
            <div className='. h-full w-1/2 '>
                <h1 className='. font-serif text-5xl my-20 mx-10'>We Create <br/> Website</h1>
                
                    <p className='. w-2/4 text-justify mx-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repudiandae aliquid molestiae accusamus, id natus animi magni saepe non porro perspiciatis tempora quaerat cupiditate impedit. Facilis magnam ullam dolorem accusamus.
                    
                    </p>
                
            </div>
            <div className=' bg-blue-950 h-full w-1/2 flex items-center justify-end'>
                <div className='. bg-orange-300 w-4/5 h-4/5 flex items-center justify-end'>
                    <div className='. bg-slate-300 w-3/4 h-4/5 flex items-center justify-end'>
                    <div className='. bg-white w-3/4 h-4/5'></div>
                    </div>

                </div>

            </div>
        </div>

    </div>
    
    </React.Fragment>

  )
}
