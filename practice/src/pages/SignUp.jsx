import React  from "react";

export default function SignUp() {
  return (
    <React.Fragment>
        
          <h1 className='. text-center bg-black text-white text-3xl'>Sign Up</h1>
          <div className="flex justify-center  h-[100vh]">
          <form action=""  className=" w-2/6 flex flex-col   gap-4 align-middle  justify-center">
            <input type="text"  placeholder="First Name" className=" border rounded"/>
            <input type="text"  placeholder="Last Name" className=" border  rounded"/>
            <input type="Email"  placeholder="email@gmail.com" className=" border rounded"/>
            <input type="password"  placeholder="First Name" className=" border rounded"/>
            <center>
            <input type="submit" className=" border w-20 bg-green-500 rounded" />
            </center>
          </form>
          </div>
        

    </React.Fragment>
  )
}
