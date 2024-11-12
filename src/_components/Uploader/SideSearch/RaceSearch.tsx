'use client';

import React from 'react';
import { Container } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { fetchRaces } from '@/src/_api/get/races/fetch-races';
import { GetRacesResponse } from '@/src/_api/get/races/fetch-races-response-type';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import useDebounce from '@/src/_hooks/use-debounce';
import { getFormattedYearString, yearTrunc } from '@/src/_utility/date-helpers';
import SearchAutoComplete from '../../shared/SearchAutocomplete';
import SectionLabel from '../../ui/SectionLabel';

type SearchOption = {
  value: string;
  label: string;
};

type RaceSearchProps = {
  setError: Function;
};

export default function RaceSearch({ setError }: RaceSearchProps) {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 300); // 300ms debounce

  const { setSelectedRace } = useUploaderContext();

  // Fetch races using React Query
  const {
    data: searchResponse,
    isError,
    error,
  } = useQuery({
    queryKey: ['getRaces', debouncedSearchValue], // Query key ['uniquename', searchValue]
    queryFn: () => fetchRaces({ name: debouncedSearchValue }), // The query function
    enabled: debouncedSearchValue.length > 0, // Only run query if there's a search term
    staleTime: 5 * 60 * 1000, // caches data from requests for 5 minutes
  });

  const hasAvailableRaces = searchResponse?.races && searchResponse.races.length > 0;
  const searchRaces = searchResponse?.races || [];

  React.useEffect(() => {
    if (isError && error) {
      setError(String(error));
    } else {
      setError('');
    }
  }, [isError, error]);

  // build options from search results
  const options: SearchOption[] = React.useMemo(() => {
    if (hasAvailableRaces) {
      return searchRaces.map((race: GetRacesResponse) => {
        const year = getFormattedYearString(new Date(race.startDate));
        const useFourDigitFormat = true;
        return {
          value: String(race.id),
          label: `${race.event.name} ${yearTrunc(Number(year), useFourDigitFormat)}`,
        };
      });
    }
    return [];
  }, [searchResponse]);

  // find search result from option
  const findRaceById = React.useCallback(
    (id: number) => {
      if (hasAvailableRaces) {
        return searchRaces.find((race) => race.id === id);
      }
      return undefined;
    },
    [searchResponse]
  );

  const handleChange = React.useCallback((input: string) => {
    setSearchValue(input);
  }, []);

  const handleOptionSubmit = (option: string) => {
    const fullRace: GetRacesResponse | undefined = findRaceById(Number(option));
    setSelectedRace(fullRace); // need to type this
  };

  return (
    <Container mb="36px">
      <SectionLabel text="Select a Race" />
      <SearchAutoComplete
        leftSectionPointerEvents="none"
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
