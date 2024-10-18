import React from 'react';
import { IRiderInfo } from '@/src/_types';
import InfoGrid from '../client/InfoGrid';
import { NameHeadingServer } from './NameHeadingServer';
import classes from '../styles/rider.module.css';

export const RIDER_INFO_TEST_ID = 'rider-info';

interface RiderInfoLayoutServerProps {
  riderInfo: IRiderInfo;
}

export default function RiderInfoLayoutServer({ riderInfo }: RiderInfoLayoutServerProps) {
  if (!riderInfo) {
    return <div>Did not work</div>;
  }

  return (
    <div className={classes.riderInfoServer} data-testid={RIDER_INFO_TEST_ID}>
      <NameHeadingServer data-testid="name-heading" {...riderInfo} />
      <InfoGrid {...riderInfo} />
    </div>
  );
}
