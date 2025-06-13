'use client';

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function Header() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <>
      <header>
        <div>
          {!mounted ? (
            <span className="w-6 h-6 text-white">dark</span>
          ) : (
            <button onClick={toggleTheme} className="w-6 h-6 text-black dark:text-white" title="다크모드 토글">
              {theme === 'dark' ? 'dark' : 'light'}
            </button>
          )}
        </div>
      </header>
    </>
  );
}