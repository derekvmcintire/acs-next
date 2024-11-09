import { GetRacesFilters, getRecentRaces } from '../_api/get/races/get-races';
import { getRankings } from '../_api/get/rankings/get-rankings';
import ACSHome from '../_components/Home';

export default async function HomePage() {
  const rankingResponse = await getRankings({ limit: 5 });

  const getRecentRacesFilters: GetRacesFilters = {
    limit: 5,
    orderBy: 'startDate',
    direction: 'desc',
  };
  const recentRaces = await getRecentRaces(getRecentRacesFilters);

  return (
    <ACSHome
      recentRaces={recentRaces.races || undefined}
      rankings={rankingResponse.rankings || []}
    />
  );
}
