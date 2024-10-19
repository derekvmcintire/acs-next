'use client';

import { GoDotFill } from 'react-icons/go';
import { Anchor, Text } from '@mantine/core';
import { IRiderInfo } from '@/src/_types';
import { ACS_COLOR_BLUE, APP_BASE_URL, APP_RIDER_PATH } from '@/src/global-constants';
import InfoBlock from '../../ui/InfoBlock/InfoBlock';
import { useRider } from '../RiderContext/RiderContext';
import { getCurrentTeam } from '../utils';
import classes from '../rider.module.css';

interface TeamMemberProps {
  rider: IRiderInfo;
}

const TeamMember = ({ rider }: TeamMemberProps) => (
  <Text key={`${rider.name.first} ${rider.name.last}`} className={classes.teamMember} size="sm">
    <GoDotFill />
    <Anchor c={ACS_COLOR_BLUE} href={`${APP_BASE_URL}${APP_RIDER_PATH}/${rider.id}`}>
      {` ${rider.name.first} ${rider.name.last}`}
    </Anchor>
  </Text>
);

const RIDER_INFO_TEAM_TEST_ID = 'rider-info-team';

export default function RiderTeamDetails() {
  const { riderTeamMembers } = useRider();
  const team = getCurrentTeam(riderTeamMembers[0].teams);

  const hasTeamMembers = riderTeamMembers && riderTeamMembers.length > 0;

  return (
    <section className={classes.riderInfoTeam} data-testId={RIDER_INFO_TEAM_TEST_ID}>
      <InfoBlock>
        <Text mb="8" fw={900}>{`Team ${team}`}</Text>
        {hasTeamMembers &&
          riderTeamMembers.map((rider: IRiderInfo) => <TeamMember rider={rider} />)}
      </InfoBlock>
    </section>
  );
}
