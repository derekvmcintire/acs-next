'use client';

import { MdArrowForwardIos } from 'react-icons/md';
import { Flex, Text, Title } from '@mantine/core';
import { ACS_COLOR_ORANGE } from '@/src/global-constants';
import { useRider } from '../../../_contexts/Rider/RiderContext';
import CategoryBadges from '../CategoryBadges/CategoryBadges';
import { getCurrentTeam } from '../utils';
import classes from '../rider.module.css';

const TEAM_PLACEHOLDER_TEXT = 'n/a';
const NAME_PLACEHOLDER_TEXT = 'Rider Not Found';

export const NameHeading = () => {
  const { riderInfo } = useRider();
  const { name, teams } = riderInfo;

  const team = getCurrentTeam(teams);

  return (
    <div className={classes.riderTitle}>
      <Title>
        <Text inherit c={ACS_COLOR_ORANGE} span>
          {`${name.first || NAME_PLACEHOLDER_TEXT} ${name.last || ''} `}
        </Text>
        <Text span>
          <MdArrowForwardIos />
        </Text>
        <Text className={classes.riderTeam} span>
          {` ${team || TEAM_PLACEHOLDER_TEXT}  `}
        </Text>
      </Title>
      <Flex justify="space-between">
        <CategoryBadges />
      </Flex>
    </div>
  );
};
