import '@mantine/core';

import { mockRacingData } from '@/app/mock-data/mock';
import RaceTabs from './RaceTabs';

export default function RaceTableContainer() {
  const sortRaceHistory = (history: any[]) => {
    const sorted = [...history];
    sorted.sort((a, b) => b.year - a.year);
    return sorted;
  };

  const racerInfo: any = mockRacingData;
  const raceHistory: any = sortRaceHistory(racerInfo.history);

  return (
    <>
      <RaceTabs years={raceHistory.map((x: any) => String(x.year))} history={raceHistory} />
    </>
  );
}
