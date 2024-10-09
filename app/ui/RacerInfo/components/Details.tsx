'use client';

import { Text } from '@mantine/core';
import InfoBlock from './InfoBlock';
import classes from '../styles/RacerInfo.module.css';

export const RACER_INFO_BLOCK_TEST_ID = 'racerInfoBlock';

export default function Details() {
  return (
    <section className={classes.details}>
      <InfoBlock>
        <Text>Some info</Text>
        <Text>Some more info</Text>
        <Text>A different piece of info</Text>
      </InfoBlock>
    </section>
  );
}
