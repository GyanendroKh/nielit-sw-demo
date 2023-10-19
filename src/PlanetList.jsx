import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function PlanetList() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then(res => res.json())
      .then(data => {
        setPlanets(data.results);
      })
      .catch(err => {
        console.error(err);
        alert('Error Occurred');
      });
  }, []);

  return (
    <ol>
      {planets.map(p => {
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
