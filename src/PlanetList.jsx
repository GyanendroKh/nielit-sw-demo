import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export function PlanetList() {
  const planets = useLoaderData();

  return (
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
  );
}
