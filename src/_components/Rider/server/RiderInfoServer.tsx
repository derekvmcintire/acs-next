import React from 'react';
import { IRiderInfo } from '@/src/_types';
import InfoGrid from '../client/InfoGrid';
import { NameHeadingServer } from './NameHeadingServer';
import classes from '../styles/rider.module.css';

interface RiderInfoServerProps {
  riderInfo: IRiderInfo;
}

export default function RiderInfoServer({ riderInfo }: RiderInfoServerProps) {
  if (!riderInfo) {
    return <div>Did not work</div>;
  }

  return (
    <div className={classes.riderInfoServer} data-testid="rider-info-server">
      <NameHeadingServer data-testid="name-heading" {...riderInfo} />
      <InfoGrid {...riderInfo} />
    </div>
  );
}
