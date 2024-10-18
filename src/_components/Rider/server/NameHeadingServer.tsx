import { MdArrowForwardIos } from 'react-icons/md';
import { Flex, Text, Title } from '@mantine/core';
import { IRiderInfo } from '@/src/_types';
import { ACS_COLOR_ORANGE } from '@/src/global-constants';
import CategoryBadges from '../client/CategoryBadges';
import { getCurrentTeam } from '../utils';
import { PrevAndNextRider } from './PrevAndNextRider';
import classes from '../styles/rider.module.css';

const TEAM_PLACEHOLDER_TEXT = 'n/a';

type NameHeadingProps = IRiderInfo;

export const NameHeadingServer = ({ name, dob, teams, categories, id }: NameHeadingProps) => {
  const team = getCurrentTeam(teams);

  return (
    <div className={classes.riderTitle}>
      <Title>
        <Text inherit c={ACS_COLOR_ORANGE} component="span">
          {`${name.first || ''} ${name.last || ''} `}
        </Text>
        <Text component="span">
          <MdArrowForwardIos />
        </Text>
        <Text className={classes.riderTeam} component="span">
          {` ${team || TEAM_PLACEHOLDER_TEXT}  `}
        </Text>
      </Title>
      <Flex justify="space-between">
        <CategoryBadges categories={categories} dob={dob} />
        <PrevAndNextRider id={id} />
      </Flex>
    </div>
  );
};
