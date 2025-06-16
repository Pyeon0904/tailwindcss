import type {Metadata} from 'next';
import React, {ReactNode} from 'react';

export const metadata: Metadata = {
  title: ``,
  description: '',
};

export default function Layout({children}: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
