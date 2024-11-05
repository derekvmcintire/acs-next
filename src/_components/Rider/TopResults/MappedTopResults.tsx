import { useMantineColorScheme } from '@mantine/core';
import { RiderResult } from '@/src/_types';
import { getFormattedYearString } from '@/src/_utility/date-helpers';
import { stringTrunc } from '@/src/_utility/string-helpers';
import LabeledText from '../../Ui/LabeledText';
import { getOrdinal, getTopResultPlaceColor } from '../utils';
import classes from '../rider.module.css';

export const MAPPED_TOP_RESULTS_TEST_ID = 'mapped-results';

interface MappedTopResultsProps {
  topResults: RiderResult[];
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
            text={`${stringTrunc(result.name)} (${getFormattedYearString(new Date(String(result.startDate)))})`}
            hasColon={false}
          />
        </div>
      ))}
    </div>
  );
};
