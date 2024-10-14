'use client';

import { Text } from '@mantine/core';
import InfoBlock from '../../_ui/InfoBlock';
import classes from '../styles/rider.module.css';

export default function SuggestedRiders() {
  return (
    <section className={classes.topResults}>
      <InfoBlock>
        <Text fw={900}>Suggested Riders</Text>
      </InfoBlock>
    </section>
  );
}
