'use client';

import { Stack } from '@mantine/core';
import React from 'react';
import { ColorSchemeToggle } from '../ColorSchemeToggle';
import TopNav from '../TopNav';
import classes from './page-layout.module.css';

interface PageLayoutProps {
  children: React.ReactNode;
}
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Stack className={classes.pageLayout}>
      <TopNav />
      {children}
      <ColorSchemeToggle />
    </Stack>
  );
}
