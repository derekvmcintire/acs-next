import React from 'react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import TopNav from '../TopNav/TopNav';

interface PageWrapHocProps {
  children: React.ReactNode;
}
export default function PageWrapHoc({ children }: PageWrapHocProps) {
  return (
    <>
      <TopNav />
      {children}
      <ColorSchemeToggle />
    </>
  );
}
