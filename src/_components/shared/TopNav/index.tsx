'use client';

import { Flex, Group, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ACS_COLOR_BLUE, ACS_COLOR_ORANGE } from '@/src/global-constants';
import HamburgerNav from './HamburgerNav';
import NavLinks from './NavLinks';
import Search from './Search';
import classes from './top-nav.module.css';

export const TOP_NAV_TEST_ID = 'top-nav';

export default function TopNav() {
  const isMobile = useMediaQuery('(max-width: 950px)');

  return (
    <div data-testid={TOP_NAV_TEST_ID} className={classes.topNavContainer}>
      <Flex justify="space-between" align="center" pt={10}>
        {isMobile ? <HamburgerNav /> : <NavLinks />}
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
