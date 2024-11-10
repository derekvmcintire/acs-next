import { Center, Container, SimpleGrid, Stack } from '@mantine/core';
import dayjs from 'dayjs';
import { GetRacesResponse } from '@/src/_api/get/races/fetch-races-response-type';
import { GetRankingsResponse } from '@/src/_api/get/rankings/fetch-rankings-response-type';
import RecentRaces from '../Race/RecentRaces';
import ResultsReport from '../Race/Results/ResultsReport';
import PageLayout from '../shared/PageLayout';
import SectionLabel from '../ui/SectionLabel';
import RankPreview from './RankPreview';
import classes from './styles/home.module.css';

export const HOME_TEST_ID = 'home';

interface ACSHomeProps {
  rankings: GetRankingsResponse[];
  recentRaces?: GetRacesResponse[];
}

const currentYear = dayjs().year();

export default function ACSHome({ recentRaces = [], rankings }: ACSHomeProps) {
  return (
    <Center data-testid={HOME_TEST_ID} className={classes.acsHome}>
      <PageLayout>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <Stack className={classes.stackLeft}>
            <Container w="100%">
              <SectionLabel text={`${currentYear} ACS Rankings Top Five`} />
              {rankings.length > 0 && <RankPreview rankings={rankings} year={currentYear} />}
            </Container>
          </Stack>
          <Stack className={classes.stackRight}>
            <ResultsReport />
            {recentRaces.length > 0 && <RecentRaces races={recentRaces} />}
          </Stack>
        </SimpleGrid>
      </PageLayout>
    </Center>
  );
}
