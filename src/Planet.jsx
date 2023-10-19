import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Planet() {
  const [data, setData] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/${params.id}/`)
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
