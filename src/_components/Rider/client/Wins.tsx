import { Text } from '@mantine/core';
import { ACS_COLOR_ORANGE } from '@/src/global-constants';

export const WINS_TEST_ID = 'wins';

interface WinsProps {
  wins: number;
}

export const Wins = ({ wins }: WinsProps) => (
  <div data-testid={WINS_TEST_ID}>
    <Text size="xs" c={ACS_COLOR_ORANGE} fw={700}>{`${wins} Career Wins`}</Text>
  </div>
);
