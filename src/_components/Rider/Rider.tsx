'use client';

import React from 'react';
import { IRaceYear, IRiderInfo } from '@/src/_types';
import { ColorSchemeToggle } from '../shared/ColorSchemeToggle/ColorSchemeToggle';
import History from './History/History';
import InfoGrid from './InfoGrid/InfoGrid';
import { NameHeading } from './NameHeading/NameHeading';
import { RiderProvider } from './RiderContext/RiderContext';
import { sortRacingDataByYear } from './utils';
import classes from './rider.module.css';

export const RIDER_INFO_TEST_ID = 'rider-info';

interface RiderProps {
  riderInfo: IRiderInfo;
  riderTeamMembers: IRiderInfo[];
  history: IRaceYear[];
}

export default function Rider({ riderInfo, riderTeamMembers, history }: RiderProps) {
  return (
    <div className={classes.riderInfoServer} data-testid={RIDER_INFO_TEST_ID}>
      <RiderProvider initialRiderInfo={riderInfo} initialRiderTeamMembers={riderTeamMembers}>
        <NameHeading />
        <InfoGrid />
        <History history={sortRacingDataByYear(history)} />
        <ColorSchemeToggle />
      </RiderProvider>
    </div>
  );
}
