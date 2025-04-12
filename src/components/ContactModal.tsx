import { X } from 'lucide-react';
import { useThemeStore, getThemeColors } from '../store/themeStore';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className={`${theme.background} rounded-xl p-8 w-full max-w-2xl mx-4 relative z-10`}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">FROM CONCEPT TO CREATION<br />LET'S MAKE IT HAPPEN!</h2>
          <p className="text-gray-400">
            I'm available for full-time roles & freelance projects.<br />
            I thrive on crafting dynamic web applications and deliver seamless user experiences
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/5 border ${theme.border} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 bg-white/5 border ${theme.border} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;
