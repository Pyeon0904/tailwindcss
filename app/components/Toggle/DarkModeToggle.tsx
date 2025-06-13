'use client';

import React, {useEffect, useState} from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(document.documentElement.classList.contains('dark'));
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-blue-500 text-white px-4 py-2 rounded"
      aria-pressed={isDark}
    >
      {isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
    </button>
  );
}
