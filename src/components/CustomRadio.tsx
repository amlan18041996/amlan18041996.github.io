import React from 'react';
import { Check } from 'lucide-react';
import { getThemeColors, useThemeStore } from '../store/themeStore';

interface CustomRadioProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  preview: React.ReactNode;
}

function CustomRadio({ id, name, value, checked, onChange, label, preview }: CustomRadioProps) {
  const { currentTheme } = useThemeStore();
  const theme = getThemeColors(currentTheme);
  return (
    <label
      htmlFor={id}
      className={`
        relative flex flex-col items-center p-4 rounded-lg
        transition-all duration-300
        ${checked 
          ? 'ring-2 ring-blue-500 border-2 border-blue-500' 
          : 'border-2 border-transparent hover:bg-white/5'
        }
      `}
    >
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {checked && (
        <div className={`absolute -top-3 -left-3 size-8 bg-blue-500 ring-4 ${theme.ring} ring-inset ring-offset-0 rounded-full flex items-center justify-center`}>
          <Check size={14} className="text-white" />
        </div>
      )}
      {preview}
      <span className="text-sm font-medium mt-2">{label}</span>
    </label>
  );
}

export default CustomRadio;
