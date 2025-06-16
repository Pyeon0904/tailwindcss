'use client';

import {useTheme} from 'next-themes';
import {useEffect, useState} from 'react';

export default function ThemeToggle() {
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="relative flex items-center space-x-2">
      <span className="text-[10px] md:text-xs text-gray-500 dark:text-white">Light</span>
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label="테마 전환"
        className={`relative inline-flex h-3 w-9 md:h-4 md:w-10 items-center rounded-full transition-colors ${
          isDark ? 'bg-green-500' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-2 w-2 md:h-3 md:w-3 transform rounded-full bg-white transition-transform ${
            isDark ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className="text-[10px] md:text-xs text-gray-500 dark:text-white">Dark</span>
    </div>
  );
}
