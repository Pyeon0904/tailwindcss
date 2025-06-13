import {ReactNode} from "react";
import Header from "@/app/components/layouts/Header";

export default async function AppLayout({children}: { children: ReactNode }) {

  return (
    <div className='max-w-screen-2xl h-screen mx-auto'>
      <Header/>
      <main className='w-full'>
        {children}
      </main>
    </div>
  );
}