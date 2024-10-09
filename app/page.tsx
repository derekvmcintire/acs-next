import { Group } from '@mantine/core';
import { ColorSchemeToggle } from './ui/ColorSchemeToggle/ColorSchemeToggle';
import RacerInfoContainer from './ui/RacerInfo/components/RacerInfoContainer';
import RaceTableContainer from './ui/Results/components/TableContainer';
import Welcome from './ui/Welcome/Welcome';
import classes from './page.module.css';

export default function HomePage() {
  return (
    <div className={classes.page}>
      <Welcome />
      <RacerInfoContainer />
      <Group pb="50px">
        <RaceTableContainer />
      </Group>
      <ColorSchemeToggle />
    </div>
  );
}
