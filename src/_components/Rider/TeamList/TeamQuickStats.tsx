'use client';

import React from 'react';
import { Container, Divider } from '@mantine/core';
import { mockRider } from '@/src/_db/mock-data/mock-racer';
import LabeledText from '../../UI/LabeledText/LabeledText';
import SectionLabel from '../../UI/SectionLabel/SectionLabel';
import classes from '../rider.module.css';

const TEAM_QUICK_STATS_TEST_ID = 'team-quick-stats';

export default function TeamQuickStats() {
  const year = 2024;
  const wins = 14;
  const races = 48;
  const averageAge = 24;
  const mockRiderWins = 7;
  const mockRiderRaces = 23;

  return (
    <Container className={classes.teamQuickStats} data-testid={TEAM_QUICK_STATS_TEST_ID}>
      <SectionLabel text={`${year} Quick Stats`} />
      <LabeledText size="xs" label="Wins" text={`${wins}`} />
      <LabeledText size="xs" label="Races Entered" text={`${races}`} />
      <LabeledText size="xs" label="Average Age" text={`${averageAge}`} />
      <LabeledText
        size="xs"
        label="Most Wins"
        text={`${mockRider.name.first} ${mockRider.name.last} (${mockRiderWins})`}
      />
      <LabeledText
        size="xs"
        label="Most Races"
        text={`${mockRider.name.first} ${mockRider.name.last} (${mockRiderRaces})`}
      />
      <Divider mb="16px" mt="16px" />
    </Container>
  );
}
