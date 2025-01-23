import '@unocss/reset/tailwind-compat.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import 'virtual:svg-sprite-register';
import './main.scss';
import { router } from './router';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
