import { Link, useLoaderData } from 'react-router-dom';

export function PlanetListPage() {
  const planets = useLoaderData();

  return (
    <div>
      <h1>Planet List</h1>
      <ol>
        {planets.results.map(p => {
          const id = p.url
            .replace('https://swapi.dev/api/planets/', '')
            .replace('/', '');

          return (
            <li key={id}>
              <Link to={`/planets/${id}`}>{p.name}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
