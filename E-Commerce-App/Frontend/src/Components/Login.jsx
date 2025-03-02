import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


    useEffect(() => {
      const auth = localStorage.getItem("user");
      if (auth) {
        navigate("/"); // Redirect if already logged in
      }
    }, []); // Runs once on mount


  const handleLogin = async (e) => {

    // e.preventDefault();
    let result = await fetch("http://localhost:3000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    result = await result.json();

    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please enter correct details !");
    }

  };

  return (
    <div className="font-semibold mt-20 flex flex-col justify-center items-center">
      <div className="mb-6">
        <h3 className="text-3xl">Login</h3>
      </div>
      <div className="p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="mb-4 flex flex-col items-start w-full">
          <label htmlFor="email" className="mb-1">
            Email:
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            placeholder="Enter Email"
            id="email"
            className="outline-none w-80 h-10 pl-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4 flex flex-col items-start w-full">
          <label htmlFor="password" className="mb-1">
            Password:
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder="Enter Password"
            id="password"
            className="outline-none w-80 h-10 pl-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white font-semibold p-2 w-80 rounded-lg hover:bg-blue-600 transition-all"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
