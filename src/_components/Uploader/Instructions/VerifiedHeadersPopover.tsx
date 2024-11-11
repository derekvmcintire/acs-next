'use client';

import React from 'react';
import { Flex, List, Popover, Text } from '@mantine/core';
import { VERIFIED_HEADERS } from '@/src/_processers/results/constants';
import classes from './instructions.module.css';

const ValidHeaders = React.memo(() => (
  <List>
    {(Object.keys(VERIFIED_HEADERS) as Array<keyof typeof VERIFIED_HEADERS>).map((key) => (
      <List.Item key={key}>
        {`${key} - accepted aliases: "${VERIFIED_HEADERS[key].join('"/"')}"`}
      </List.Item>
    ))}
  </List>
));

export default function VerifiedHeadersPopover() {
  return (
    <Flex align="center" justify="center">
      <Text component="span" size="sm" className={classes.textFlex}>
        Results must be in tab or comma separated format, with{' '}
        <Popover position="bottom">
          <Popover.Target>
            <Text
              span
              fw={600}
              td="underline"
              c="orange"
              className={classes.eligibleHeadersText}
              aria-label="Click to view eligible headers"
            >
              eligible headers
            </Text>
          </Popover.Target>
          <Popover.Dropdown>
            <ValidHeaders />
          </Popover.Dropdown>
        </Popover>
        {'. '}
        Ineligible headers will be ignored.
      </Text>
    </Flex>
  );
}
