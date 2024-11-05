'use client';

import { Anchor, Container, Divider, Flex, Image, Text } from '@mantine/core';
import { GetRiderResponse } from '@/src/_api/get/riders/get-riders-response-type';
import { APP_BASE_URL, APP_RIDER_PATH } from '@/src/global-constants';
import { useRider } from '../../../_contexts/Rider/RiderContext';
import SectionLabel from '../../Ui/SectionLabel';
import { calculateAge, getCurrentTeam } from '../utils';
import TeamQuickStats from './TeamQuickStats';
import classes from '../rider.module.css';
import InfoBlock from '../../Ui/InfoBlock';

interface TeamMemberProps {
  rider: GetRiderResponse;
}

const TeamMember = ({ rider }: TeamMemberProps) => {
  const { dob, id, name, photo } = rider;
  const { first, last } = name;
  return (
    <>
      <Flex align="flex-end" justify="space-between">
        <Image h={30} src={photo} mr={16}></Image>
        <Text size="sm">
          <Anchor
            className={classes.teamListAnchor}
            href={`${APP_BASE_URL}${APP_RIDER_PATH}/${id}`}
          >
            <span className={classes.teamListName}>{` ${first.charAt(0)}. ${last}`}</span>
          </Anchor>
          {dob && <span className={classes.teamListAge}>{` ${calculateAge(new Date(dob))}`}</span>}
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
  const team = riderTeamMembers ? getCurrentTeam(riderTeamMembers[0]?.teams || []) : [];
  const hasTeamMembers = riderTeamMembers && riderTeamMembers.length > 0;
  const isNotCurrentRider = (rider: GetRiderResponse) => rider.id !== id;
  const truncatedTeamMembers = [...riderTeamMembers];
  truncatedTeamMembers.length = 20;

  return (
    <Flex justify="center" className={classes.teamList} data-testid={RIDER_INFO_TEAM_TEST_ID}>
      <InfoBlock className={classes.teamListInfoBlock} title={`Team ${team}`}>
        <Container mb="36px">
          <SectionLabel text="Riders" />
          {hasTeamMembers &&
            truncatedTeamMembers.map((rider: GetRiderResponse) => {
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
