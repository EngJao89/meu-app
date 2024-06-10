
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

  console.log(data);
  return (
    <main>
      <h1>Home</h1>
      <span>Seja Bem vindo</span>
      <br/>

      <h3>Meu Repositórios</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositório:</strong>
          <a>{item.name}</a>
          <br/><br/>
        </div>
      ))}
    </main>
  );
}
