'use client';

import { Autocomplete } from '@mantine/core';
import React from 'react';
import { GoSearch } from 'react-icons/go';
import classes from './search-autocomplete.module.css';

const icon = <GoSearch />;

export type SearchOption = {
  value: string;
  label: string;
};

interface SearchAutoCompleteProps {
  leftSectionPointerEvents?: React.CSSProperties['pointerEvents'] | undefined;
  placeholder?: string;
  data: SearchOption[];
  limit: number;
  value: string;
  onChange: (value: string) => void;
  onOptionSubmit: (value: string) => void;
}

export default function SearchAutoComplete({
  leftSectionPointerEvents = 'none',
  placeholder = 'search',
  data,
  limit,
  value,
  onChange,
  onOptionSubmit,
}: SearchAutoCompleteProps) {
  return (
    <Autocomplete
      classNames={{
        input: classes.searchAutocomplete,
        dropdown: classes.raceSearchAutocomplete,
      }}
      leftSectionPointerEvents={leftSectionPointerEvents}
      leftSection={icon}
      placeholder={placeholder}
      data={data}
      limit={limit}
      value={value}
      onChange={onChange}
      onOptionSubmit={onOptionSubmit}
    />
  );
}
