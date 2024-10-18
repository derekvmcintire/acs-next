'use client';

import { Text, useMantineColorScheme } from '@mantine/core';
import { IRaceData, IRiderInfo } from '@/src/_types';
import { getFormattedYearString } from '@/src/_utility/date-helpers';
import { getOrdinal } from '../../Results/utils';
import InfoBlock from '../../ui/InfoBlock';
import LabeledText from '../../ui/LabeledText';
import classes from '../styles/rider.module.css';

interface MappedResultsProps {
  topResults: IRaceData[];
}

const MappedResults = ({ topResults }: MappedResultsProps) => {
  const { colorScheme } = useMantineColorScheme();

  const getTopResultPlaceColor = (place: number) => {
    switch (place) {
      case 1:
        return colorScheme === 'light' ? '#B59410' : '#FFD700';
      case 2:
        return colorScheme === 'light' ? '#71706E' : '#C0C0C0';
      case 3:
        return '#CD7F32';
      default:
        return '';
    }
  };

  return (
    <div className={classes.topResultsList}>
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

interface WinsProps {
  wins: number;
}
const Wins = ({ wins }: WinsProps) => (
  <Text size="xs" c="orange" fw={700}>{`${wins} Career Wins`}</Text>
);

type TopResultsProps = IRiderInfo;

export default function TopResults(riderInfo: TopResultsProps) {
  const { wins, topResults } = riderInfo;

  const hasWins = wins && wins > 0;
  const hasTopResults = topResults && topResults.length > 0;

  return (
    <section className={classes.topResults} data-testid="top-results">
      <InfoBlock>
        <Text fw={900}>Top Results</Text>
        {hasWins && <Wins wins={wins} />}
        {hasTopResults ? <MappedResults topResults={topResults} /> : <>No Top Results Found</>}
      </InfoBlock>
    </section>
  );
}
