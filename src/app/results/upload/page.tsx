'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Flex, Select, Textarea, TextInput } from '@mantine/core';
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
  results?: string;
}

const DEFAULT_FORM_VALUES = {
  name: '',
  raceType: '',
  startDate: undefined,
  endDate: undefined,
  location: '',
  results: '',
};

function RaceForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [race, setRace] = React.useState<CreateRaceReturnData | undefined>(undefined);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex direction="column" align="center" justify="center" gap="md">
            {/* Name Field */}
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Name is required' }}
              render={({ field }) => (
                <TextInput
                  className={classes.formSection}
                  label="Name"
                  placeholder="Enter name"
                  error={String(errors.name?.message)}
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
                  label="Race Type"
                  placeholder="Select race type"
                  data={[
                    { value: 'type1', label: 'Type 1' },
                    { value: 'type2', label: 'Type 2' },
                    { value: 'type3', label: 'Type 3' },
                  ]}
                  error={String(errors.name?.message)}
                  {...field}
                />
              )}
            />

            {/* Start Date Field */}
            <Controller
              name="startDate"
              control={control}
              rules={{ required: 'Start date is required' }}
              render={({ field }) => (
                <DateInput
                  className={classes.formSection}
                  label="Start Date"
                  placeholder="Pick a start date"
                  error={String(errors.name?.message)}
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
                  label="End Date"
                  placeholder="Pick an end date"
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
                  label="Location"
                  placeholder="Enter location"
                  {...field}
                />
              )}
            />

            {/* Results Field */}
            <Controller
              name="results"
              control={control}
              render={({ field }) => (
                <Textarea
                  className={`${classes.formSection}`}
                  autosize
                  label="Results"
                  placeholder="Enter results"
                  minRows={8}
                  maxRows={20}
                  {...field}
                />
              )}
            />

            {/* Submit Button */}
            <Button disabled={isLoading} type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      )}
    </PageLayout>
  );
}

export default RaceForm;
