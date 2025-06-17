import React, { ReactNode } from 'react';
// import Image from 'next/image';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-washi text-black">
      <header className="p-4 border-b border-black/20">
        <h1 className="text-2xl font-mincho text-center text-black">Nagisa Hara</h1>
      </header>
      
      <main className="flex-grow p-4">
        {children}
      </main>
      
      <footer className="p-4 text-center text-sm text-black/70 border-t border-black/20">
        <p>© {new Date().getFullYear()} Nagisa Hara</p>
      </footer>
    </div>
  );
};

export default Layout; 