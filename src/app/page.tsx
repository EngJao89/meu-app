import Link from "next/link";
import { DiTechcrunch } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaFolder, FaUserAstronaut } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface DataProps {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  language: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  };
}

async function getData() {
  const response = await fetch("https://api.github.com/users/EngJao89/repos");
  return response.json();
}

export default async function Home() {
  const data: DataProps[] = await getData();

  return (
    <main className="mt-10 mb-5 mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
      <h3 className="text-white ml-4">Repositórios</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {data.map((item) => (
          <Card
            key={item.id}
            className="bg-zinc-900 bg-opacity-30 backdrop-blur-lg rounded-3xl p-5 flex flex-col"
          >
            <CardHeader className="flex justify-between items-center mb-4 text-gray-100 text-base font-bold">
              <FaFolder size={14} />
              {item.name}
            </CardHeader>
            <CardContent>
              <div className="mb-4 ml-6 inline-flex justify-center items-baseline">
                <FaUserAstronaut size={14} color="#FFFFFF" className="mr-1" />
                <h3 className="text-white">{item.owner.login}</h3>
              </div>
              <div className="mb-4">
                <Link href={`/repositorios/${item.id}`}>
                  <Button 
                    type="submit"
                    className="rounded-full w-full px-5 py-2 bg-gray-100 text-[10px] text-center text-gray-900 hover:bg-zinc-500"
                  >
                    Detalhes Repositório
                    <FaGithub size={14} className="ml-2"/>
                  </Button>
                </Link>
              </div>
              <div className="flex items-center">
                  <DiTechcrunch size={20} color="gray" className="mr-1"/>
                  <p className="text-xs text-white">{item.language}</p>
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
