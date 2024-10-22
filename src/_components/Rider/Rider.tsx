'use client';

import React from 'react';
import { Center, Flex } from '@mantine/core';
import { RiderHistoryProvider } from '@/src/_contexts/Rider/RiderHistoryContext';
import { IRaceYear, IRiderInfo } from '@/src/_types';
import { RiderProvider } from '../../_contexts/Rider/RiderContext';
import PageLayout from '../shared/PageLayout/PageLayout';
import History from './History/History';
import InfoGrid from './InfoGrid/InfoGrid';
import { NameHeading } from './NameHeading/NameHeading';
import TeamList from './TeamList/TeamList';
import classes from './rider.module.css';

export const RIDER_INFO_TEST_ID = 'rider-info';

interface RiderProps {
  riderInfo: IRiderInfo;
  riderTeamMembers: IRiderInfo[];
  history: IRaceYear[];
}

export default function Rider({ riderInfo, riderTeamMembers, history }: RiderProps) {
  return (
    <Center data-testid={RIDER_INFO_TEST_ID}>
      <RiderProvider initialRiderInfo={riderInfo} initialRiderTeamMembers={riderTeamMembers}>
        <RiderHistoryProvider initialHistory={history}>
          <PageLayout>
            <NameHeading />
            <InfoGrid />
            <Flex className={classes.historyAndTeamList} justify="center">
              <History />
              <TeamList />
            </Flex>
          </PageLayout>
        </RiderHistoryProvider>
      </RiderProvider>
    </Center>
  );
}
