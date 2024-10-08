'use client';
import { Grid } from '@mantine/core';
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
      <Grid>
        <Grid.Col span={4}>
          <Grid>
            <Grid.Col span={6}>
              <RacerProfileImage />
            </Grid.Col>
            <Grid.Col span={6}>
              <RacerInfoBlock />
            </Grid.Col>
        </Grid>
        </Grid.Col>
        <Grid.Col span={4}>2</Grid.Col>
        <Grid.Col span={4}>3</Grid.Col>
    </Grid>
      
    </div>
  );
}
