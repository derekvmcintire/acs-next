'use client';

import { Text } from '@mantine/core';
import InfoBlock from '../../_ui/InfoBlock';
import classes from '../styles/rider.module.css';

export default function UpcomingRaces() {
  return (
    <section className={classes.topResults}>
      <InfoBlock>
        <Text>Upcoming Races</Text>
      </InfoBlock>
    </section>
  );
}
