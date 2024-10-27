'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { GoSearch } from 'react-icons/go';
import { Autocomplete } from '@mantine/core';
import { getRidersByName } from '@/src/_api/get-riders-by-name';
import { IGetRidersResponse } from '@/src/_api/types';
import useDebounce from '@/src/_hooks/use-debounce';
import { IRiderInfo } from '@/src/_types';
import { APP_BASE_URL, APP_RIDER_PATH } from '@/src/global-constants';

const icon = <GoSearch />;

type SearchOptionType = {
  value: string;
  label: string;
};

export const RIDER_SEARCH_DATA_TEST_ID = 'rider-search';

export default function Search() {
  const [searchValue, setSearchValue] = React.useState('');
  const [data, setData] = React.useState<SearchOptionType[]>([]);
  const debouncedSearchValue = useDebounce(searchValue, 300); // 300ms debounce

  const router = useRouter();

  React.useEffect(() => {
    const search = async () => {
      const response: IGetRidersResponse = await getRidersByName(debouncedSearchValue);
      if (response && response?.error) {
        console.log('got error: ', response.error);
      } else {
        const riders = Array.isArray(response?.riders) ? response?.riders : [];

        const riderNames = riders.map((rider: IRiderInfo) => ({
          value: String(rider.id),
          label: `${rider.name.first} ${rider.name.last}`,
        }));
        setData(riderNames);
      }
    };
    search();
  }, [debouncedSearchValue]);

  const handleChange = React.useCallback((input: string) => {
    setSearchValue(input);
  }, []);

  const handleOptionSubmit = (option: string) => {
    const riderUrl = `${APP_BASE_URL}${APP_RIDER_PATH}/${option}`;
    router.push(riderUrl);
  };

  return (
    <div data-testid={RIDER_SEARCH_DATA_TEST_ID}>
      <Autocomplete
        leftSectionPointerEvents="none"
        leftSection={icon}
        placeholder="Search for Riders"
        data={data}
        limit={15}
        value={searchValue}
        onChange={handleChange}
        onOptionSubmit={handleOptionSubmit}
      />
    </div>
  );
}
