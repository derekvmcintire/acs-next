'use client';

import { Burger, Popover, ScrollArea } from '@mantine/core';
import React, { useState } from 'react';
import NavLinks from './NavLinks';

export default function HamburgerNav() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Popover position="bottom">
        <Popover.Target>
          <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
        </Popover.Target>
        <Popover.Dropdown>
          <ScrollArea w={200} scrollbars="y">
            <NavLinks isVertical />
          </ScrollArea>
        </Popover.Dropdown>
      </Popover>
    </>
  );
}
