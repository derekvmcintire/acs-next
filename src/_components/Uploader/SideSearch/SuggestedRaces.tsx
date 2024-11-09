'use client';

import { Button, Container, ScrollArea } from '@mantine/core';
import dayjs from 'dayjs';
import React from 'react';
import { getRaces } from '@/src/_api/get/races/get-races';
import { GetRacesResponse } from '@/src/_api/get/races/get-races-response-type';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import { DEFAULT_DATE_FORMAT } from '@/src/global-constants';
import SectionLabel from '../../ui/SectionLabel';
import classes from './side-search.module.css';

export default function SuggestedRaces() {
  const [suggestedRaces, setSuggestedRaces] = React.useState<GetRacesResponse[]>([]);
  const { setSelectedRace } = useUploaderContext();

  React.useEffect(() => {
    const getRecentRaces = async () => {
      const now = dayjs().format(DEFAULT_DATE_FORMAT);
      const numberOfMonthsBack = 3;
      const fromDate = dayjs().subtract(numberOfMonthsBack, 'month').format(DEFAULT_DATE_FORMAT);
      const response = await getRaces({ dateRange: { from: fromDate, to: now } });
      const maxNumberOfRaces = 30;
      const races = (response?.races || []).slice(0, maxNumberOfRaces);
      setSuggestedRaces(races);
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
              <div key={race.id}>
                <Button
                  size="xs"
                  variant="transparent"
                  className={classes.suggestedRaceButton}
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
