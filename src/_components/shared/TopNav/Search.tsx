'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { fetchListOfRiders } from '@/src/_api/get/riders/fetch-rider';
import { GetRiderResponse } from '@/src/_api/get/riders/fetch-riders-response-type';
import { IGetRidersResponse } from '@/src/_api/types';
import useDebounce from '@/src/_hooks/use-debounce';
import { APP_BASE_URL, APP_RIDER_PATH } from '@/src/global-constants';
import SearchAutoComplete from '../SearchAutocomplete';

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
      const response: IGetRidersResponse = await fetchListOfRiders({ name: debouncedSearchValue });
      if (response && response?.error) {
        throw new Error(String(response.error));
      } else {
        const riders = Array.isArray(response?.riders) ? response?.riders : [];

        const riderNames = riders.map((rider: GetRiderResponse) => ({
          value: String(rider.id),
          label: `${rider.name.first} ${rider.name.last}`,
        }));
        setData(riderNames);
      }
    };

    if (debouncedSearchValue) {
      search();
    }
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
      <SearchAutoComplete
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
