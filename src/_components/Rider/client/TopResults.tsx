'use client';

import { Text, useMantineColorScheme } from '@mantine/core';
import { IRaceData, IRiderInfo } from '@/src/_types';
import { getFormattedYearString } from '@/src/_utility/date-helpers';
import {
  ACS_COLOR_BRONZE,
  ACS_COLOR_DARK_GOLD,
  ACS_COLOR_DARK_SILVER,
  ACS_COLOR_LIGHT_GOLD,
  ACS_COLOR_LIGHT_SILVER,
  ACS_COLOR_ORANGE,
  LIGHT_COLOR_SCHEME,
} from '@/src/global-constants';
import { getOrdinal } from '../../Results/utils';
import InfoBlock from '../../ui/InfoBlock';
import LabeledText from '../../ui/LabeledText';
import classes from '../styles/rider.module.css';

export const MAPPED_TOP_RESULTS_TEST_ID = 'mapped-results';

interface MappedTopResultsProps {
  topResults: IRaceData[];
}

const MappedTopResults = ({ topResults }: MappedTopResultsProps) => {
  const { colorScheme } = useMantineColorScheme();

  const getTopResultPlaceColor = (place: number) => {
    switch (place) {
      case 1:
        return colorScheme === LIGHT_COLOR_SCHEME ? ACS_COLOR_DARK_GOLD : ACS_COLOR_LIGHT_GOLD;
      case 2:
        return colorScheme === LIGHT_COLOR_SCHEME ? ACS_COLOR_DARK_SILVER : ACS_COLOR_LIGHT_SILVER;
      case 3:
        return ACS_COLOR_BRONZE;
      default:
        return '';
    }
  };

  return (
    <div className={classes.topResultsList} data-testid={MAPPED_TOP_RESULTS_TEST_ID}>
      {topResults.map((result) => (
        <div key={`${result.startDate}${result.points}`}>
          <LabeledText
            size="xs"
            color={getTopResultPlaceColor(result.place)}
            label={`${getOrdinal(result.place)}`}
            text={`at ${result.name} (${getFormattedYearString(new Date(result.startDate))})`}
            noColon
          />
        </div>
      ))}
    </div>
  );
};

export const WINS_TEST_ID = 'wins';

interface WinsProps {
  wins: number;
}

const Wins = ({ wins }: WinsProps) => (
  <div data-testid={WINS_TEST_ID}>
    <Text size="xs" c={ACS_COLOR_ORANGE} fw={700}>{`${wins} Career Wins`}</Text>
  </div>
);

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
