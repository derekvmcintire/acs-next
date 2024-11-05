'use client';

import { Team } from '@/src/_types';
import { yearTrunc } from '@/src/_utility/date-helpers';
import { stringTrunc } from '@/src/_utility/string-helpers';
import { useRider } from '../../../_contexts/Rider/RiderContext';
import classes from '../rider.module.css';
import InfoBlock from '@/src/_components/ui/InfoBlock';

export const TOP_RESULTS_TEST_ID = 'tbd';

export default function RiderTeams() {
  const { riderInfo } = useRider();
  const teams = riderInfo.teams || [];

  return (
    <section data-testid={TOP_RESULTS_TEST_ID} className={classes.topResults}>
      <InfoBlock title="Teams">
        {teams.map((team: Team) => (
          <div key={team.year}>{`'${yearTrunc(team.year)} - ${stringTrunc(team.name, 15)}`}</div>
        ))}
      </InfoBlock>
    </section>
  );
}
