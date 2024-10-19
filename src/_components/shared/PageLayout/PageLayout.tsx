import React from 'react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import TopNav from '../TopNav/TopNav';

interface PageLayoutProps {
  children: React.ReactNode;
}
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <TopNav />
      {children}
      <ColorSchemeToggle />
    </>
  );
}
