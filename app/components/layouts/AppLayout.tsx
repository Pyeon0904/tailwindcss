import {ReactNode} from 'react';
import Header from '@/app/components/layouts/Header';

export default async function AppLayout({children}: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-2xl h-[100vh]">
      <div className={'px-6 lg:px-8 w-full h-full'}>
        <div className={'w-full min-h-[95vh]'}>
          <Header/>
          <main className={'w-full pt-28'}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}