import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { primaryLinks, themeOptions } from '../constants/site';
import { useThemeStore } from '../store/themeStore';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const themePickerRef = useRef<HTMLDivElement>(null);
  const { currentTheme, setTheme } = useThemeStore();
  const location = useLocation();

  useEffect(() => {
    if (!themeMenuOpen) return;

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !themePickerRef.current?.contains(event.target)) {
        setThemeMenuOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setThemeMenuOpen(false);
        themePickerRef.current
          ?.querySelector<HTMLButtonElement>('.theme-picker-trigger')
          ?.focus({ preventScroll: true });
      }
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [themeMenuOpen]);

  useEffect(() => {
    if (!themeMenuOpen) return;
    const frame = window.requestAnimationFrame(() => {
      themePickerRef.current
        ?.querySelector<HTMLButtonElement>('.theme-option')
        ?.focus({ preventScroll: true });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [themeMenuOpen]);

  const closeMenus = () => {
    setMenuOpen(false);
    setThemeMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="page-container nav-layout">
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
          <div className={`nav-controls ${menuOpen ? 'is-open' : ''}`}>
            <nav className="primary-navigation" id="primary-navigation" aria-label="Primary navigation">
              {primaryLinks.map((item) => {
                const [pathname, hash] = item.href.split('#');
                const isActive = location.pathname === pathname
                  && (!hash || location.hash === `#${hash}`);
                return (
                  <Link
                    className={isActive ? 'is-active' : undefined}
                    to={item.href}
                    key={item.href}
                    onClick={closeMenus}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="nav-actions">
            <div className="theme-picker" ref={themePickerRef}>
              <button
                className="theme-picker-trigger"
                type="button"
                aria-label="Choose color theme"
                aria-haspopup="menu"
                aria-expanded={themeMenuOpen}
                onClick={() => setThemeMenuOpen((open) => !open)}
              >
                <span
                  className="theme-current-swatch"
                  style={{ backgroundColor: themeOptions.find((option) => option.value === currentTheme)?.color }}
                  aria-hidden="true"
                />
                <ChevronDown size={14} aria-hidden="true" />
              </button>
              <div
                className={`theme-menu${themeMenuOpen ? ' is-open' : ''}`}
                role="menu"
                aria-label="Color themes"
                aria-hidden={!themeMenuOpen}
                style={{ '--theme-current-color': themeOptions.find((option) => option.value === currentTheme)?.color } as CSSProperties}
              >
                {themeOptions.filter((option) => option.value !== currentTheme).map((option) => (
                  <button
                    key={option.value}
                    className="theme-option"
                    style={{ backgroundColor: option.color }}
                    type="button"
                    role="menuitem"
                    tabIndex={themeMenuOpen ? 0 : -1}
                    data-label={option.label}
                    aria-label={option.label}
                    title={option.label}
                    onKeyDown={(event) => {
                      if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
                      event.preventDefault();
                      const options = Array.from(
                        themePickerRef.current?.querySelectorAll<HTMLButtonElement>('.theme-option') ?? [],
                      );
                      const currentIndex = options.indexOf(event.currentTarget);
                      const nextIndex = event.key === 'Home'
                        ? 0
                        : event.key === 'End'
                          ? options.length - 1
                          : (currentIndex + (event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length;
                      options[nextIndex]?.focus({ preventScroll: true });
                    }}
                    onClick={() => {
                      setTheme(option.value);
                      setThemeMenuOpen(false);
                      themePickerRef.current
                        ?.querySelector<HTMLButtonElement>('.theme-picker-trigger')
                        ?.focus({ preventScroll: true });
                    }}
                  >
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
