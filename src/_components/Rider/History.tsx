'use client';

import { Group, Tabs, Text } from '@mantine/core';
import { IRaceYear } from '@/src/_types';
import RaceTable from './HistoryTable';
import { getRaceYears, getResultsForSingleYear } from './utils';
import classes from './styles/rider.module.css';

export const RESULTS_TABLE_SERVER_TEST_ID = 'results-table-server';
export const NO_RESULTS_TABLE_SERVER_TEST_ID = 'no-results-table-server';

interface HistoryProps {
  history: IRaceYear[];
}

export default function History({ history }: HistoryProps) {
  const years: number[] = history?.length > 0 ? getRaceYears(history) : [];

  const getTabs = () => {
    return years.length < 1 ? (
      <Text data-testId={NO_RESULTS_TABLE_SERVER_TEST_ID}>No Results Available</Text>
    ) : (
      <Group className={classes.tabsGroup} data-testId={RESULTS_TABLE_SERVER_TEST_ID}>
        <Tabs defaultValue={years[0].toString()}>
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

  return <div className={classes.raceTabs}>{getTabs()}</div>;
}
