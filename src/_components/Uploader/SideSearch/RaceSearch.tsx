'use client';

import React from 'react';
import { GoSearch } from 'react-icons/go';
import { Autocomplete, Container } from '@mantine/core';
import { getRaces } from '@/src/_api/get/races/get-races';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import useDebounce from '@/src/_hooks/use-debounce';
import { getFormattedYearString, yearTrunc } from '@/src/_utility/date-helpers';
import SectionLabel from '../../ui/SectionLabel';

const icon = <GoSearch />;

type SearchOptionType = {
  value: string;
  label: string;
};

export default function Component() {
  const [options, setOptions] = React.useState<SearchOptionType[]>([]);
  const [availableRaces, setAvailableRaces] = React.useState<any[]>([]);
  const [searchValue, setSearchValue] = React.useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 300); // 300ms debounce

  const { setSelectedRace } = useUploaderContext();

  React.useEffect(() => {
    const search = async () => {
      if (!debouncedSearchValue || debouncedSearchValue === '') {
        setOptions([]);
        return;
      }
      const response = await getRaces({ name: debouncedSearchValue });
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

  return (
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
  );
}
