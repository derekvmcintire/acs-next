'use client';

import React from 'react';
import { Center, Flex } from '@mantine/core';
import { GetRiderResponse } from '@/src/_api/get/riders/get-riders-response-type';
import { RiderHistoryProvider } from '@/src/_contexts/Rider/RiderHistoryContext';
import { RiderProvider } from '../../_contexts/Rider/RiderContext';
import PageLayout from '../Shared/PageLayout';
import History from './History/History';
import InfoGrid from './InfoGrid/InfoGrid';
import { NameHeading } from './NameHeading/NameHeading';
import TeamList from './TeamList/TeamList';
import classes from './rider.module.css';
import { YearlyResults } from '@/src/_api/get/history/get-history-response-type';

export const RIDER_INFO_TEST_ID = 'rider-info';

interface RiderProps {
  riderInfo: GetRiderResponse;
  riderTeamMembers: GetRiderResponse[];
  history: YearlyResults[];
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
