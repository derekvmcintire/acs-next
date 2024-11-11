'use client';

import { Anchor, Button, Divider } from '@mantine/core';
import React from 'react';
import classes from './top-nav.module.css';

interface NavLinksProps {
  orientation: 'horizontal' | 'vertical';
}

const getNavButton = (text: string) => {
  return (
    <Button
      c="#FFF"
      size="md"
      variant="subtle"
      fullWidth
      ml={8}
      justify="space-between"
      leftSection={text}
      rightSection={<span />}
    />
  );
};

export default function NavLinks({ orientation }: NavLinksProps) {
  // Divider orientation is opposite of nav
  const dividerOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
  return (
    <>
      <Anchor underline="never" className={classes.topNavAnchor} href="/">
        {getNavButton('Home')}
      </Anchor>
      <Divider ml={16} orientation={dividerOrientation} />
      <Anchor underline="never" className={classes.topNavAnchor} href="/results/upload">
        {getNavButton('Upload')}
      </Anchor>
      <Divider ml={16} size="sm" orientation={dividerOrientation} />
      <Anchor underline="never" className={classes.topNavAnchor} href="/rider/1">
        {getNavButton('Riders')}
      </Anchor>
      <Divider ml={16} size="sm" orientation={dividerOrientation} />
      <Anchor underline="never" className={classes.topNavAnchor} href="/race/1">
        {getNavButton('Results')}
      </Anchor>
    </>
  );
}
