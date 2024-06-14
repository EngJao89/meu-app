import { FaFolder } from "react-icons/fa6";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface DataProps{
  id: number;
  name: string;
  full_name: string;
  owner:{
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  }
}

async function getData() {
  const response = await fetch("https://api.github.com/users/EngJao89/repos");

  return response.json();
}

export default async function Home() {
  const data: DataProps[] = await getData();

  return (
    <main>
      <h1 className="text-white">Home</h1>
      <span className="text-white">Seja Bem vindo</span>
      <br/>

      <h3 className="text-white">Repositórios</h3>
      {data.map((item) => (
        <div key={item.id} className="m-4">
          <Card className="bg-zinc-900 bg-opacity-30 backdrop-blur-lg">
            <CardHeader className="inline-flex justify-between text-white">
              <FaFolder  size={14}/>
              {item.name}
            </CardHeader>
            <CardContent>
              <div>
                <h3 className="text-white">{item.owner.login}</h3>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </main>
  );
}
