'use client';

import { GoSearch } from 'react-icons/go';
import { Divider, Flex, Group, Text, TextInput, Title } from '@mantine/core';
import classes from './styles/top-nav.module.css';

export default function TopNav() {
  const icon = <GoSearch />;
  return (
    <Flex justify="right" align="center" pt={10}>
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
        <Text inherit variant="gradient" component="span" gradient={{ from: 'blue', to: 'orange' }}>
          ACS
        </Text>
      </Title>
    </Flex>
  );
}
