interface PageDetailsProps{
  params: {
    id: string;
  }
}

async function getData(id: string){
  console.log(id);

  const response = await fetch("https://api.github.com/users/EngJao89/repos")
  return response.json();
}

export default async function Repositorios({ params }: PageDetailsProps){
  const data = await getData(params.id);

  return (
    <div>
      <h1 className="ml-5 text-white">Página detalehs do Repositório {params.id}</h1>
    </div>
  )
}
