import { Link, useLoaderData } from 'react-router-dom';
import { getPageNoFromUrl } from '../../utils';

export function PlanetListPage() {
  const planets = useLoaderData();
  const prevPage = getPageNoFromUrl(planets.previous);
  const nextPage = getPageNoFromUrl(planets.next);

  return (
    <div>
      <h1>Planet List</h1>
      <div>
        {planets.results.map(p => {
          const id = p.url
            .replace('https://swapi.dev/api/planets/', '')
            .replace('/', '');

          return (
            <p key={id}>
              <Link to={`/planets/${id}`}>
                {id} - {p.name}
              </Link>
            </p>
          );
        })}
      </div>
      <br />
      <div>
        {prevPage && <Link to={`/planets?page=${prevPage}`}>Prev</Link>}

        <br />

        {nextPage && <Link to={`/planets?page=${nextPage}`}>Next</Link>}
      </div>
    </div>
  );
}
