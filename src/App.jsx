import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import { PlanetList } from './PlanetList';
import { Planet } from './Planet';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ResourseList />
  },
  {
    path: '/planets',
    element: <PlanetList />,
    loader: planetListLoader
  },
  {
    path: '/planets/:id',
    element: <Planet />,
    loader: planetIdLoader
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function ResourseList() {
  return (
    <ul>
      <li>
        <Link to="/planets">Planets</Link>
      </li>
    </ul>
  );
}

function planetListLoader() {
  return fetch('https://swapi.dev/api/planets/').then(res => res.json());
}

function planetIdLoader({ params }) {
  return fetch(`https://swapi.dev/api/planets/${params.id}/`).then(res =>
    res.json()
  );
}
