import { Center, Group, Stack } from '@mantine/core';
import dayjs from 'dayjs';
import { GetRankingsResponse } from '@/src/_api/get/rankings/get-rankings-response-type';
import PageLayout from '../shared/PageLayout';
import RankPreview from './RankPreview';

export const HOME_TEST_ID = 'home';

interface ACSHomeProps {
  rankings: GetRankingsResponse[];
}

export default async function ACSHome({ rankings }: ACSHomeProps) {
  const year = dayjs().year();

  return (
    <Center data-testid={HOME_TEST_ID}>
      <PageLayout>
        <Group>
          <Stack>
            <RankPreview rankings={rankings} year={year} />
          </Stack>
          <Stack>
            <div> Column 2</div>
          </Stack>
        </Group>
      </PageLayout>
    </Center>
  );
}
