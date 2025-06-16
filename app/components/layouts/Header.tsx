'use client';

import ThemeToggle from "@/app/components/Toggle/ThemeToggle";

export default function Header() {

  return (
    <>
      <header>
        <span className={'relative flex items-center mr-3'}>
              <ThemeToggle/>
            </span>
      </header>
    </>
  );
}