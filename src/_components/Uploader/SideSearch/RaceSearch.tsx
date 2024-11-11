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
    data: availableRaces,
    isError,
    error,
  } = useQuery({
    queryKey: ['races', debouncedSearchValue], // Query key with search term
    queryFn: () => fetchRaces({ name: debouncedSearchValue }), // The query function
    enabled: debouncedSearchValue.length > 0, // Only run query if there's a search term
  });

  const hasAvailableRaces = availableRaces?.races && availableRaces.races.length > 0;
  const bitchAssRaces = availableRaces?.races || [];

  React.useEffect(() => {
    if (isError && error) {
      setError(String(error));
    } else {
      setError('');
    }
  }, [isError, error]);

  const options: SearchOption[] = React.useMemo(() => {
    if (hasAvailableRaces) {
      return bitchAssRaces.map((race: GetRacesResponse) => {
        const year = getFormattedYearString(new Date(race.startDate));
        const useFourDigitFormat = true;
        return {
          value: String(race.id),
          label: `${race.event.name} ${yearTrunc(Number(year), useFourDigitFormat)}`,
        };
      });
    }
    return [];
  }, [availableRaces]);

  const findRaceById = React.useCallback(
    (id: number) => {
      if (hasAvailableRaces) {
        return bitchAssRaces.find((race) => race.id === id);
      }
      return undefined;
    },
    [availableRaces]
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

// 'use client';

// import React from 'react';
// import { Container } from '@mantine/core';
// import { fetchRaces } from '@/src/_api/get/races/fetch-races';
// import { GetRacesResponse } from '@/src/_api/get/races/fetch-races-response-type';
// import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
// import useDebounce from '@/src/_hooks/use-debounce';
// import { getFormattedYearString, yearTrunc } from '@/src/_utility/date-helpers';
// import SearchAutoComplete from '../../shared/SearchAutocomplete';
// import SectionLabel from '../../ui/SectionLabel';

// type SearchOption = {
//   value: string;
//   label: string;
// };

// type RaceSearchProps = {
//   setError: Function;
// };

// export default function RaceSearch({ setError }: RaceSearchProps) {
//   const [options, setOptions] = React.useState<SearchOption[]>([]);
//   const [availableRaces, setAvailableRaces] = React.useState<GetRacesResponse[]>([]);
//   const [searchValue, setSearchValue] = React.useState<string>('');
//   const debouncedSearchValue = useDebounce(searchValue, 300); // 300ms debounce

//   const { setSelectedRace } = useUploaderContext();

//   React.useEffect(() => {
//     const search = async () => {
//       if (!debouncedSearchValue || debouncedSearchValue === '') {
//         setOptions([]);
//         return;
//       }
//       const response = await fetchRaces({ name: debouncedSearchValue });
//       if (response && response?.error) {
//         setError(String(response.error));
//       } else {
//         const races = Array.isArray(response?.races) ? response?.races : [];
//         setAvailableRaces(races);

//         const raceOptions = races.map((race: GetRacesResponse) => {
//           const year = getFormattedYearString(new Date(race.startDate));
//           const useFourDigitFormat = true;
//           return {
//             value: String(race.id),
//             label: `${race.event.name} ${yearTrunc(Number(year), useFourDigitFormat)}`,
//           };
//         });
//         setOptions(raceOptions);
//       }
//     };
//     search();
//   }, [debouncedSearchValue]);

//   const findRaceById = React.useCallback(
//     (id: number) => {
//       return availableRaces.find((race) => race.id === id);
//     },
//     [availableRaces]
//   );

//   const handleChange = React.useCallback((input: string) => {
//     setSearchValue(input);
//   }, []);

//   const handleOptionSubmit = (option: string) => {
//     const fullRace = findRaceById(Number(option));
//     setSelectedRace(fullRace);
//   };

//   return (
//     <Container mb="36px">
//       <SectionLabel text="Select a Race" />
//       <SearchAutoComplete
//         leftSectionPointerEvents="none"
//         placeholder="Search for a Race"
//         data={options}
//         limit={15}
//         value={searchValue}
//         onChange={handleChange}
//         onOptionSubmit={handleOptionSubmit}
//       />
//     </Container>
//   );
// }
