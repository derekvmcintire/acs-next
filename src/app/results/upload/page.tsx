'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Center, Flex, Select, Text, Textarea, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { CreateRaceReturnData } from '@/src/_api/create-race';
import PageLayout from '@/src/_components/shared/PageLayout/PageLayout';
import { processResults } from '@/src/_processers/results';
import Loader from '../../loading';
import classes from './styles/page.module.css';

export interface ResultFormData {
  name: string;
  raceType: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  category?: string;
  results?: string;
}

const DEFAULT_FORM_VALUES = {
  name: '',
  raceType: '',
  startDate: undefined,
  endDate: undefined,
  location: '',
  category: '',
  results: '',
};

function RaceForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [race, setRace] = React.useState<CreateRaceReturnData | undefined>(undefined);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const handleSubmitResults = async (data: ResultFormData) => {
    setIsLoading(true);
    const response = await processResults(data);
    if (!response) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
      reset();
      setRace(response.race);
    }
    setIsLoading(false);
  };

  const onSubmit = (data: ResultFormData) => {
    handleSubmitResults(data);
  };

  return (
    <PageLayout>
      {race && <div>Results successfully created</div>}

      {isLoading ? (
        <Loader />
      ) : (
        <Center>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.resultsForm}>
            <section>
              <Flex mb={16} align="center" justify="center" gap="md">
                <Text fw="700">Results Upload Form</Text>
              </Flex>
              <Flex align="center" justify="center">
                <Text size="sm" className={classes.textFlex}>
                  To upload results to ACS, you can paste tab or comma separated values into the
                  text area below. If your data is space separated, this uploader will not work. The
                  first line must be the headers, ideally in the following format:
                </Text>
              </Flex>
              <Flex align="center" justify="center">
                <Text size="sm" className={classes.textFlex}>
                  “place,name,category,hometown,lap,time,gap”.{' '}
                </Text>
              </Flex>
              <Flex align="center" justify="center">
                <Text size="sm" className={classes.textFlex}>
                  Any columns that are not integrated into the database schema,or have a blank or
                  empty header will be ignored. Tips: you can try copying data straight from results
                  tables on web pages, or pdf documents.
                </Text>
              </Flex>
            </section>
            <Flex align="center" justify="center" gap="md">
              {/* Name Field */}
              <Controller
                name="name"
                control={control}
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                  <TextInput
                    className={classes.formSection}
                    withAsterisk
                    size="xs"
                    label="Name"
                    placeholder="Enter name"
                    {...field}
                  />
                )}
              />

              {/* Race Type Field */}
              <Controller
                name="raceType"
                control={control}
                rules={{ required: 'Race type is required' }}
                render={({ field }) => (
                  <Select
                    className={classes.formSection}
                    withAsterisk
                    size="xs"
                    label="Race Type"
                    placeholder="Select race type"
                    data={[
                      { value: 'type1', label: 'Category 1' },
                      { value: 'type2', label: 'Category 2' },
                      { value: 'type3', label: 'Category 3' },
                    ]}
                    {...field}
                  />
                )}
              />
            </Flex>
            <Flex align="center" justify="center" gap="md">
              {/* Start Date Field */}
              <Controller
                name="startDate"
                control={control}
                rules={{ required: 'Start date is required' }}
                render={({ field }) => (
                  <DateInput
                    className={classes.formSection}
                    withAsterisk
                    size="xs"
                    label="Start Date"
                    placeholder="Pick a start date"
                    {...field}
                  />
                )}
              />

              {/* End Date Field */}
              <Controller
                name="endDate"
                control={control}
                render={({ field }) => (
                  <DateInput
                    className={classes.formSection}
                    size="xs"
                    label="End Date"
                    placeholder="Pick an end date"
                    {...field}
                  />
                )}
              />
            </Flex>
            <Flex align="center" justify="center" gap="md">
              {/* Category Field */}
              <Controller
                name="category"
                control={control}
                rules={{ required: 'Category is required' }}
                render={({ field }) => (
                  <Select
                    className={classes.formSection}
                    withAsterisk
                    size="xs"
                    label="Category"
                    placeholder="Select category"
                    data={[
                      { value: 'type1', label: 'Type 1' },
                      { value: 'type2', label: 'Type 2' },
                      { value: 'type3', label: 'Type 3' },
                    ]}
                    {...field}
                  />
                )}
              />
              {/* Location Field */}
              <Controller
                name="location"
                control={control}
                render={({ field }) => (
                  <TextInput
                    className={classes.formSection}
                    size="xs"
                    label="Location"
                    placeholder="Enter location"
                    {...field}
                  />
                )}
              />
            </Flex>
            <Flex align="center" justify="center" gap="md">
              {/* Results Field */}
              <Controller
                name="results"
                control={control}
                render={({ field }) => (
                  <Textarea
                    className={classes.textArea}
                    autosize
                    label="Results"
                    placeholder="Enter results"
                    minRows={8}
                    maxRows={20}
                    {...field}
                  />
                )}
              />
            </Flex>
            <Flex align="center" justify="center" gap="md">
              {/* Submit Button */}
              <Button disabled={isLoading} type="submit">
                Submit
              </Button>
            </Flex>
          </form>
        </Center>
      )}
    </PageLayout>
  );
}

export default RaceForm;
