import { useEffect, useState } from 'react';

export function Planet(props) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${props.id}/`)
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
      .catch(err => {
        console.error(err);
        alert('Error Occurred');
      });
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div>
      <h4>{data.name}</h4>
      <p>Population: {data.population}</p>
      <p>Gravity: {data.gravity}</p>
      <p>Climate: {data.climate}</p>
    </div>
  );
}
