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
<<<<<<< HEAD
    const history: IRaceYear[] = await getData(buildMockRacingHistory());
    const years = getRaceYears(history);
=======
    const raceHistory: IRaceYear[] = await getData(buildMockRacingHistory());
    const years = getRaceYears(raceHistory);
>>>>>>> origin/master

    return (
      <div className={classes.raceTableContainer}>
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
