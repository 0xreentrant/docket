export default async function Home(): Promise<JSX.Element> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const customers = await res.json();

  return (
    <div>
      <h1>Customers</h1>
      {customers.map(({ id, name, email }) => {
        return (
          <div key={id}>
            {id} {name} {email}
          </div>
        );
      })}
    </div>
  );
}
