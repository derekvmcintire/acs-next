import React from 'react';
import { Flex } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import TopNav from '../TopNav/TopNav';

interface PageLayoutProps {
  children: React.ReactNode;
}
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <TopNav />
      <Flex justify="center">{children}</Flex>
      <ColorSchemeToggle />
    </div>
  );
}
