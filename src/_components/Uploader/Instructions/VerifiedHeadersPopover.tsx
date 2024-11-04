'use client';

import React from 'react';
import { Flex, List, Mark, Popover, Text } from '@mantine/core';
import { VERIFIED_HEADERS } from '@/src/_processers/results/constants';
import classes from './instructions.module.css';

const ValidHeaders = () => (
  <List>
    {(Object.keys(VERIFIED_HEADERS) as Array<keyof typeof VERIFIED_HEADERS>).map((key) => {
      const aliases = VERIFIED_HEADERS[key];
      return <List.Item>{`${key} - accepted aliases: "${aliases.join('"/"')}"`}</List.Item>;
    })}
  </List>
);

export default function VerifiedHeadersPopover() {
  return (
    <Flex align="center" justify="center">
      <Text component="span" size="sm" className={classes.textFlex}>
        Results must be in tab or comma separated format, with{' '}
        <Popover middlewares={{ flip: true, shift: true, inline: true }} position="bottom">
          <Popover.Target>
            <Mark className={classes.validHeaders}>eligible headers only.</Mark>
          </Popover.Target>
          <Popover.Dropdown>
            <ValidHeaders />
          </Popover.Dropdown>
        </Popover>
      </Text>
    </Flex>
  );
}
