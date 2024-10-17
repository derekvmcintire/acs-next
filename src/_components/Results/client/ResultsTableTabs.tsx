'use client';

import React from 'react';
import { Group, Tabs, Text } from '@mantine/core';
import { IRaceYear } from '@/src/_types';
import RaceTable from './ResultsTable';
import classes from '../styles/results.module.css';

interface ResultsTableTabsProps {
  years: number[];
  history: IRaceYear[];
}

const getResultsForSingleYear = (year: number, history: IRaceYear[]) =>
  history.find((raceYear) => raceYear.year === year)?.races || [];

export default function ResultsTableTabs({ years, history }: ResultsTableTabsProps) {
  const getTabs = () => {
    return years.length < 1 ? (
      <Text>No Results Available</Text>
    ) : (
      <Group className={classes.tabsGroup}>
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
              <RaceTable results={getResultsForSingleYear(year, history)} />
            </Tabs.Panel>
          ))}
        </Tabs>
      </Group>
    );
  };

  return <div className={classes.raceTabs}>{getTabs()}</div>;
}
