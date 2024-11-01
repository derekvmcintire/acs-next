'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Flex, Select, Textarea, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import PageLayout from '@/src/_components/shared/PageLayout/PageLayout';
import { processResults } from '@/src/_processers/results';
import classes from './styles/page.module.css';

export interface ResultFormData {
  name: string;
  raceType: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  results?: string;
}

function RaceForm() {
  // Set default values for the form fields
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      raceType: '',
      startDate: undefined,
      endDate: undefined,
      location: '',
      results: '',
    },
  });

  const onSubmit = (data: ResultFormData) => {
    processResults(data).then((resp: any) => {
      console.log('finished handling submit results: ', resp);
    });
  };

  return (
    <PageLayout>
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
          <Button type="submit">Submit</Button>
        </Flex>
      </form>
    </PageLayout>
  );
}

export default RaceForm;
