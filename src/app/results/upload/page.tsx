'use client';

import React from 'react';
// import { useForm } from 'react-hook-form';
import { Center, Flex } from '@mantine/core';
// import { CreateRaceReturnData } from '@/src/_api/create-race';
import PageLayout from '@/src/_components/shared/PageLayout/PageLayout';
import RaceForm from '@/src/_components/Uploader/RaceForm';
import ResultForm from '@/src/_components/Uploader/ResultForm';
import SideSearch from '@/src/_components/Uploader/SideSearch';
import classes from './styles/page.module.css';

function UploadFormPage() {
  return (
    <PageLayout>
      <Center className={classes.pageCenter}>
        <Flex justify="center" className={classes.raceSearchContainer}>
          <SideSearch />
          {true ? <ResultForm /> : <RaceForm />}
        </Flex>
      </Center>
    </PageLayout>
  );
}

export default UploadFormPage;
