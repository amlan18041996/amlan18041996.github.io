import { BrowserRouter, Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import RootLayout from './layouts/RootLayout';
import NotFoundPage from './pages/NotFoundPage';
import PortfolioPage from './pages/PortfolioPage';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const DigitalResumePage = lazy(() => import('./pages/DigitalResumePage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const WorksPage = lazy(() => import('./pages/WorksPage'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/about" element={<Suspense fallback={<div className="page-loading">Loading page…</div>}><AboutPage /></Suspense>} />
          <Route path="/experience" element={<Suspense fallback={<div className="page-loading">Loading page…</div>}><ExperiencePage /></Suspense>} />
          <Route path="/digital-resume" element={<Suspense fallback={<div className="page-loading">Loading page…</div>}><DigitalResumePage /></Suspense>} />
          <Route path="/services" element={<Suspense fallback={<div className="page-loading">Loading page…</div>}><ServicesPage /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<div className="page-loading">Loading page…</div>}><ContactPage /></Suspense>} />
          <Route path="/works" element={<Suspense fallback={<div className="page-loading">Loading page…</div>}><WorksPage /></Suspense>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
