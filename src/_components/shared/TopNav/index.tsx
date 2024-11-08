'use client';

import { Anchor, Container, Divider, Flex, Group, Text, Title } from '@mantine/core';
import { ACS_COLOR_BLUE, ACS_COLOR_ORANGE } from '@/src/global-constants';
import Search from './Search';
import classes from './top-nav.module.css';

export const TOP_NAV_TEST_ID = 'top-nav';

export default function TopNav() {
  return (
    <Container data-testid={TOP_NAV_TEST_ID}>
      <Flex justify="center" align="center" pt={10}>
        <Group mr={20}>
          <Anchor className={classes.topNavAnchor} href="/">
            Home
          </Anchor>
          <Divider orientation="vertical" />
          <Anchor className={classes.topNavAnchor} href="/results/upload">
            Upload
          </Anchor>
          <Divider size="sm" orientation="vertical" />
          <Anchor className={classes.topNavAnchor} href="/rider/1">
            Riders
          </Anchor>
          <Divider size="sm" orientation="vertical" />
          <Anchor className={classes.topNavAnchor} href="/race/1">
            Results
          </Anchor>
        </Group>
        <Search />
        <Title className={classes.title} ta="right" pl={20} pr={40}>
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: ACS_COLOR_BLUE, to: ACS_COLOR_ORANGE }}
          >
            ACS
          </Text>
        </Title>
      </Flex>
    </Container>
  );
}
