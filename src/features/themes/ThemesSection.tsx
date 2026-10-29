import { useState } from 'react';
import { Section } from '../../components/ui/Section';
import { Button } from '../../components/ui/Button';
import { useThemeStore, getThemeColors } from '../../store/themeStore';
import { useCustomThemeStore } from '../../store/customThemeStore';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Palette, Plus, Trash2 } from 'lucide-react';

const presetThemes = [
  { name: 'default', label: 'Classic Dark' },
  { name: 'white', label: 'Classic White' },
  { name: 'ocean', label: 'Ocean Blue' },
  { name: 'forest', label: 'Forest Green' },
  { name: 'sunset', label: 'Warm Sunset' },
];

export function ThemesSection() {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const { currentTheme, setTheme } = useThemeStore();
  const { customThemes, activeCustomThemeId, addCustomTheme, removeCustomTheme, setActiveCustomTheme } = useCustomThemeStore();
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({
    name: '',
    background: 'bg-black/90',
    contentBackground: 'bg-white/5 backdrop-blur-sm',
    text: 'text-white/90',
    accent: 'from-blue-600 to-purple-600',
    border: 'border-white/10',
    ring: 'ring-blue-500',
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addCustomTheme(form);
    setForm({
      name: '',
      background: 'bg-black/90',
      contentBackground: 'bg-white/5 backdrop-blur-sm',
      text: 'text-white/90',
      accent: 'from-blue-600 to-purple-600',
      border: 'border-white/10',
      ring: 'ring-blue-500',
    });
    setShowAdd(false);
  };

  return (
    <Section ref={ref} className={`reveal ${isVisible ? 'visible' : ''}`}>
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
          <Palette size={32} />
          Themes
        </h2>
        <p className="text-gray-400">Choose a preset theme or create your custom theme</p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Preset Themes</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {presetThemes.map((themeOption) => (
            <button
              key={themeOption.name}
              onClick={() => {
                setTheme(themeOption.name);
                setActiveCustomTheme(null);
              }}
              className={`p-4 rounded-xl border transition-all ${
                currentTheme === themeOption.name && !activeCustomThemeId
                  ? 'border-blue-500 ring-2 ring-blue-500/30'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className={`w-full h-16 rounded-lg mb-3 bg-gradient-to-r ${getThemeColors(themeOption.name).accent}`} />
              <p className="text-sm font-medium">{themeOption.label}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Custom Themes</h3>
          <Button onClick={() => setShowAdd(!showAdd)} size="sm">
            <Plus size={16} className="mr-2" />
            Add Custom Theme
          </Button>
        </div>

        {showAdd && (
          <form onSubmit={handleAdd} className="mb-6 p-6 rounded-xl bg-white/5 border border-white/10 space-y-4">
            <div>
              <label className="block text-sm mb-2">Theme Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Background (Tailwind classes)</label>
                <input
                  type="text"
                  value={form.background}
                  onChange={(e) => setForm({ ...form, background: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Content Background</label>
                <input
                  type="text"
                  value={form.contentBackground}
                  onChange={(e) => setForm({ ...form, contentBackground: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-2">Text</label>
                <input
                  type="text"
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Accent (gradient)</label>
                <input
                  type="text"
                  value={form.accent}
                  onChange={(e) => setForm({ ...form, accent: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Border</label>
                <input
                  type="text"
                  value={form.border}
                  onChange={(e) => setForm({ ...form, border: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <Button type="submit">Save Custom Theme</Button>
          </form>
        )}

        {customThemes.length === 0 ? (
          <p className="text-gray-400">No custom themes yet.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {customThemes.map((theme) => (
              <div
                key={theme.id}
                className={`relative p-4 rounded-xl border transition-all ${
                  activeCustomThemeId === theme.id ? 'border-blue-500 ring-2 ring-blue-500/30' : 'border-white/10'
                }`}
              >
                <button
                  onClick={() => {
                    setActiveCustomTheme(theme.id);
                  }}
                  className="w-full text-left"
                >
                  <div className={`w-full h-16 rounded-lg mb-3 bg-gradient-to-r ${theme.accent}`} />
                  <p className="text-sm font-medium">{theme.name}</p>
                </button>
                <button
                  onClick={() => removeCustomTheme(theme.id)}
                  className="absolute top-2 right-2 p-1.5 hover:bg-white/10 rounded-lg"
                  title="Delete"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
