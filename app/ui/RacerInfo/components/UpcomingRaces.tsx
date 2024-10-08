'use client';

import { Text } from '@mantine/core';
import InfoBlock from './InfoBlock';

export const RACER_INFO_BLOCK_TEST_ID = 'racerInfoBlock';

export default function UpcomingRaces() {
  return (
    <InfoBlock data-testid="upcomingRaces">
      <Text>Upcoming Races</Text>
    </InfoBlock>
  );
}
