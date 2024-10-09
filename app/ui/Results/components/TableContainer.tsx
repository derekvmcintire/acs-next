import { IconInfoCircle } from '@tabler/icons-react';
import { Alert } from '@mantine/core';
import { mockRacingHistory } from '@/app/mock-data/mock';
import { IRaceYear } from '@/app/types';
import { getData, getRaceYears } from '../utils';
import YearTabs from './YearTabs';
import classes from '../styles/RaceTable.module.css';

export default async function TableContainer() {
  const icon = <IconInfoCircle />;

  try {
    const raceHistory: IRaceYear[] = await getData(mockRacingHistory.history);
    const years = getRaceYears(raceHistory);

    return (
      <div className={classes.raceTableContainer}>
        <YearTabs years={years} history={raceHistory} />
      </div>
    );
  } catch (error) {
    return (
      <Alert variant="light" color="red" title="Alert title" icon={icon}>
        {`Failed to Load Race History: ${error}`}
      </Alert>
    );
  }
}
