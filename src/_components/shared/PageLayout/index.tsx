'use client';

import { Container } from '@mantine/core';
import React from 'react';
import { ColorSchemeToggle } from '../ColorSchemeToggle';
import TopNav from '../TopNav';

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
