import { IconInfoCircle } from '@tabler/icons-react';
import { Alert } from '@mantine/core';
import { buildMockRacingHistory } from '@/app/mockData/generators/results';
import { IRaceYear } from '@/app/types';
import { getData, getRaceYears } from '../utils';
import YearTabs from './YearTabs';
import classes from '../styles/RaceTable.module.css';

export default async function TableContainer() {
  const icon = <IconInfoCircle />;

  try {
    // fetch to random API just to add some async waiting time
    // displaying result in hidden div for now
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();

    const history: IRaceYear[] = await getData(buildMockRacingHistory());
    const years = getRaceYears(history);

    return (
      <div className={classes.raceTableContainer}>
        <div className={classes.hidden}>{JSON.stringify(countries)}</div>
        <YearTabs years={years} history={history} />
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
