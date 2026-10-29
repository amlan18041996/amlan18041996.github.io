import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CustomTheme {
  id: string;
  name: string;
  background: string;
  contentBackground: string;
  text: string;
  accent: string;
  border: string;
  ring: string;
}

interface CustomThemeState {
  customThemes: CustomTheme[];
  activeCustomThemeId: string | null;
  addCustomTheme: (theme: Omit<CustomTheme, 'id'>) => string;
  updateCustomTheme: (id: string, theme: Partial<CustomTheme>) => void;
  removeCustomTheme: (id: string) => void;
  setActiveCustomTheme: (id: string | null) => void;
}

function generateId() {
  return `ct-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export const useCustomThemeStore = create<CustomThemeState>()(
  persist(
    (set) => ({
      customThemes: [],
      activeCustomThemeId: null,
      addCustomTheme: (theme) => {
        const id = generateId();
        set((state) => ({ customThemes: [...state.customThemes, { ...theme, id }] }));
        return id;
      },
      updateCustomTheme: (id, theme) =>
        set((state) => ({
          customThemes: state.customThemes.map((t) => (t.id === id ? { ...t, ...theme } : t)),
        })),
      removeCustomTheme: (id) =>
        set((state) => ({
          customThemes: state.customThemes.filter((t) => t.id !== id),
          activeCustomThemeId: state.activeCustomThemeId === id ? null : state.activeCustomThemeId,
        })),
      setActiveCustomTheme: (id) => set({ activeCustomThemeId: id }),
    }),
    {
      name: 'custom-themes-storage',
    }
  )
);

export function getCustomThemeColors(theme?: CustomTheme | null) {
  if (!theme) return null;
  return {
    background: theme.background,
    contentBackground: theme.contentBackground,
    text: theme.text,
    accent: theme.accent,
    border: theme.border,
    ring: theme.ring,
  };
}
