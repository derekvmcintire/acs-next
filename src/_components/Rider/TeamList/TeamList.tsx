'use client';

import { Anchor, Container, Divider, Flex, Image, Text } from '@mantine/core';
import { IRiderInfo } from '@/src/_types';
import { APP_BASE_URL, APP_RIDER_PATH } from '@/src/global-constants';
import { useRider } from '../../../_contexts/Rider/RiderContext';
import InfoBlock from '../../ui/InfoBlock/InfoBlock';
import SectionLabel from '../../ui/SectionLabel/SectionLabel';
import { calculateAge, getCurrentTeam } from '../utils';
import TeamQuickStats from './TeamQuickStats';
import classes from '../rider.module.css';

interface TeamMemberProps {
  rider: IRiderInfo;
}

const TeamMember = ({ rider }: TeamMemberProps) => {
  const { dob, id, name, photo } = rider;
  const { first, last } = name;
  return (
    <>
      <Flex align="flex-end" justify="space-between">
        <Image h={30} src={photo} mr={8}></Image>
        <Text size="sm">
          <Anchor
            className={classes.teamListAnchor}
            href={`${APP_BASE_URL}${APP_RIDER_PATH}/${id}`}
          >
            <span className={classes.teamListName}>{` ${first} ${last}`}</span>
          </Anchor>
          <span className={classes.teamListAge}>{` ${calculateAge(new Date(dob))}`}</span>
        </Text>
      </Flex>
      <Divider mt="4px" />
    </>
  );
};

const RIDER_INFO_TEAM_TEST_ID = 'team-list';

export default function TeamList() {
  const { riderTeamMembers, riderInfo } = useRider();
  const { id } = riderInfo;
  const team = riderTeamMembers ? getCurrentTeam(riderTeamMembers[0]?.teams) : [];
  const hasTeamMembers = riderTeamMembers && riderTeamMembers.length > 0;
  const isNotCurrentRider = (rider: IRiderInfo) => rider.id !== id;

  return (
    <Flex justify="center" className={classes.teamList} data-testid={RIDER_INFO_TEAM_TEST_ID}>
      <InfoBlock className={classes.teamListInfoBlock} title={`Team ${team}`}>
        <Container mb="36px">
          <SectionLabel text="Riders" />
          {hasTeamMembers &&
            riderTeamMembers.map((rider: IRiderInfo) => {
              return isNotCurrentRider(rider) ? (
                <div key={`${rider.id}${rider.dob}`} className={classes.teamListRider}>
                  <TeamMember rider={rider} />
                </div>
              ) : (
                <div key={`${rider.id}${rider.dob}`}></div>
              );
            })}
        </Container>
        <TeamQuickStats />
      </InfoBlock>
    </Flex>
  );
}
