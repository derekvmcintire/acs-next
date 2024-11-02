'use client';

import React from 'react';
import { GoSearch } from 'react-icons/go';
import { Autocomplete, Container } from '@mantine/core';
import { getRacesByName } from '@/src/_api/get-races-by-name';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import useDebounce from '@/src/_hooks/use-debounce';
import { getFormattedYearString, yearTrunc } from '@/src/_utility/date-helpers';
import InfoBlock from '../../ui/InfoBlock/InfoBlock';
import SectionLabel from '../../ui/SectionLabel/SectionLabel';
import classes from './side-search.module.css';

const icon = <GoSearch />;

type SearchOptionType = {
  value: string;
  label: string;
};

export default function SideSearch() {
  const [options, setOptions] = React.useState<SearchOptionType[]>([]);
  const [availableRaces, setAvailableRaces] = React.useState<any[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 300); // 300ms debounce

  const { setSelectedRace } = useUploaderContext();

  React.useEffect(() => {
    const search = async () => {
      console.log(debouncedSearchValue);
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
    console.log('option: ', option);
    const fullRace = findAvailableRaceFromId(Number(option));
    setSelectedRace(fullRace);
    console.log('availableRaces be: ', availableRaces);
    console.log('full race: ', fullRace);
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
    </InfoBlock>
  );
}
