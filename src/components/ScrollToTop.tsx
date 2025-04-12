import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useThemeStore, getThemeColors } from '../store/themeStore';

function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-8 right-8 z-50 p-3 rounded-full
                bg-gradient-to-r ${theme.accent}
                text-white shadow-md hover:shadow-blue-500/20
                transition-all duration-300 transform hover:scale-110
            `}
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
