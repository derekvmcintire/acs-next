import React from 'react';
import { GoSearch } from 'react-icons/go';
import { Autocomplete } from '@mantine/core';
import { getRidersByName } from '@/src/_api/get-riders-by-name';
import { IGetRidersResponse } from '@/src/_api/types';
import { IRiderInfo } from '@/src/_types';

const icon = <GoSearch />;

export default function Search() {
  const [value, setValue] = React.useState('');
  const [data, setData] = React.useState<string[]>([]);

  const handleChange = async (input: string) => {
    setValue(input);
    const response: IGetRidersResponse = await getRidersByName(input);
    if (response && response?.error) {
      console.log('got error: ', response.error);
    } else {
      const riders = response?.riders ? [response.riders] : [];
      const riderNames = riders.map(
        (rider: IRiderInfo) => `${rider.name.first} ${rider.name.last}`
      );
      setData(riderNames);
    }
  };
  return (
    <Autocomplete
      leftSectionPointerEvents="none"
      leftSection={icon}
      placeholder="Serch it bb"
      data={data}
      value={value}
      onChange={handleChange}
    />
  );
}
