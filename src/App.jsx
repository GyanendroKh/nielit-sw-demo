import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import { PlanetListPage } from './pages/planets/PlanetList';
import { PlanetDetailsPage } from './pages/planets/PlanetDetails';
import { RootPage } from './pages/RootPage';

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
            element: <PlanetListPage />,
            loader: planetListLoader
          },
          {
            path: ':id',
            element: <PlanetDetailsPage />,
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
