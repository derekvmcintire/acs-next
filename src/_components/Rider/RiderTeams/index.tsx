'use client';

import React, { useMemo } from 'react';
import InfoBlock from '@/src/_components/ui/InfoBlock';
import { Team } from '@/src/_types/base-types';
import { yearTrunc } from '@/src/_utility/date-helpers';
import { stringTrunc } from '@/src/_utility/string-helpers';
import { useRider } from '../../../_contexts/Rider/RiderContext';
import classes from '../rider.module.css';

export const RIDER_TEAMS_TEST_ID = 'rider-teams';

interface TeamItemProps {
  team: Team;
}

const TeamItem = ({ team }: TeamItemProps) => (
  <div key={team.year}>{`'${yearTrunc(team.year)} - ${stringTrunc(team.name, 15)}`}</div>
);

export default function RiderTeams() {
  const { riderInfo } = useRider();
  const teams = riderInfo?.teams || [];

  const teamItems = useMemo(
    () => teams.map((team) => <TeamItem key={team.year} team={team} />),
    [teams]
  );

  return (
    <section data-testid={RIDER_TEAMS_TEST_ID} className={classes.topResults}>
      <InfoBlock title="Teams">{teamItems}</InfoBlock>
    </section>
  );
}
