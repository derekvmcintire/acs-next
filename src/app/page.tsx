import { Container } from '@mantine/core';
import { getRankings } from '../_api/get/rankings/get-rankings';
import dayjs from 'dayjs';

export default async function HomePage() {
  const year = dayjs().year();
  const rankingResponse = await getRankings({limit: 20});

  if (rankingResponse && rankingResponse?.rankings) {
    return (
      <Container>
        <div>{`Top Ranked Riders of ${year}`}</div>
        {rankingResponse.rankings.map((rank, i) => {
          return (
            <div>{`${i + 1}: ${rank.firstName} ${rank.lastName} - ${rank.totalPoints} points`}</div>
          );
        })}
      </Container>
    );
  }

  return <div>oh bummer.</div>;
}
