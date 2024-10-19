'use client';

import { Text } from '@mantine/core';
import { ACS_COLOR_ORANGE } from '@/src/global-constants';
import InfoBlock from '../../ui/InfoBlock';
import { useRider } from '../context/RiderContext';
import { MappedTopResults } from './MappedTopResults';

export const TOP_RESULTS_TEST_ID = 'top-results';

export default function TopResults() {
  const { riderInfo } = useRider();
  const { wins, topResults } = riderInfo;

  const hasWins = wins && wins > 0;
  const hasTopResults = topResults && topResults.length > 0;

  return (
    <section data-testid={TOP_RESULTS_TEST_ID}>
      <InfoBlock>
        <Text fw={900}>Top Results</Text>
        {hasWins && <Text size="xs" c={ACS_COLOR_ORANGE} fw={700}>{`${wins} Career Wins`}</Text>}
        {hasTopResults ? <MappedTopResults topResults={topResults} /> : <>No Top Results Found</>}
      </InfoBlock>
    </section>
  );
}
