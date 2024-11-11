'use client';

import { Burger, Popover, ScrollArea, Stack } from '@mantine/core';
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
            <Stack>
              <NavLinks orientation="vertical" />
            </Stack>
          </ScrollArea>
        </Popover.Dropdown>
      </Popover>
    </>
  );
}
