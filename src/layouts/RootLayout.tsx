import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import { portfolioData } from '../data/portfolio';
import { scrollToSection } from '../lib/navigation';
import { useThemeStore } from '../store/themeStore';

function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Full Stack Developer',
      '/about': 'Who I am',
      '/experience': 'Experience',
      '/digital-resume': 'Digital Résumé',
      '/services': 'Services',
      '/contact': 'Contact',
      '/works': 'Works',
    };
    document.title = `${portfolioData.person.name} — ${titles[pathname] ?? 'Page not found'}`;

    if (hash) {
      scrollToSection(decodeURIComponent(hash.slice(1)));
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  return null;
}

export default function RootLayout() {
  const { currentTheme } = useThemeStore();

  return (
    <div className="site-shell" data-theme={currentTheme}>
      <RouteScrollManager />
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
