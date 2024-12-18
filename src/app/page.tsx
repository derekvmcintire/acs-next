import { fetchRecentRaceResults } from '../_api/get/races/fetch-recent-race-results';
import { fetchRankings } from '../_api/get/rankings/fetch-rankings';
import ACSHome from '../_components/Home';
import { MAX_RACES_TO_PREVIEW } from '../global-constants';

export default async function HomePage() {
  const rankingResponse = await fetchRankings({ limit: 5 });
  const recentRacesResponse = await fetchRecentRaceResults({ limit: MAX_RACES_TO_PREVIEW });

  return (
    <ACSHome
      recentRaces={recentRacesResponse.results || []}
      rankings={rankingResponse.rankings || []}
    />
  );
}
