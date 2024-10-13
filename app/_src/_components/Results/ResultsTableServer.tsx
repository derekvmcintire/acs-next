import { IconInfoCircle } from '@tabler/icons-react';
import { Alert } from '@mantine/core';
import { buildMockRacingHistory } from '@/app/_src/_db/mock-data/generators/results/build-results-history';
import { IRaceYear } from '@/app/_src/_types';
import ResultsTableTabs from './ResultsTableTabs';
import { getData, getRaceYears } from './utils';
import classes from './styles/results.module.css';

export default async function ResultsTableServer() {
  const icon = <IconInfoCircle />;

  try {
    const history: IRaceYear[] = await getData(buildMockRacingHistory());
    const years = getRaceYears(history);

    return (
      <div className={classes.raceTableContainer}>
        <ResultsTableTabs years={years} history={history} />
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
