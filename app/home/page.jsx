import TopicsList from "../../components/TopicsList";
import Link from "next/link";

export default function Home() {
  return (  <div>
                <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
                    <Link className="text-white font-bold" href={"/"}>
                        Eliel Topic Archives.
                    </Link>
                    <Link className="bg-white p-2" href={"/addTopic"}>
                        Add Topic
                    </Link>
                </nav>
                <TopicsList />
            </div>
        );
}
