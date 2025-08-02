'use client'

import Header from './Header';
import Intro from './Intro';
import Menu from './Menu';
import Footer from './Footer';

export default function RootLayoutShell({ children }: { children: React.ReactNode }) {

  return (
    <div className='flex flex-col'>
      <div className="flex flex-col md:flex-row justify-center items-stretch">
        <aside className="flex flex-col 
                        px-8 py-2 pr-6 pb-0
                        min-w-1/3 md:px-14 md:py-14 md:pb-14 md:gap-8
                        lg:min-w-1/4
                        gap-2 justify-start">
          <Header />
          <Intro />
          <div className='hidden md:block'>
            <Menu />
          </div>
        </aside>
        <main className="flex flex-col py-6 px-4 
                       md:px-6 items-stretch">
          {children}
        </main>
      </div>
      <footer className="flex p-6 justify-center">
        <Footer />
      </footer>
    </div>
  );
}