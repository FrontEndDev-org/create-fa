import { NavLink, Outlet } from 'react-router';
import '@unocss/reset/tailwind-compat.css';
import 'virtual:svg-icons-register';

const routes = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/404',
    title: '404',
  },
];

export default function App() {
  return (
    <div className="flex flex-col p-4">
      <nav className="flex gap-4 flex-row border-b border-gray-300 dark:border-gray-500 pb-4 mb-4">
        {routes.map(route => (
          <NavLink
            key={route.path}
            className={({ isActive }) =>
              isActive
                ? 'px-2 py-1 rounded bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-900'
                : 'px-2 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-500'}
            to={route.path}
          >
            {route.title}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
