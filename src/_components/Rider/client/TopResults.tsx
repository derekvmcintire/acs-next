'use client';

import { Text } from '@mantine/core';
import { IRiderInfo } from '@/src/_types';
import InfoBlock from '../../ui/InfoBlock';
import { MappedTopResults } from './MappedTopResults';
import { Wins } from './Wins';

export const TOP_RESULTS_TEST_ID = 'top-results';

type TopResultsProps = IRiderInfo;

export default function TopResults(riderInfo: TopResultsProps) {
  const { wins, topResults } = riderInfo;

  const hasWins = wins && wins > 0;
  const hasTopResults = topResults && topResults.length > 0;

  return (
    <section data-testid={TOP_RESULTS_TEST_ID}>
      <InfoBlock>
        <Text fw={900}>Top Results</Text>
        {hasWins && <Wins wins={wins} />}
        {hasTopResults ? <MappedTopResults topResults={topResults} /> : <>No Top Results Found</>}
      </InfoBlock>
    </section>
  );
}
