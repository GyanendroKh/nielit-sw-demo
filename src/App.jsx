import { useEffect, useState } from 'react';
import { PlanetList } from './PlanetList';
import { Planet } from './Planet';

export default function App() {
  const [url, setUrl] = useState(window.location.hash.substring(1));

  useEffect(() => {
    window.addEventListener('hashchange', e => {
      const url = new URL(e.newURL);

      setUrl(url.hash.substring(1));
    });
  }, []);

  if (url === '') {
    return (
      <>
        <a href="#planets">Planets</a>
      </>
    );
  }

  if (url.startsWith('planets')) {
    const url2 = new URL(url, 'http://localhost');
    const id = url2.searchParams.get('id');

    if (id) {
      return <Planet id={id} />;
    }

    return <PlanetList />;
  }

  return null;
}
