'use client';

import { Flex, Text } from '@mantine/core';
import React from 'react';
import VerifiedHeadersPopover from './VerifiedHeadersPopover';
import classes from './instructions.module.css';

export default function RaceInstructions() {
  return (
    <>
      <Flex mb={16} align="center" justify="center" gap="md">
        <Text size="xl" fw="700">
          Race Upload Form
        </Text>
      </Flex>
      <Flex align="center" justify="center">
        <Text size="sm" className={classes.textFlex}>
          You must select or create a race before uploading results.
        </Text>
      </Flex>
      <Flex align="center" justify="center">
        <VerifiedHeadersPopover />
      </Flex>
    </>
  );
}
