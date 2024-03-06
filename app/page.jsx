import TopicsList from "../components/TopicsList";
import Link from "next/link";

export default function Home() {
  return <div>
    <h1 className="text-3xl mb-5">Hello From Eliel</h1>
    <Link className="bg-slate-800 text-white rounded-md p-2" href={"/home"}>
        Go To Archives
    </Link>
  </div>
}
