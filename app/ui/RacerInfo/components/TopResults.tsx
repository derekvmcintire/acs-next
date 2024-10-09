'use client';

import { Text } from '@mantine/core';
import InfoBlock from './InfoBlock';
import classes from '../styles/RacerInfo.module.css';

export const RACER_INFO_BLOCK_TEST_ID = 'racerInfoBlock';

export default function Details() {
  return (
    <section className={classes.topResults}>
      <InfoBlock>
        <Text>Top Results</Text>
      </InfoBlock>
    </section>
  );
}
