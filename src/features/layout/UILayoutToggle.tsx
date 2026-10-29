import { useUIModeStore } from '../../store/uiModeStore';
import { Layout, ToggleLeft, ToggleRight } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function UILayoutToggle() {
  const { mode, toggleMode, sectionToggles, toggleSection, resetToggles } = useUIModeStore();

  return (
    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Layout size={24} />
          <div>
            <h3 className="text-lg font-semibold">UI Layout</h3>
            <p className="text-sm text-gray-400">Switch between classic and new UI</p>
          </div>
        </div>
        <Button onClick={toggleMode} variant="outline">
          {mode === 'classic' ? (
            <>
              <ToggleRight size={18} className="mr-2" />
              Switch to New UI
            </>
          ) : (
            <>
              <ToggleLeft size={18} className="mr-2" />
              Switch to Classic UI
            </>
          )}
        </Button>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium">Section Visibility</h4>
          <button onClick={resetToggles} className="text-sm text-blue-400 hover:text-blue-300">
            Reset
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {(Object.keys(sectionToggles) as Array<keyof typeof sectionToggles>).map((key) => (
            <label key={key} className="flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer">
              <input
                type="checkbox"
                checked={sectionToggles[key]}
                onChange={() => toggleSection(key)}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm capitalize">{key}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
