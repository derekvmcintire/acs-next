'use client';

import { Flex, Text, Title } from '@mantine/core';
import { MdArrowForwardIos } from 'react-icons/md';
import { ACS_COLOR_ORANGE } from '@/src/global-constants';
import { useRider } from '../../../_contexts/Rider/RiderContext';
import CategoryBadges from '../CategoryBadges';
import { getCurrentTeam } from '../utils';
import classes from '../rider.module.css';

const TEAM_PLACEHOLDER_TEXT = 'Unattached';
const NAME_PLACEHOLDER_TEXT = 'Rider Not Found';

export const NAME_HEADING_TEST_ID = 'name-heading';

export const NameHeading = () => {
  const { riderInfo } = useRider();
  const { name, teams } = riderInfo;

  const team = getCurrentTeam(teams || []);

  return (
    <div className={classes.nameHeading} data-testid={NAME_HEADING_TEST_ID}>
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
