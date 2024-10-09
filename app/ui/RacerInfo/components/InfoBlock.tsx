import { PropsWithChildren } from 'react';
import { Divider, Flex } from '@mantine/core';
import classes from '../styles/RacerInfo.module.css';

type InfoSectionProps = PropsWithChildren;

export default function InfoBlock({ children }: InfoSectionProps) {
  return (
    <Flex className={classes.infoBlock} justify="left">
      <div>
        <Divider size="sm" orientation="vertical" className={classes.divider} />
      </div>
      <div className={classes.infoBlockText}>{children}</div>
    </Flex>
  );
}
