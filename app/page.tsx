import { Group } from '@mantine/core';
import { ColorSchemeToggle } from './components/ColorSchemeToggle/ColorSchemeToggle';
import RacerInfoContainer from './components/RacerInfo/RacerInfoContainer';
import RaceTableContainer from './components/RaceTable/RaceTableContainer';
import Welcome from './components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <RacerInfoContainer />
      <Group justify="center" mt="xl">
        <RaceTableContainer />
      </Group>
      <ColorSchemeToggle />
    </>
  );
}
