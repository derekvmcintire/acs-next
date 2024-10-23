'use client';

import { Group, Tabs, Text } from '@mantine/core';
import { useRiderHistory } from '@/src/_contexts/Rider/RiderHistoryContext';
import { getRaceYears, getResultsForSingleYear } from '../utils';
import RaceTable from './HistoryTable';
import classes from '../rider.module.css';

export const HISTORY_TEST_ID = 'history';
export const NO_HISTORY_TEST_ID = 'no-history';

export default function History() {
  const { history } = useRiderHistory();
  const years: number[] = history?.length > 0 ? getRaceYears(history) : [];

  const getTabs = () => {
    return years.length < 1 ? (
      <Text data-testid={NO_HISTORY_TEST_ID}>No Results Available</Text>
    ) : (
      <Group className={classes.riderHistory} data-testid={HISTORY_TEST_ID}>
        <Tabs variant="outline" defaultValue={years[0].toString()}>
          <Tabs.List>
            {getRaceYears(history).map((year) => (
              <Tabs.Tab key={year} value={year.toString()}>
                <div data-testid={`raceTab${year}`}>{year}</div>
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {years.map((year) => (
            <Tabs.Panel key={year} value={year.toString()}>
              <RaceTable results={getResultsForSingleYear(year, history)} />
            </Tabs.Panel>
          ))}
        </Tabs>
      </Group>
    );
  };

  return <div className={classes.history}>{getTabs()}</div>;
}
