import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and password required");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:5000/user?email=${email}`
      );

      if (res.data.length === 0) {
        toast.error("User not found");
        return;
      }

      const user = res.data[0];

      if (user.password !== password) {
        toast.error("Invalid password");
        return;
      }

      toast.success("Login successful 🎉");

      localStorage.setItem("user", JSON.stringify(user));

      setTimeout(() => {
        navigate("/product");
      }, 1000);
    } catch (error) {
      toast.error("Server error");
    }
  };

  return (
    <div className="m-auto mt-20 max-w-md">
      <Toaster position="top-right" />

      <form onSubmit={handlerSubmit} className="shadow p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border border-[#ccc] rounded p-2 w-full mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border border-[#ccc] rounded p-2 w-full mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-blue-500 cursor-pointer text-white w-full py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
