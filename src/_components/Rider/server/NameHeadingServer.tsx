import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { Anchor, Text, Title } from '@mantine/core';
import { IRiderInfo } from '@/src/_types';
import { ACS_COLOR_BLUE, ACS_COLOR_ORANGE } from '@/src/global-constants';
import CategoryBadges from '../client/CategoryBadges';
import { getCurrentTeam } from '../utils';
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
      <CategoryBadges categories={categories} dob={dob} />
      <Text ml="26" component="span">
        <MdArrowBackIos />
        <Anchor c={ACS_COLOR_BLUE} href={`http://localhost:3000/rider/${id ? id - 1 : 1}`}>
          {' Previous Rider'}
        </Anchor>
      </Text>
      <Text component="span">{' --- '}</Text>
      <Text component="span">
        <Anchor c={ACS_COLOR_BLUE} href={`http://localhost:3000/rider/${id ? Number(id) + 1 : 1}`}>
          {' Next Rider'}
        </Anchor>
        <MdArrowForwardIos />
      </Text>
    </div>
  );
};
