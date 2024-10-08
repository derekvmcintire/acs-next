import { ColorSchemeToggle } from './components/ColorSchemeToggle/ColorSchemeToggle';
import RacerInfo from './components/RacerInfo/RacerInfo';
import RaceTableContainer from './components/RaceTable/RaceTableContainer';
import Welcome from './components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <RacerInfo />
      <RaceTableContainer />
      <ColorSchemeToggle />
    </>
  );
}
