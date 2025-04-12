import { create } from 'zustand';

interface ThemeState {
  currentTheme: string;
  isDarkMode: boolean;
  setTheme: (theme: string) => void;
  toggleDarkMode: () => void;
}

const themes = {
  default: {
    background: 'bg-black/90',
    contentBackground: 'bg-neutral-100/5 hover:bg-stone-100/10 backdrop-blur-sm',
    text: 'text-white/90',
    accent: 'from-indigo-400 via-pink-500 to-purple-500',
    border: 'border-black/90',
    ring: 'ring-black/90'
  },
  white: {
    background: 'bg-white/90',
    contentBackground: 'bg-gradient-to-r from-gray-50 via-gray-100 to-gray-300 backdrop-blur-sm',
    text: 'text-black/50',
    accent: 'from-pink-300 via-purple-300 to-indigo-400',
    border: 'border-white',
    ring: 'ring-white'
  },
  ocean: {
    background: 'bg-slate-900',
    contentBackground: 'bg-white/5 backdrop-blur-sm',
    text: 'text-cyan-50',
    accent: 'from-cyan-600 to-blue-600',
    border: 'border-slate-900',
    ring: 'ring-slate-900'
  },
  forest: {
    background: 'bg-emerald-950',
    contentBackground: 'bg-white/5 backdrop-blur-sm',
    text: 'text-emerald-50',
    accent: 'from-emerald-600 to-teal-600',
    border: 'border-emerald-950',
    ring: 'ring-emerald-950'
  },
  sunset: {
    background: 'bg-orange-950',
    contentBackground: 'bg-white/5 backdrop-blur-sm',
    text: 'text-orange-50',
    accent: 'from-orange-600 to-red-600',
    border: 'border-orange-950',
    ring: 'ring-orange-950'
  }
};

export const useThemeStore = create<ThemeState>((set) => ({
  currentTheme: 'default',
  isDarkMode: true,
  setTheme: (theme) => set({ currentTheme: theme }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode }))
}));

export const getThemeColors = (themeName: string) => {
  return themes[themeName as keyof typeof themes] || themes.default;
};
