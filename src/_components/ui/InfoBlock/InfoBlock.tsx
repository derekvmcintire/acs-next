'use client';

import { PropsWithChildren } from 'react';
import { Flex, Text } from '@mantine/core';
import classes from '../styles/info-block.module.css';

interface InfoBlockProps extends PropsWithChildren {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  className?: string;
  title?: string;
}

export default function InfoBlock({
  children,
  justify = 'flex-start',
  className = '',
  title = 'Section',
}: InfoBlockProps) {
  return (
    <div className={classes.infoBlockOuter}>
      {title && (
        <Flex className={classes.infoBlockHeader}>
          <Text fw={700}>{title}</Text>
        </Flex>
      )}
      <Flex className={`${classes.infoBlock} ${className}`} justify={justify}>
        <section className={classes.infoBlockText}>{children}</section>
      </Flex>
    </div>
  );
}
