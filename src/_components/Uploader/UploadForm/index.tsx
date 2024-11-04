'use client';

import React from 'react';
import { Flex } from '@mantine/core';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import RaceForm from '../RaceForm';
import ResultForm from '../ResultForm';
import SideSearch from '../SideSearch';
import classes from './upload-form.module.css';

export default function UploadForm() {
  const { selectedRace } = useUploaderContext();

  return (
    <Flex justify="center" className={classes.raceSearchContainer}>
      <SideSearch />
      {selectedRace ? <ResultForm /> : <RaceForm />}
    </Flex>
  );
}
