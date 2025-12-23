import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const RegisterPage = () => {
    const navigate=useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit=async(e)=>{

    e.preventDefault()
    try {
        const res=await axios.post('http://localhost:5000/user',{name,password,email})
        console.log(res.data);
              toast.success("Register successful");
        navigate('/hero');
        
    } catch (error) {
        console.log(error); 
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Toaster position="top-right" />

      <form className="w-100 shadow" onSubmit={handlerSubmit}>
        <div className="border border-[#ccc] rounded text-center py-10 px-5">
          <h1 className="mb-4 text-2xl font-bold">Register Form</h1>
          <div className=" m-auto mb-2">
            <label className="block text-left" htmlFor="Name">
              Name:
            </label>
            <input
              className="border border-[#ccc] rounded ml-1 px-5 py-2 w-full text-left"
              placeholder="Enter your name "
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div className=" mb-2">
            <label className="block text-left" htmlFor="Email">
              Email:
            </label>
            <input
              className="border border-[#ccc] rounded ml-1 px-5 py-2 w-full"
              placeholder="Enter your name "
              type="email"
              name=""
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              id=""
            />
          </div>
          <div className=" mb-2">
            <label className="block justify-start text-left" htmlFor="Password">
              Password:
            </label>
            <input
              className="border border-[#ccc] rounded ml-1 px-5 py-2 w-full"
              placeholder="Enter your name "
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              name=""
              id=""
            />
          </div>
          <div className="border border-[#ccc] py-2 rounded justify-center  bg-blue-500">
            <button className="text-white">SignUp</button>
          </div>
          <p className="text-end">
            Already have account{" "}
            <span className="text-blue-600">
              {" "}
              <Link to="/login"> login </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
