'use client';

import { Button, Container, ScrollArea } from '@mantine/core';
import dayjs from 'dayjs';
import React from 'react';
import { getRaces } from '@/src/_api/get/races/get-races';
import { GetRacesResponse } from '@/src/_api/get/races/get-races-response-type';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import { ACS_DARK_GREY } from '@/src/global-constants';
import SectionLabel from '../../ui/SectionLabel';
import classes from './side-search.module.css';

export default function SuggestedRaces() {
  const [suggestedRaces, setSuggestedRaces] = React.useState<GetRacesResponse[]>([]);
  const { setSelectedRace } = useUploaderContext();

  React.useEffect(() => {
    const getRecentRaces = async () => {
      const now = dayjs().format('YYYY-MM-DD');
      const oneMonthAgo = dayjs().subtract(2, 'year').format('YYYY-MM-DD');
      const response = await getRaces({ dateRange: { from: oneMonthAgo, to: now } });
      const races = response?.races || [];
      races.length = 30;
      setSuggestedRaces(response?.races || []);
    };

    getRecentRaces();
  }, []);

  const handleSelectSuggestedRace = (race: GetRacesResponse) => {
    setSelectedRace(race);
  };

  return (
    <>
      {suggestedRaces && (
        <Container mb="36px" className={classes.scrollArea}>
          <SectionLabel text="Suggested Races" />
          <ScrollArea h={250} w={170}>
            {suggestedRaces.map((race: GetRacesResponse) => (
              <div>
                <Button
                  size="xs"
                  variant="subtle"
                  className={classes.suggestedRaceButton}
                  color={ACS_DARK_GREY}
                  onClick={() => {
                    handleSelectSuggestedRace(race);
                  }}
                >
                  {race?.event && race.event?.name}
                </Button>
              </div>
            ))}
          </ScrollArea>
        </Container>
      )}
    </>
  );
}
