import { getRankings } from '../_api/get/rankings/get-rankings';
import ACSHome from '../_components/Home';

export default async function HomePage() {
  const rankingResponse = await getRankings({ limit: 5 });

  if (!rankingResponse || !rankingResponse?.rankings) {
    throw new Error('Unable to retrieve rankings');
  }

  return <ACSHome rankings={rankingResponse.rankings} />;
}
