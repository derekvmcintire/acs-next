'use client';

import { GoSearch } from 'react-icons/go';
import { Divider, Flex, Group, Text, TextInput, Title } from '@mantine/core';
import { ACS_COLOR_BLUE, ACS_COLOR_ORANGE } from '@/src/global-constants';
import classes from './top-nav.module.css';

export const TOP_NAV_TEST_ID = 'top-nav';

export default function TopNav() {
  const icon = <GoSearch />;
  return (
    <div data-testid={TOP_NAV_TEST_ID}>
      <Flex justify="center" align="center" pt={10}>
        <Group mr={20}>
          <Text>Home</Text>
          <Divider orientation="vertical" />
          <Text>Statistics</Text>
          <Divider size="sm" orientation="vertical" />
          <Text>Results</Text>
          <Divider size="sm" orientation="vertical" />
          <Text>Calendar</Text>
          <Divider size="sm" orientation="vertical" />
          <Text>Series</Text>
          <Divider size="sm" orientation="vertical" />
          <Text>Rankings</Text>
        </Group>
        <TextInput leftSectionPointerEvents="none" leftSection={icon} placeholder="search" />
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
    </div>
  );
}
