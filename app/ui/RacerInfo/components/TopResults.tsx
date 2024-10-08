'use client';

import { Text } from '@mantine/core';
import InfoBlock from './InfoBlock';

export const RACER_INFO_BLOCK_TEST_ID = 'racerInfoBlock';

export default function Details() {
  return (
    <InfoBlock data-testid="topResults">
      <Text>Top Results</Text>
    </InfoBlock>
  );
}
