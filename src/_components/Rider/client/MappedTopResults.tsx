import { useMantineColorScheme } from '@mantine/core';
import { IRaceData } from '@/src/_types';
import { getFormattedYearString } from '@/src/_utility/date-helpers';
import { getOrdinal } from '../../Results/utils';
import LabeledText from '../../ui/LabeledText';
import { getTopResultPlaceColor } from '../utils';
import classes from '../styles/rider.module.css';

export const MAPPED_TOP_RESULTS_TEST_ID = 'mapped-results';

interface MappedTopResultsProps {
  topResults: IRaceData[];
}

export const MappedTopResults = ({ topResults }: MappedTopResultsProps) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <div className={classes.topResultsList} data-testid={MAPPED_TOP_RESULTS_TEST_ID}>
      {topResults.map((result) => (
        <div key={`${result.startDate}${result.points}`}>
          <LabeledText
            size="xs"
            color={getTopResultPlaceColor(result.place, colorScheme)}
            label={`${getOrdinal(result.place)}`}
            text={`at ${result.name} (${getFormattedYearString(new Date(result.startDate))})`}
            noColon
          />
        </div>
      ))}
    </div>
  );
};
