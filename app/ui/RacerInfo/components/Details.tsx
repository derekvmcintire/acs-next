'use client';

import { Text } from '@mantine/core';
import InfoBlock from './InfoBlock';

export const RACER_INFO_BLOCK_TEST_ID = 'racerInfoBlock';

export default function RacerInfoBlock() {
  return (
    <InfoBlock>
      <Text>Some info</Text>
      <Text>Some more info</Text>
      <Text>A different piece of info</Text>
    </InfoBlock>
  );
}
