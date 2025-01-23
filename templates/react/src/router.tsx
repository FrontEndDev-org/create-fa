import { createElement, lazy } from 'react';
import { createHashRouter } from 'react-router';

export const router = createHashRouter(
  [
    {
      element: createElement(lazy(() => import('./App'))),
      children: [
        {
          path: '/',
          element: createElement(lazy(() => import('./pages/_index'))),
        },
        {
          path: '/about',
          element: createElement(lazy(() => import('./pages/about'))),
        },
        {
          path: '*',
          element: <div className="text-red text-10">404</div>,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
