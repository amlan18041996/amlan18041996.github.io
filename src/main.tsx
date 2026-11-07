import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/animations.css';
import './styles/portfolio.css';
import './styles/resume.css';

const redirectedRoute = window.location.search.slice(1);
if (window.location.pathname === '/' && redirectedRoute.startsWith('/')) {
  const [pathname, ...searchParts] = redirectedRoute.split('&');
  const search = searchParts.length ? `?${searchParts.join('&').replace(/~and~/g, '&')}` : '';
  window.history.replaceState(null, '', `${pathname.replace(/~and~/g, '&')}${search}${window.location.hash}`);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
