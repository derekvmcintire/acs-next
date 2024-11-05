'use client';

import { Flex, Text } from '@mantine/core';
import React from 'react';
import VerifiedHeadersPopover from './VerifiedHeadersPopover';
import classes from './instructions.module.css';

export default function ResultInstructions() {
  return (
    <>
      <Flex mb={16} align="center" justify="center" gap="md">
        <Text size="xl" fw="700">
          Results Upload Form
        </Text>
      </Flex>
      <VerifiedHeadersPopover />
      <Flex align="center" justify="center">
        <Text size="sm" className={classes.textFlex}>
          To upload results to ACS, you can paste tab or comma separated values into the text area
          below. If your data is space separated, this uploader will not work. The first line must
          be the headers, ideally in the following format:
        </Text>
      </Flex>
      <Flex align="center" justify="center">
        <Text size="sm" className={classes.textFlex}>
          Any columns that are not integrated into the database schema,or have a blank or empty
          header will be ignored. Tips: you can try copying data straight from results tables on web
          pages, or pdf documents.
        </Text>
      </Flex>
    </>
  );
}
