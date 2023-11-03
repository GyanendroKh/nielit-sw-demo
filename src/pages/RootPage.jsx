import { Link, Outlet, useNavigation } from 'react-router-dom';

export const RootPage = () => {
  const navigation = useNavigation();

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
        {navigation.state === 'loading' ? (
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span className="loader"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};
