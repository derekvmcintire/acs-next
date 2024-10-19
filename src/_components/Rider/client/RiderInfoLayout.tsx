'use client';

import React from 'react';
import { IRiderInfo } from '@/src/_types';
import { RiderProvider } from '../context/RiderContext';
import InfoGrid from './InfoGrid';
import { NameHeading } from './NameHeading';
import classes from '../styles/rider.module.css';

export const RIDER_INFO_TEST_ID = 'rider-info';

interface RiderInfoLayoutProps {
  riderInfo: IRiderInfo;
  riderTeamMembers: IRiderInfo[];
}

export default function RiderInfoLayout({ riderInfo, riderTeamMembers }: RiderInfoLayoutProps) {
  return (
    <div className={classes.riderInfoServer} data-testid={RIDER_INFO_TEST_ID}>
      <RiderProvider initialRiderInfo={riderInfo} initialRiderTeamMembers={riderTeamMembers}>
        <NameHeading />
        <InfoGrid />
      </RiderProvider>
    </div>
  );
}
