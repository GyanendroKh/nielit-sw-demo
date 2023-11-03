import { Link, Outlet } from 'react-router-dom';

export const RootPage = () => {
  return (
    <div className="root-container">
      {/* Side Bar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h1>Star Wars</h1>
        </div>
        <div className="sidebar-content">
          <ul>
            <li>
              <Link to="/planets">Planets</Link>
            </li>

            <li>
              <Link to="/people">People</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};
