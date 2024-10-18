'use client';

import { GoDotFill } from 'react-icons/go';
import { Anchor, Text } from '@mantine/core';
import { IRiderInfo } from '@/src/_types';
import { ACS_COLOR_BLUE, APP_BASE_URL, APP_RIDER_PATH } from '@/src/global-constants';
import InfoBlock from '../../ui/InfoBlock';
import { getCurrentTeam } from '../utils';
import classes from '../styles/rider.module.css';

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

interface RiderInfoTeamProps {
  members: IRiderInfo[];
}

export default function RiderInfoTeam({ members }: RiderInfoTeamProps) {
  const team = getCurrentTeam(members[0].teams);

  return (
    <section className={classes.riderInfoTeam} data-testId={RIDER_INFO_TEAM_TEST_ID}>
      <InfoBlock>
        <Text mb="8" fw={900}>{`Team ${team}`}</Text>
        {members && members.map((rider: IRiderInfo) => <TeamMember rider={rider} />)}
      </InfoBlock>
    </section>
  );
}
