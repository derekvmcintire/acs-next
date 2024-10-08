'use client';
import { Text, TextInput, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export default function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="right" pr={40}>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your email"
        placeholder="Your email"
      />
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          ACS
        </Text>
      </Title>
    </>
  );
}
