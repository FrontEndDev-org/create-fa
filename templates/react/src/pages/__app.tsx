import { NavLink, Outlet, useNavigate } from 'react-router';

const routes = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About',
  },
];

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-4">
      <nav className="flex gap-4 flex-row border-b border-gray-300 dark:border-gray-500 pb-4 mb-4">
        {routes.map((route) => (
          <NavLink
            key={route.path}
            className={({ isActive }) =>
              isActive
                ? 'px-2 py-1 rounded bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-900'
                : 'px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-500'
            }
            to={route.path}
          >
            {route.title}
          </NavLink>
        ))}
        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
        <a
          href="javascript:;"
          className="px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-500"
          onClick={() => {
            navigate(`/404-${Math.random()}`);
          }}
        >
          404
        </a>
      </nav>
      <Outlet />
    </div>
  );
}
