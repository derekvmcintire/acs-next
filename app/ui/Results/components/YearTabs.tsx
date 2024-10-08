'use client';

import { Group, Tabs } from '@mantine/core';
import { IRaceData, IRaceYear } from '@/app/types';
import RaceTable from './ResultsTable';
import classes from '../styles/RaceTable.module.css';

interface RaceTabsProps {
  years: string[];
  history: IRaceYear[];
}

export default function RaceTabs({ years, history }: RaceTabsProps) {
  const getRaceDataForYear = (year: number): IRaceData[] => {
    const raceData = history.find((raceYear) => raceYear.year === year);
    return raceData?.races || [];
  };

  return (
    <div className={classes.raceTabs}>
      <Group mt="xl">
        <Tabs defaultValue={years[0]}>
          <Tabs.List>
            {years.map((year) => (
              <Tabs.Tab key={year} value={year}>
                <div data-testid={`raceTab${year}`}>{year}</div>
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {years.map((year) => (
            <Tabs.Panel key={year} value={year}>
              <RaceTable races={getRaceDataForYear(Number(year)) || []} />
            </Tabs.Panel>
          ))}
        </Tabs>
      </Group>
    </div>
  );
}
