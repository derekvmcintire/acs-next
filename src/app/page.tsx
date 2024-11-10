import { fetchRaces, GetRacesFilters } from '../_api/get/races/get-races';
import { getRankings } from '../_api/get/rankings/get-rankings';
import ACSHome from '../_components/Home';

export default async function HomePage() {
  const rankingResponse = await getRankings({ limit: 5 });

  const getRecentRacesFilters: GetRacesFilters = {
    limit: 5,
    orderBy: 'startDate',
    direction: 'desc',
  };
  const fetchRacesResponse = await fetchRaces(getRecentRacesFilters);

  return (
    <ACSHome
      recentRaces={fetchRacesResponse.races || undefined}
      rankings={rankingResponse.rankings || []}
    />
  );
}
