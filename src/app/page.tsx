import { fetchRaces, GetRacesFilters } from '../_api/get/races/fetch-races';
import { fetchRankings } from '../_api/get/rankings/fetch-rankings';
import ACSHome from '../_components/Home';
import { MAX_RACES_TO_PREVIEW } from '../global-constants';

export default async function HomePage() {
  const rankingResponse = await fetchRankings({ limit: 5 });

  const getRecentRacesFilters: GetRacesFilters = {
    limit: MAX_RACES_TO_PREVIEW,
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
