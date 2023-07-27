"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter(); 
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    if (user.email && user.password && user.username) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);}
  },[user]);

  const onSignup = async () => {
    try{
      setLoading(true) 
      const response = await axios.post("/api/users/signup", user)
      console.log("Signup successfull", response.data);
      router.push("/login")
    }catch(error:any){
      console.log("Signup failed!",error);
      toast.error(error.message);
    }finally{
      setLoading(false)
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? 'Processing' : 'Signup'}</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:border-gray-500"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />

      <label htmlFor="username">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:border-gray-500"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      <label htmlFor="username">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:border-gray-500"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:border-gray-500"
        onClick={onSignup}
      >{buttonDisabled ? 'No Signup' : 'Signup'}</button>
      <Link href="/login">Login </Link>
    </div>
  );
};

export default SignupPage;
