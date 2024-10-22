import React from 'react';
import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import TopNav from '../TopNav/TopNav';

interface PageLayoutProps {
  children: React.ReactNode;
}
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container>
      <TopNav />
      {children}
      <ColorSchemeToggle />
    </Container>
  );
}
