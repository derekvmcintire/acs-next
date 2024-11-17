'use client';

import React from 'react';
import { Alert, Container } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';
import { GetRecentRaceResultsResponse } from '@/src/_api/get/races/fetch-races-response-type';
import SectionLabel from '../../ui/SectionLabel';
import ResultsPreviewList from './ResultsPreviewsList';
import classes from '../styles/race-results.module.css';

interface ResultPreviewListProps {
  races: GetRecentRaceResultsResponse[];
}

const RECENT_RACES_ERROR_TEST_ID = 'recent-races-error';

const icon = <IconInfoCircle />;

export default function RecentRaces({ races }: ResultPreviewListProps) {
  return (
    <Container className={classes.resultsPreviewContainer}>
      <SectionLabel text="Recent Results" />
      {races.length < 1 && (
        <div data-testid={RECENT_RACES_ERROR_TEST_ID}>
          <Alert mb={16} variant="outline" color="red" title="Error Getting Races" icon={icon}>
            No Recent Races Found
          </Alert>
        </div>
      )}
      <ResultsPreviewList races={races} />
    </Container>
  );
}
