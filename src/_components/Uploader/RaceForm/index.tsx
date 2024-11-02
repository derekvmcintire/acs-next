'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Center, Container, Flex, Select, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import Instructions from '@/src/_components/Uploader/Instructions';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import { createRaceBeforeResults } from '@/src/_processers/results';
import Loader from '@/src/app/loading';
import classes from './race-form.module.css';

/*
 {
        "id": 39,
        "eventId": 39,
        "raceTypeId": 1,
        "startDate": "Fri Sep 27 2024",
        "endDate": null,
        "location": "Volta Ciclista a Florence",
        "event": {
            "id": 39,
            "name": "Volta Ciclista a Florence"
        },
        "raceType": {
            "id": 1,
            "name": "Road",
            "description": "Road Race Type"
        }
    }
*/

export interface RaceFormData {
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
  const [success, setSuccess] = React.useState<boolean>(false);

  const { setSelectedRace } = useUploaderContext();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const handleSubmitRace = async (data: RaceFormData) => {
    setIsLoading(true);
    // const response = await createRaceBeforeResults(data)

    createRaceBeforeResults(data)
      .then((response) => {
        if (!response) {
          setIsLoading(false);
          // TODO: set error
        } else {
          setSelectedRace(response);
          setSuccess(true);
          reset();
          setIsLoading(false);
        }
        setIsLoading(false);
      })
      .catch(() => {
        // TODO set error
        setIsLoading(false);
      });
  };

  const onSubmit = (data: RaceFormData) => {
    handleSubmitRace(data);
  };

  return (
    <Container>
      {success && <div>Results successfully created</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <Center>
          <Flex className={classes.uploadContainer}>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.resultsForm}>
              <Instructions />
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
                {/* Submit Button */}
                <Button disabled={isLoading} type="submit">
                  Submit
                </Button>
              </Flex>
            </form>
          </Flex>
        </Center>
      )}
    </Container>
  );
}

export default RaceForm;
