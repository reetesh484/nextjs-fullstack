"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />
      

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
        onClick={onLogin}
      >Login</button>
      <Link href="/signup">Signup </Link>
    </div>
  );
};

export default LoginPage;
