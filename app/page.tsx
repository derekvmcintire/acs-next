import { Suspense } from 'react';
import { Group } from '@mantine/core';
import { ColorSchemeToggle } from './ui/ColorSchemeToggle/ColorSchemeToggle';
import RacerInfoContainer from './ui/RacerInfo/components/RacerInfoContainer';
import Loader from './ui/Results/components/loading';
import RaceTableContainer from './ui/Results/components/TableContainer';
import TopNav from './ui/TopNav/TopNav';
import classes from './page.module.css';

export default function HomePage() {
  const racerIds = [1, 2, 3];
  const randomRacerId = racerIds[Math.floor(Math.random() * racerIds.length)];

  return (
    <div className={classes.page}>
      <TopNav />
      <Suspense fallback={<Loader />}>
        <RacerInfoContainer id={randomRacerId} />
      </Suspense>
      <Group pb="50px">
        <Suspense fallback={<Loader />}>
          <RaceTableContainer />
        </Suspense>
      </Group>
      <ColorSchemeToggle />
    </div>
  );
}
