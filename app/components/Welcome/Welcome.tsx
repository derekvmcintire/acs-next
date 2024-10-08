'use client';

import { GoSearch } from 'react-icons/go';
import { Divider, Flex, Group, Text, TextInput, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export default function Welcome() {
  const icon = <GoSearch />;
  return (
    <Flex justify="right" align="center" pt={10}>
      <Group mr={20}>
        <Text>Home</Text>
        <Divider orientation="vertical" />
        <Text>Statistics</Text>
        <Divider size="sm" orientation="vertical" />
        <Text>Results</Text>
        <Divider size="md" orientation="vertical" />
        <Text>Calendar</Text>
        <Divider size="lg" orientation="vertical" />
        <Text>Series</Text>
        <Divider size="xl" orientation="vertical" />
        <Text>Rankings</Text>
      </Group>
      <TextInput leftSectionPointerEvents="none" leftSection={icon} placeholder="search" />
      <Title className={classes.title} ta="right" pl={20} pr={40}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          ACS
        </Text>
      </Title>
    </Flex>
  );
}
