'use client';

import React from 'react';
import { RiderHistoryProvider } from '@/src/_contexts/Rider/RiderHistoryContext';
import { IRaceYear, IRiderInfo } from '@/src/_types';
import { RiderProvider } from '../../_contexts/Rider/RiderContext';
import PageWrapHoc from '../shared/PageWrap/PageWrapHoc';
import History from './History/History';
import InfoGrid from './InfoGrid/InfoGrid';
import { NameHeading } from './NameHeading/NameHeading';
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
        <RiderHistoryProvider initialHistory={history}>
          <PageWrapHoc>
            <NameHeading />
            <InfoGrid />
            <History />
          </PageWrapHoc>
        </RiderHistoryProvider>
      </RiderProvider>
    </div>
  );
}
