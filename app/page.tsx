import { Group } from '@mantine/core';
import { ColorSchemeToggle } from './ui/ColorSchemeToggle/ColorSchemeToggle';
import RacerInfoContainer from './ui/RacerInfo/components/RacerInfoContainer';
import RaceTableContainer from './ui/Results/components/TableContainer';
import TopNav from './ui/TopNav/TopNav';
import classes from './page.module.css';

export default function HomePage() {
  return (
    <div className={classes.page}>
      <TopNav />
      <RacerInfoContainer />
      <Group pb="50px">
        <RaceTableContainer />
      </Group>
      <ColorSchemeToggle />
    </div>
  );
}
