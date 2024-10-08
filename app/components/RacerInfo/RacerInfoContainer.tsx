'use client';

import { Divider, Flex, Grid, Text } from '@mantine/core';
import { mockRacer } from '@/app/mock-data/mock';
import { IRacerInfo, ITeams } from '@/app/types';
import RacerInfoBlock from './RacerInfoBlock';
import RacerProfileImage from './RacerProfileImage';
import { RacerTitle } from './RacerTitle';
import classes from './RacerInfo.module.css';

const TopResults = () => (
  <Flex className={classes.blockTwo} justify="left">
    <div>
      <Divider size="sm" orientation="vertical" className={classes.divider} />
    </div>
    <div className={classes.blockTwoText}>
      <Text>Top Results</Text>
    </div>
  </Flex>
);

const UpcomingRaces = () => (
  <Flex className={classes.blockTwo} justify="left">
    <div>
      <Divider size="sm" orientation="vertical" className={classes.divider} />
    </div>
    <div className={classes.blockTwoText}>
      <Text>Upcoming Races</Text>
    </div>
  </Flex>
);

export default function RacerInfoContainer() {
  const racerInfo: IRacerInfo = mockRacer;

  const getCurrentTeam = (teams: ITeams[]): string => {
    const sortedTeams = teams.sort((a, b) => b.year - a.year);
    return sortedTeams[0].name;
  };

  return (
    <div className={classes.racerInfo}>
      <RacerTitle name={racerInfo.name} team={getCurrentTeam(racerInfo.teams)} />
      <Grid className={classes.infoGrid}>
        <Grid.Col span={4}>
          <Flex>
            <RacerProfileImage />
            <RacerInfoBlock />
            <p>hi</p>
          </Flex>
        </Grid.Col>
        <Grid.Col span={4}>
          <TopResults />
        </Grid.Col>
        <Grid.Col span={4}>
          <UpcomingRaces />
        </Grid.Col>
      </Grid>
    </div>
  );
}
