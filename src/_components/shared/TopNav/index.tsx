'use client';

import {
  Anchor,
  Burger,
  Button,
  Divider,
  Flex,
  Group,
  Popover,
  ScrollArea,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import { ACS_COLOR_BLUE, ACS_COLOR_ORANGE } from '@/src/global-constants';
import Search from './Search';
import classes from './top-nav.module.css';

export const TOP_NAV_TEST_ID = 'top-nav';

export default function TopNav() {
  const [opened, setOpened] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

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

  const getNavLinks = (orientation: 'horizontal' | 'vertical' = 'vertical') => {
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
  };

  return (
    <div data-testid={TOP_NAV_TEST_ID} className={classes.topNavContainer}>
      <Flex justify="space-between" align="center" pt={10}>
        {isMobile ? (
          <>
            <Popover position="bottom">
              <Popover.Target>
                <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
              </Popover.Target>
              <Popover.Dropdown>
                <ScrollArea w={200} scrollbars="y">
                  <Stack>{getNavLinks('vertical')}</Stack>
                </ScrollArea>
              </Popover.Dropdown>
            </Popover>
          </>
        ) : (
          <Flex mr={20}>{getNavLinks('horizontal')}</Flex>
        )}
        <Group>
          <Search />
          <Title className={classes.title} ta="right">
            <Text
              inherit
              variant="gradient"
              component="span"
              gradient={{ from: ACS_COLOR_BLUE, to: ACS_COLOR_ORANGE }}
            >
              ACS
            </Text>
          </Title>
        </Group>
      </Flex>
    </div>
  );
}
