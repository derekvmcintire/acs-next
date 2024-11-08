import { getRankings } from '../_api/get/rankings/get-rankings';
import ACSHome from '../_components/Home';

export default async function HomePage() {
  const rankingResponse = await getRankings({ limit: 5 });

  return <ACSHome rankings={rankingResponse.rankings || []} />;
}
