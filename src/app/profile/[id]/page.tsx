export default function UserProfile({params}:any){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1>Profile</h1>
            <hr />
            <p className="font-bold text-2xl text-gray-700">Profile Page <span className=" py-2 px-4 rounded-lg bg-orange-600 text-white font-bold">{params.id}</span> </p>
        </div>
    )
}