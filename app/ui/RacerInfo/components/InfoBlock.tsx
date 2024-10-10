'use client';

import { PropsWithChildren } from 'react';
import { Divider, Flex } from '@mantine/core';
import classes from '../styles/RacerInfo.module.css';

interface InfoBlockProps extends PropsWithChildren {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  className?: string;
}

export default function InfoBlock({
  children,
  justify = 'flex-start',
  className = '',
}: InfoBlockProps) {
  return (
    <Flex className={`${classes.infoBlock} ${className}`} justify={justify}>
      <div>
        <Divider size="sm" orientation="vertical" className={classes.divider} />
      </div>
      <section className={classes.infoBlockText}>{children}</section>
    </Flex>
  );
}
