'use client'

import TopicsList from "../components/TopicsList";
import Link from "next/link";
import { FcGoogle } from 'react-icons/fc';
import { signIn, useSession } from 'next-auth/react';
import  { useRouter } from 'next/navigation';
import React, {useEffect} from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Home() {

  const {data:session} = useSession()
  const router = useRouter()
  const [user, setUser] = React.useState({
    email: "",
    password: "",
   
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);


  const onLogin = async () => {
      try {
          setLoading(true);
          const response = await axios.post("/api/users/login", user);
          console.log("Login success", response.data);
          toast.success("Login success");
          router.push("/home");
      } catch (error) {
          console.log("Login failed", error.message);
          toast.error(error.message);
      } finally{
      setLoading(false);
      }
  }

  useEffect(() => {
      if(user.email.length > 0 && user.password.length > 0) {
          setButtonDisabled(false);
      } else{
          setButtonDisabled(true);
      }
  }, [user]);

  if(session) {
    router.replace('/home');
    return null;
  }
  return <div className="flex flex-col">
     <h1 className="text-3xl">{loading ? "Processing" : "Login"}</h1><br/>
      <hr /><br />
      <div className="flex-col">
      <div>
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input 
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
              id="email"
              type="text"
              value={user.email}
              onChange={(e) => setUser({...user, email: e.target.value})}
              placeholder="email"
              />
        </div>
        
      </div>
      <div>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
        </div>
      
      </div>
      <div className="flex-col">
        <div>
          <button
            onClick={onLogin}
            className="p-2 border bg-gray-500 text-gray-100 rounded-lg mb-4 focus:outline-none focus:border-gray-600">
            Login here
          </button>
        </div>
        <div>
          <Link 
            href="/signup" 
            className="text-blue-600 hover:underline">
            Visit Signup page
          </Link>
        </div>
        
      </div>
      
      </div>
      

    
    {/* <button 
      className="bg-slate-800 flex text-white rounded-md p-2" 
      onClick={()=>{
        signIn("google")
      }}>
      <FcGoogle /> 
      Sign in with Google
    </button> */}
  </div>
}
