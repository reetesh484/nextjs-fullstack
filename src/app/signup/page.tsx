"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
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
      >Signup</button>
      <Link href="/login">Login </Link>
    </div>
  );
};

export default SignupPage;
