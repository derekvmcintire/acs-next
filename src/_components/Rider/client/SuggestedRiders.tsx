'use client';

import { useEffect, useState } from 'react';
import { Anchor, Text } from '@mantine/core';
import { getRidersByTeam } from '@/src/_api/get-rider';
import { IRiderInfo } from '@/src/_types';
import { APP_BASE_URL, APP_RIDER_PATH } from '@/src/global-constants';
import InfoBlock from '../../_ui/InfoBlock';
import classes from '../styles/rider.module.css';

interface SuggestedRidersProps {
  team: string;
}

export default function SuggestedRiders({ team }: SuggestedRidersProps) {
  const [teamMembers, setTeamMembers] = useState<IRiderInfo[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      await getRidersByTeam(team).then((data) => {
        if (data) {
          setTeamMembers(data);
        }
      });
    };

    fetchTeamMembers();
  }, []);

  if (teamMembers.length < 1) {
    return <Text>Loading...</Text>;
  }

  return (
    <section className={classes.topResults}>
      <InfoBlock>
        <Text mb="8" fw={900}>{`Team ${team}`}</Text>
        {teamMembers &&
          teamMembers.map((rider: IRiderInfo) => (
            <Text size="xs">
              <Anchor href={`${APP_BASE_URL}${APP_RIDER_PATH}/${rider.id}`}>
                {`${rider.name.first} ${rider.name.last}`}
              </Anchor>
            </Text>
          ))}
      </InfoBlock>
    </section>
  );
}
