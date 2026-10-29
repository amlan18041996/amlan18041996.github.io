import { create } from 'zustand';

export type UIMode = 'classic' | 'new';

interface SectionToggles {
  hero: boolean;
  about: boolean;
  experience: boolean;
  projects: boolean;
  skills: boolean;
  awards: boolean;
  principles: boolean;
  contact: boolean;
  themes: boolean;
}

interface UIModeState {
  mode: UIMode;
  sectionToggles: SectionToggles;
  setMode: (mode: UIMode) => void;
  toggleMode: () => void;
  setSectionToggle: (key: keyof SectionToggles, value: boolean) => void;
  toggleSection: (key: keyof SectionToggles) => void;
  resetToggles: () => void;
}

const defaultToggles: SectionToggles = {
  hero: true,
  about: true,
  experience: true,
  projects: true,
  skills: true,
  awards: true,
  principles: true,
  contact: true,
  themes: true,
};

export const useUIModeStore = create<UIModeState>((set) => ({
  mode: 'new',
  sectionToggles: defaultToggles,
  setMode: (mode) => set({ mode }),
  toggleMode: () => set((state) => ({ mode: state.mode === 'classic' ? 'new' : 'classic' })),
  setSectionToggle: (key, value) =>
    set((state) => ({
      sectionToggles: { ...state.sectionToggles, [key]: value },
    })),
  toggleSection: (key) =>
    set((state) => ({
      sectionToggles: { ...state.sectionToggles, [key]: !state.sectionToggles[key] },
    })),
  resetToggles: () => set({ sectionToggles: defaultToggles }),
}));
