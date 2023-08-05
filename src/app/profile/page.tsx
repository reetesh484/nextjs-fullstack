"use client"
import axios from 'axios'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
export default function ProfilePage(){
    const router = useRouter();

    const [user,setUser] = useState("")
    const logout = async() => {
        try{
            await axios.get('/api/users/logout')
            toast.success("Logged out successfully");
            router.push('/login');
        }catch(error:any){
            console.log(error.message)
            toast.error(error.message);
        }
    }

    const getUserDetails = async() => {
        const res = await axios.get('/api/users/me');
        console.log(res.data)
        setUser(res.data.data._id)
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <h2 className='p-1 rounded bg-green-500' >{user ? <Link href={`/profile/${user}`}>User</Link> : "Nothing"}</h2>
            <hr />
            
            <button onClick={logout} className="bg-blue-500 px-4 py-2 rounded-md text-white active:bg-blue-60">Logout</button>
            <button onClick={getUserDetails} className="bg-purple-500 px-4 py-2 rounded-md text-white active:bg-blue-60">GetUserDetails</button>
        </div>
    )
}