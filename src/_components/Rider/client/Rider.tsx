'use client';

import React from 'react';
import { IRaceYear, IRiderInfo } from '@/src/_types';
import { ColorSchemeToggle } from '../../ColorSchemeToggle/ColorSchemeToggle';
import ResultsTabs from '../../Results/client/ResultsTabs';
import { sortRacingDataByYear } from '../../Results/utils';
import { RiderProvider } from '../context/RiderContext';
import InfoGrid from './InfoGrid';
import { NameHeading } from './NameHeading';
import classes from '../styles/rider.module.css';

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
        <ResultsTabs history={sortRacingDataByYear(history)} />
        <ColorSchemeToggle />
      </RiderProvider>
    </div>
  );
}
