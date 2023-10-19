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
    element: <PlanetList />
  },
  {
    path: '/planets/:id',
    element: <Planet />
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
