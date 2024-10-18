'use client';

import { Anchor, Text } from '@mantine/core';
import { IRiderInfo } from '@/src/_types';
import { APP_BASE_URL, APP_RIDER_PATH } from '@/src/global-constants';
import InfoBlock from '../../_ui/InfoBlock';
import { getCurrentTeam } from '../utils';
import classes from '../styles/rider.module.css';

interface RiderInfoTeamProps {
  members: IRiderInfo[];
}

export default function RiderInfoTeam({ members }: RiderInfoTeamProps) {
  const team = getCurrentTeam(members[0].teams);

  return (
    <section className={classes.riderInfoTeam}>
      <InfoBlock>
        <Text mb="8" fw={900}>{`Team ${team}`}</Text>
        {members &&
          members.map((rider: IRiderInfo) => (
            <Text key={`${rider.name.first} ${rider.name.last}`} size="xs">
              <Anchor href={`${APP_BASE_URL}${APP_RIDER_PATH}/${rider.id}`}>
                {`${rider.name.first} ${rider.name.last}`}
              </Anchor>
            </Text>
          ))}
      </InfoBlock>
    </section>
  );
}
