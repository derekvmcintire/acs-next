'use client';

import { Button, Container, ScrollArea, Text } from '@mantine/core';
import dayjs from 'dayjs';
import React from 'react';
import { fetchRaces } from '@/src/_api/get/races/fetch-races';
import { GetRacesResponse } from '@/src/_api/get/races/fetch-races-response-type';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import { DEFAULT_DATE_FORMAT } from '@/src/global-constants';
import SectionLabel from '../../ui/SectionLabel';
import classes from './side-search.module.css';

type SuggestedRacesProps = {
  setError: Function;
};

export default function SuggestedRaces({ setError }: SuggestedRacesProps) {
  const [suggestedRaces, setSuggestedRaces] = React.useState<GetRacesResponse[]>([]);
  const { setSelectedRace } = useUploaderContext();

  React.useEffect(() => {
    const fetchSuggestedRaces = async () => {
      try {
        const now = dayjs().format(DEFAULT_DATE_FORMAT);
        const numberOfMonthsBack = 3;
        const fromDate = dayjs().subtract(numberOfMonthsBack, 'month').format(DEFAULT_DATE_FORMAT);
        const response = await fetchRaces({ dateRange: { from: fromDate, to: now } });
        const maxNumberOfRaces = 30;
        const races = (response?.races || []).slice(0, maxNumberOfRaces);
        setSuggestedRaces(races);
      } catch (error) {
        setError(String(error));
      }
    };

    fetchSuggestedRaces();
  }, []);

  const handleSelectSuggestedRace = (race: GetRacesResponse) => {
    setSelectedRace(race);
  };

  return (
    <>
      <Container mb="36px" className={classes.scrollArea}>
        <SectionLabel text="Suggested Races" />
        {suggestedRaces.length > 0 ? (
          <ScrollArea h={250} w={170}>
            {suggestedRaces.map(
              (race: GetRacesResponse) =>
                race?.event &&
                race.event?.name && (
                  <div key={race.id}>
                    <Button
                      size="xs"
                      variant="transparent"
                      className={classes.suggestedRaceButton}
                      onClick={() => handleSelectSuggestedRace(race)}
                    >
                      {race.event.name}
                    </Button>
                  </div>
                )
            )}
          </ScrollArea>
        ) : (
          <Text size="xs">No Suggested Races Found</Text>
        )}
      </Container>
    </>
  );
}
