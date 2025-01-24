import { Routes } from '@generouted/react-router/lazy';
import '@unocss/reset/tailwind-compat.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'virtual:svg-sprite-register';
import './main.scss';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>,
);
