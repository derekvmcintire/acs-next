import { Container } from '@mantine/core';
import { getRaceResults } from '@/src/_api/get-race-results';
import { getRaces } from '@/src/_api/get-races';
import { IGetRaceResultsResponse } from '@/src/_api/types';
import Race from '@/src/_components/Race';
import NetworkError from '@/src/_components/UI/NetworkError/NetworkError';

interface RacePageParams {
  id: number;
}

interface RacePageProps {
  params: RacePageParams;
}

function sortByPlace(results: any[]) {
  return results.sort((a, b) => {
    if (a.place === null || a.place === undefined) return 1;
    if (b.place === null || b.place === undefined) return -1;
    return a.place - b.place;
  });
}

export default async function RacePage({ params }: RacePageProps) {
  const { id } = params;
  const errors: string[] = [];
  const raceSearch = await getRaces({ id });

  raceSearch?.error && errors.push(raceSearch.error);

  const raceInfo = raceSearch?.races && raceSearch.races[0];

  if (!raceInfo) {
    throw new Error('Failed to Get Race Info');
  }

  const raceResults: IGetRaceResultsResponse = await getRaceResults(id);
  raceResults?.error && errors.push(raceResults.error);
  const results = raceResults?.results || [];

  const sortedResults = sortByPlace(results);

  return (
    <Container>
      <NetworkError errors={errors} />
      <Race race={raceInfo} results={sortedResults} />
    </Container>
  );
}

export const revalidate = 0;
