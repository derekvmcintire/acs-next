'use client';

import React from 'react';
import { Group, Tabs, Text } from '@mantine/core';
import { IRaceData, IRaceYear } from '@/app/types';
import RaceTable from './ResultsTable';
import classes from '../styles/RaceTable.module.css';

interface RaceTabsProps {
  years: number[];
  history: IRaceYear[];
}

export default function RaceTabs({ years, history }: RaceTabsProps) {
  const raceDataByYear = React.useMemo(() => {
    return years.reduce(
      (acc, year) => {
        const raceData = history.find((raceYear) => raceYear.year === year);
        acc[year] = raceData?.races || [];
        return acc;
      },
      {} as Record<number, IRaceData[]>
    );
  }, []);

  const getTabs = () => {
    return years.length < 1 ? (
      <Text>No Race Data Available</Text>
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
              <RaceTable races={raceDataByYear[year]} />
            </Tabs.Panel>
          ))}
        </Tabs>
      </Group>
    );
  };

  return <div className={classes.raceTabs}>{getTabs()}</div>;
}
