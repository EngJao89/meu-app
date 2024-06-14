'use client'

import { useEffect, useState } from "react";
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

export default function Repositorios(){
  const [repos, setRepos] = useState<DataProps[]>([]);

  useEffect(() => {
    async function getData(){
      fetch("https://api.github.com/users/EngJao89/repos")
      .then(response => response.json())
      .then((data: DataProps[]) => {
        setTimeout(() => {
          setRepos(data);
        }, 2000)
      })
    }

    getData();
  })

  return (
    <div>
      <h1 className="ml-5 text-white">Página de Repositórios</h1>

      {repos.map((item) => (
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
    </div>
  )
}