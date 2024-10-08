'use client';
import { Divider, Flex, Grid, Text } from '@mantine/core';
import { mockRacer } from '@/app/mock-data/mock';
import { IRacerInfo } from '@/app/types';
import RacerProfileImage from './RacerProfileImage';
import RacerInfoBlock from './RacerInfoBlock';
import classes from './RacerInfo.module.css';

export default function RacerInfoContainer() {
  const racerInfo: IRacerInfo = mockRacer;

  return (
    <div className={classes.racerInfo}>
      <h2>
        <span>{`${racerInfo?.name?.first || ''} ${racerInfo?.name?.last || ''} - `}</span>
        <span>{racerInfo.teams[racerInfo.teams.length - 1]?.name || 'n/a'}</span>
      </h2>
      <Grid className={classes.infoGrid}>
        <Grid.Col span={4}>
          <Flex>
          <RacerProfileImage />
          <RacerInfoBlock />
          </Flex>
        </Grid.Col>
        <Grid.Col span={4}>
          <Flex className={classes.blockTwo} justify="left">
          <div>
          <Divider size="sm" orientation="vertical" className={classes.divider}/>
          </div>
          <div className={classes.blockTwoText}><Text>Some information here</Text></div>
          
          </Flex>
          </Grid.Col>
        <Grid.Col span={4}>3</Grid.Col>
    </Grid>
      
    </div>
  );
}
