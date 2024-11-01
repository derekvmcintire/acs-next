'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Flex, Select, Textarea, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { createRace } from '@/src/_api/create-race';
import { createRider, CreateRiderData } from '@/src/_api/create-rider';
import { getRidersByName } from '@/src/_api/get-riders-by-name';
import { IGetRidersResponse } from '@/src/_api/types';
import PageLayout from '@/src/_components/shared/PageLayout/PageLayout';
import { prepareResults } from '@/src/_utility/data/prepare-results';
import classes from './styles/page.module.css';

export interface ResultFormData {
  name: string;
  raceType: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
  results?: string;
}

export interface FullName {
  firstName: string;
  lastName: string;
}

function splitName(name: string): FullName {
  const lastSpaceIndex = name.lastIndexOf(' ');

  if (lastSpaceIndex === -1) return { firstName: '', lastName: name };

  const firstName = name.slice(0, lastSpaceIndex);
  const lastName = name.slice(lastSpaceIndex + 1);

  return {
    firstName,
    lastName,
  };
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
    console.log(data);
    // create race
    const { name, startDate, location, results } = data;

    const race = createRace({
      name,
      raceTypeId: 56,
      startDate: startDate ? startDate.toLocaleDateString() : new Date().toLocaleDateString(),
      endDate: '',
      location: location || '',
    });

    if (!race) {
      console.log('error creating race');
      return;
    }

    console.log('race created: ', race);
    // Convert results to object
    if (results) {
      const parsedResults = prepareResults(results);
      console.log(parsedResults);
      // for each result
      parsedResults.forEach((result: any) => {
        getRidersByName(result.name)
          .then((response: IGetRidersResponse) => {
            console.log('result', result);
            if (response && response?.error) {
              console.log('got error: ', response.error);
            } else {
              const riders = Array.isArray(response?.riders) ? response?.riders : [];
              if (riders.length < 1) {
                console.log('need to create a new rider');
                const riderName = result?.name || '';
                const { firstName, lastName } = splitName(riderName);

                const riderData: CreateRiderData = {
                  firstName,
                  lastName,
                  dob: '',
                  country: '',
                  hometown: result.hometowm || '',
                  photo: '',
                  strava: '',
                  insta: '',
                  about: '',
                };
                createRider(riderData)
                  .then((createdRider) => {
                    console.log('created rider! ', createdRider);
                  })
                  .catch((error) => {
                    console.log('error creating rider: ', error);
                  });
              }
            }
          })
          .catch((error) => {
            console.log('error bb: ', error);
            return null;
          });
      });
    }
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
                minRows={4}
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
