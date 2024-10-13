import { MdArrowForwardIos } from 'react-icons/md';
import { Text, Title } from '@mantine/core';
import { IRiderName } from '@/app/types';
import classes from '../styles/RacerInfo.module.css';

interface IRiderTitleProps {
  name: IRiderName;
  team: string;
}

export const NameHeading = ({ name, team }: IRiderTitleProps) => {
  const { first, last } = name;
  const TEAM_PLACEHOLDER_TEXT = 'n/a';

  return (
    <Title className={classes.riderTitle}>
      <Text inherit c="orange" component="span">
        {`${first || ''} ${last || ''} `}
      </Text>
      <Text component="span">
        <MdArrowForwardIos />
      </Text>
      <Text className={classes.riderTeam} component="span">
        {` ${team || TEAM_PLACEHOLDER_TEXT}`}
      </Text>
    </Title>
  );
};
