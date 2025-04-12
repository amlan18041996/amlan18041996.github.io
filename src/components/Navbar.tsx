import React from 'react';
import { NavLink } from 'react-router';
import { 
  Code2, Grip, Home, User, Briefcase, BookOpen, 
  Mail, Image, Settings, X, Palette, Languages, MessageSquare 
} from 'lucide-react';
import { useThemeStore, getThemeColors } from '../store/themeStore';
import CustomRadio from './CustomRadio';
import ContactModal from './ContactModal';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);
  const { currentTheme, setTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);

  const navItems = [
    { path: '/', icon: <Home size={24} />, label: 'Home' },
    { path: '/story', icon: <User size={24} />, label: 'My Story' },
    { path: '/projects', icon: <Briefcase size={24} />, label: 'Projects' },
    { path: '/skills', icon: <BookOpen size={24} />, label: 'Skills' },
    { path: '/blogs', icon: <BookOpen size={24} />, label: 'Blogs' },
    { path: '/guestbook', icon: <MessageSquare size={24} />, label: 'Guestbook' },
    { path: '/galleria', icon: <Image size={24} />, label: 'Galleria' },
    { 
      icon: <Mail size={24} />, 
      label: 'Contact',
      onClick: () => {
        setShowContact(true);
        setIsOpen(false);
      }
    },
    { 
      icon: <Settings size={24} />, 
      label: 'Settings',
      onClick: () => {
        setShowSettings(true);
        setIsOpen(false);
      }
    }
  ];

  const themes = [
    { name: 'default', label: 'Classic Dark' },
    { name: 'white', label: 'Classic White' },
    { name: 'ocean', label: 'Ocean Blue' },
    { name: 'forest', label: 'Forest Green' },
    { name: 'sunset', label: 'Warm Sunset' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 ${theme.background}/80 backdrop-blur-lg border-b border-white/10`}>
        <div className="container px-4 lg:px-40">
          <div className="flex items-center justify-between h-16">
            <NavLink to="/" className="flex items-center space-x-2 text-xl font-bold">
              <Code2 className={`${theme.text}`} />
              <span>Amlan Sengupta</span>
            </NavLink>
            <div className="w-[42px]"></div>
          </div>
        </div>
      </nav>

      {/* Fixed Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-14 h-14 rounded-full bg-gradient-to-r ${theme.accent} flex items-center justify-center text-white shadow-md hover:shadow-blue-500/20 transition-all duration-300`}
      >
        {isOpen ? (
          <X size={24} className="transition-transform duration-300 rotate-90" />
        ) : (
          <Grip size={24} className="transition-transform duration-300" />
        )}
      </button>

      {/* Navigation Menu Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-end justify-center">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className={`${theme.background}/95 backdrop-blur-xl border-t border-white/10 p-8 rounded-t-xl relative z-10 w-full max-w-2xl mb-28`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {navItems.map((item, index) => (
                item.path ? (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `
                      flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300
                      ${isActive 
                        ? `bg-gradient-to-br ${theme.accent}/20 border border-white/10 ${theme.text}` 
                        : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-blue-400'
                      }
                    `}
                  >
                    {item.icon}
                    <span className="mt-2 font-medium text-sm">{item.label}</span>
                  </NavLink>
                ) : (
                  <button
                    key={index}
                    onClick={item.onClick}
                    className="flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-blue-400"
                  >
                    {item.icon}
                    <span className="mt-2 font-medium text-sm">{item.label}</span>
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowSettings(false)}
          ></div>
          <div className={`${theme.background} rounded-xl p-8 w-full max-w-2xl mx-4 relative z-10`}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Settings</h2>
              <button 
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-white/10 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-8">
              {/* Theme Selection */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Palette size={20} className="mr-2" /> Theme
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {themes.map((themeOption) => (
                    <CustomRadio
                      key={themeOption.name}
                      id={`theme-${themeOption.name}`}
                      name="theme"
                      value={themeOption.name}
                      checked={currentTheme === themeOption.name}
                      onChange={(e) => setTheme(e.target.value)}
                      label={themeOption.label}
                      preview={
                        <div className={`w-full h-20 rounded-lg bg-gradient-to-r ${getThemeColors(themeOption.name).accent}`} />
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Internationalization */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Languages size={20} className="mr-2" /> Language
                </h3>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </>
  );
}

export default Navbar;