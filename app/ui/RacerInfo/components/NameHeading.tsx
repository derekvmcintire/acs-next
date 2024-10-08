'use client';

import { Text, Title } from '@mantine/core';
import { IRiderName } from '@/app/types';
import classes from '../styles/RacerInfo.module.css';

interface IRiderTitleProps {
  name: IRiderName;
  team: string;
}

export const NameHeading = ({ name, team }: IRiderTitleProps) => {
  const TEAM_PLACEHOLDER_TEXT = 'n/a';
  return (
    <Title ta="left" pr={40} pb={20} className={classes.riderTitle}>
      <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
        {`${name?.first || ''} ${name?.last || ''}`}
      </Text>
      <Text className={classes.riderTeam} component="span">
        {` - ${team || TEAM_PLACEHOLDER_TEXT}`}
      </Text>
    </Title>
  );
};
