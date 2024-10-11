'use client';

import React from 'react';
import { Group, Tabs, Text } from '@mantine/core';
import { IRaceYear } from '@/app/types';
import RaceTable from './ResultsTable';
import classes from '../styles/RaceTable.module.css';

interface RaceTabsProps {
  years: number[];
  history: IRaceYear[];
}

export default function RaceTabs({ years, history }: RaceTabsProps) {
  const getResultsForSingleYear = React.useMemo(() => {
    return (year: number) => history.find((raceYear) => raceYear.year === year)?.races || [];
  }, []);

  const getTabs = () => {
    return years.length < 1 ? (
      <Text>No Results Available</Text>
    ) : (
      <Group mt="xl">
        <Tabs defaultValue={years[0].toString()}>
          <Tabs.List>
            {years.map((year) => (
              <Tabs.Tab key={year} value={year.toString()}>
                <div data-testid={`raceTab${year}`}>{year}</div>
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {years.map((year) => (
            <Tabs.Panel key={year} value={year.toString()}>
              <RaceTable races={getResultsForSingleYear(year)} />
            </Tabs.Panel>
          ))}
        </Tabs>
      </Group>
    );
  };

  return <div className={classes.raceTabs}>{getTabs()}</div>;
}
