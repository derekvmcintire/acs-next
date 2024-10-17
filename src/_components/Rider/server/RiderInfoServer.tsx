import React from 'react';
import { IRiderInfo } from '@/src/_types';
import InfoGrid from '../client/InfoGrid';
import { NameHeadingServer } from './NameHeadingServer';
import classes from '../styles/rider.module.css';

interface RiderInfoServerProps {
  riderInfo: IRiderInfo;
}

export default async function RiderInfoServer({ riderInfo }: RiderInfoServerProps) {
  if (!riderInfo) {
    return <div>Did not work</div>;
  }

  return (
    <div className={classes.riderInfoServer}>
      <div className={classes.nameHeadingServerWrap}>
        <NameHeadingServer data-testid="name-heading" {...riderInfo} />
      </div>
      <div className={classes.infoGridWrap}>
        <InfoGrid {...riderInfo} />
      </div>
    </div>
  );
}
