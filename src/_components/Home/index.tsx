import { Center, Container, Flex, Stack } from '@mantine/core';
import dayjs from 'dayjs';
import { GetRacesResponse } from '@/src/_api/get/races/get-races-response-type';
import { GetRankingsResponse } from '@/src/_api/get/rankings/get-rankings-response-type';
import RecentRaces from '../Race/RecentRaces';
import PageLayout from '../shared/PageLayout';
import SectionLabel from '../ui/SectionLabel';
import RankPreview from './RankPreview';
import classes from './styles/home.module.css';

export const HOME_TEST_ID = 'home';

interface ACSHomeProps {
  rankings: GetRankingsResponse[];
  recentRaces?: GetRacesResponse[] | null;
}

export default async function ACSHome({ recentRaces, rankings }: ACSHomeProps) {
  const year = dayjs().year();

  return (
    <Center data-testid={HOME_TEST_ID} className={classes.acsHome}>
      <PageLayout>
        <Flex justify="space-between">
          <Stack className={classes.stackLeft}>
            <Container>
              <SectionLabel slim text={`${year} ACS Rankings Top Five`} />
              <RankPreview rankings={rankings} year={year} />
            </Container>
          </Stack>
          <Stack className={classes.stackRight}>
            {recentRaces && <RecentRaces races={recentRaces} />}
          </Stack>
        </Flex>
      </PageLayout>
    </Center>
  );
}
