'use client';
import { Group, Tabs } from '@mantine/core';
import { IRaceData, IRaceYear } from '@/app/types';
import RaceTable from './RaceTable';
import classes from './RaceTable.module.css';

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
    <Group justify="center" mt="xl" className={classes.raceTable}>
      <Tabs defaultValue={years[0]}>
        <Tabs.List>
          {years.map((year) => (
            <Tabs.Tab key={year} value={year}>
              {year}
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
  );
}