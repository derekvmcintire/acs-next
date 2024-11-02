'use client';

import React from 'react';
import { GoSearch } from 'react-icons/go';
import { Autocomplete, Container } from '@mantine/core';
import InfoBlock from '../../ui/InfoBlock/InfoBlock';
import SectionLabel from '../../ui/SectionLabel/SectionLabel';
import classes from './side-search.module.css';

const icon = <GoSearch />;

export default function SideSearch() {
  return (
    <InfoBlock leftHanded className={classes.raceSearchInfoBlock} title="Search for a Race">
      <Container mb="36px">
        <SectionLabel text="Select a Race" />
        <Autocomplete
          size="xs"
          variant="filled"
          leftSectionPointerEvents="none"
          leftSection={icon}
          placeholder="Search for a Race"
          data={[]}
          limit={15}
          value=""
          onChange={() => {}}
          onOptionSubmit={() => {}}
        />
      </Container>
    </InfoBlock>
  );
}
