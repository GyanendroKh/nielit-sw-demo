import React, { useEffect, useState } from 'react';

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
        console.log(p.url);
        const id = p.url
          .replace('https://swapi.dev/api/planets/', '')
          .replace('/', '');

        return (
          <li key={id}>
            <a href={`#planets?id=${id}`}>{p.name}</a>
          </li>
        );
      })}
    </ol>
  );
}
