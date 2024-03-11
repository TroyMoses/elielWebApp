import TopicsList from "../components/TopicsList";
import Link from "next/link";
import { FcGoogle } from 'react-icons/fc';
import { signIn, useSession } from 'next-auth/react';
import  { useRouter } from 'next/router';

export default function Home() {

  const data = useSession()
  const router = useRouter()
  if(session) {
    router.replace('/homePage')
  }
  return <div>
    <h1 className="text-3xl mb-5">Hello From Eliel</h1>
    
    <button 
      className="bg-slate-800 flex text-white rounded-md p-2" 
      onClick={()=>{
        signIn("google")
      }}>
      <FcGoogle /> 
      Sign in with Google
    </button>
  </div>
}
