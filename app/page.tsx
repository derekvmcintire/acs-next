import { Suspense } from 'react';
import { Group } from '@mantine/core';
import { ColorSchemeToggle } from './_src/_components/ColorSchemeToggle/ColorSchemeToggle';
import RaceTableContainer from './_src/_components/Results/ResultsTableServer';
import RacerInfoContainer from './_src/_components/Rider/RiderInfo';
import TopNav from './_src/_components/TopNav/TopNav';
import Loader from './loading';
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
        <RaceTableContainer />
      </Group>
      <ColorSchemeToggle />
    </div>
  );
}
