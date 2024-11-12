import { fetchRaces } from '@/src/_api/get/races/fetch-races';
import { fetchRaceResults } from '@/src/_api/get/results/fetch-race-results';
import { fetchSingleRider } from '@/src/_api/get/riders/fetch-rider';
import { IGetRaceResultsResponse, IGetSingleRiderResponse } from '@/src/_api/types';
import Race from '@/src/_components/Race';
import NetworkError from '@/src/_components/ui/NetworkError';

interface RacePageParams {
  eventId: number;
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
  const { eventId } = params;
  const errors: string[] = [];
  const fetchRacesResponse = await fetchRaces({ eventId });
  fetchRacesResponse?.error && errors.push(fetchRacesResponse.error);
  const race = fetchRacesResponse?.races && fetchRacesResponse.races[0];

  if (!race) {
    throw new Error('Failed to Get Race Info');
  }

  const raceResults: IGetRaceResultsResponse = await fetchRaceResults(race.id);
  raceResults?.error && errors.push(raceResults.error);
  const results = raceResults?.results || [];
  const sortedResults = sortByPlace(results);

  const winningResult = sortedResults[0];
  const winnerRiderId = winningResult?.riderId;
  let winner;

  if (winnerRiderId) {
    const winnerResponse: IGetSingleRiderResponse = await fetchSingleRider(winnerRiderId);
    winnerResponse?.error && errors.push(winnerResponse.error);
    winner = winnerResponse?.riderInfo || undefined;
  }

  return (
    <>
      <NetworkError errors={errors} />
      <Race race={race} results={sortedResults} winner={winner} />
    </>
  );
}

export const revalidate = 0;
