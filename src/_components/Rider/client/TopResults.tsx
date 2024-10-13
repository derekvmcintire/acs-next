'use client';

import { Text } from '@mantine/core';
import InfoBlock from '../../../_ui/InfoBlock';
import classes from '../styles/rider.module.css';

export default function TopResults() {
  return (
    <section className={classes.topResults}>
      <InfoBlock>
        <Text>Top Results</Text>
      </InfoBlock>
    </section>
  );
}