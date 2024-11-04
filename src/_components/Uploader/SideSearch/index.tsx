'use client';

import dayjs from 'dayjs';
import React from 'react';
import { GoSearch } from 'react-icons/go';
import { Autocomplete, Button, Container, ScrollArea } from '@mantine/core';
import { getRaces } from '@/src/_api/get-races';
import { getRacesByName } from '@/src/_api/get-races-by-name';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import useDebounce from '@/src/_hooks/use-debounce';
import { IExistingRace } from '@/src/_types';
import { getFormattedYearString, yearTrunc } from '@/src/_utility/date-helpers';
import { ACS_COLOR_ORANGE, ACS_DARK_GREY } from '@/src/global-constants';
import InfoBlock from '../../ui/InfoBlock/InfoBlock';
import SectionLabel from '../../ui/SectionLabel/SectionLabel';
import classes from './side-search.module.css';

const icon = <GoSearch />;

type SearchOptionType = {
  value: string;
  label: string;
};

export default function SideSearch() {
  const [suggestedRaces, setSuggestedRaces] = React.useState<IExistingRace[]>([]);
  const [options, setOptions] = React.useState<SearchOptionType[]>([]);
  const [availableRaces, setAvailableRaces] = React.useState<any[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 300); // 300ms debounce

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

  React.useEffect(() => {
    const search = async () => {
      if (!debouncedSearchValue || debouncedSearchValue === '') {
        setOptions([]);
        return;
      }
      const response: any = await getRacesByName(debouncedSearchValue);
      if (response && response?.error) {
        throw new Error(String(response.error));
      } else {
        const races = Array.isArray(response?.races) ? response?.races : [];
        setAvailableRaces(races);

        const raceOptions = races.map((race: any) => {
          const year = getFormattedYearString(new Date(race.startDate));
          const useFourDigitFormat = true;
          return {
            value: String(race.id),
            label: `${race.event.name} ${yearTrunc(Number(year), useFourDigitFormat)}`,
          };
        });
        setOptions(raceOptions);
      }
    };
    search();
  }, [debouncedSearchValue]);

  const findAvailableRaceFromId = (id: number) => {
    return availableRaces.find((race) => race.id === id);
  };

  const handleChange = React.useCallback((input: string) => {
    setSearchValue(input);
  }, []);

  const handleOptionSubmit = (option: string) => {
    const fullRace = findAvailableRaceFromId(Number(option));
    setSelectedRace(fullRace);
  };

  const handleSelectSuggestedRace = (race: IExistingRace) => {
    setSelectedRace(race);
  };

  return (
    <InfoBlock leftHanded className={classes.raceSearchInfoBlock} title="Search for a Race">
      <Container mb="36px">
        <SectionLabel text="Select a Race" />
        <Autocomplete
          leftSectionPointerEvents="none"
          leftSection={icon}
          placeholder="Search for a Race"
          data={options}
          limit={15}
          value={searchValue}
          onChange={handleChange}
          onOptionSubmit={handleOptionSubmit}
        />
      </Container>
      {suggestedRaces && (
        <Container mb="36px" className={classes.scrollArea}>
          <SectionLabel text="Suggested Races" />
          <ScrollArea h={250} w={170}>
            {suggestedRaces.map((race: IExistingRace) => (
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
    </InfoBlock>
  );
}
