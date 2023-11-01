import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet
} from 'react-router-dom';
import { PlanetList } from './PlanetList';
import { Planet } from './Planet';
import { RootPage } from './RootPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: 'planets',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <PlanetList />,
            loader: planetListLoader
          },
          {
            path: ':id',
            element: <Planet />,
            loader: planetIdLoader
          }
        ]
      }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function planetListLoader() {
  return fetch('https://swapi.dev/api/planets/').then(res => res.json());
}

function planetIdLoader({ params }) {
  return fetch(`https://swapi.dev/api/planets/${params.id}/`).then(res =>
    res.json()
  );
}
