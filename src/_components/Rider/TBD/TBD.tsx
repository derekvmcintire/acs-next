'use client';

import { Flex, Text } from '@mantine/core';
import { ACS_COLOR_ORANGE } from '@/src/global-constants';
import { useRider } from '../../../_contexts/Rider/RiderContext';
import InfoBlock from '../../ui/InfoBlock/InfoBlock';
import { MappedTopResults } from '../TopResults/MappedTopResults';
import classes from '../rider.module.css';

export const TOP_RESULTS_TEST_ID = 'tbd';

export default function TBD() {
  const { riderInfo } = useRider();
  const { wins, topResults } = riderInfo;

  const hasWins = !!(wins && wins > 0);
  const hasTopResults = topResults && topResults.length > 0;

  return (
    <section data-testid={TOP_RESULTS_TEST_ID} className={classes.topResults}>
      <InfoBlock title="Top Results">
        <Flex justify="center">
          {hasWins && <Text size="sm" c={ACS_COLOR_ORANGE} fw={700}>{`${wins} Career Wins`}</Text>}
        </Flex>
        {hasTopResults ? <MappedTopResults topResults={topResults} /> : <>No Top Results Found</>}
      </InfoBlock>
    </section>
  );
}
