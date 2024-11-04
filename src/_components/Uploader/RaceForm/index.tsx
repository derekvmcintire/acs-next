'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Flex, Select, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import Instructions from '@/src/_components/Uploader/Instructions';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import { createRaceBeforeResults } from '@/src/_processers/results';
import classes from './race-form.module.css';

import '@mantine/dates/styles.css';

import FormWrapper from '../FormWrapper';

export interface RaceFormData {
  name: string;
  raceType: string;
  startDate?: Date;
  endDate?: Date;
  location?: string;
}

const DEFAULT_FORM_VALUES = {
  name: '',
  raceType: '',
  startDate: undefined,
  endDate: undefined,
  location: '',
};

function RaceForm() {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const { setSelectedRace, setSuccessMessage, errors, setErrors } = useUploaderContext();

  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const name = watch('name');
  const raceType = watch('raceType');
  const startDate = watch('startDate');

  const isSubmitDisabled = !name || !raceType || !startDate || isSubmitting;

  const onSubmit = async (data: RaceFormData) => {
    if (isSubmitDisabled) {
      setErrors([...errors, 'Form Validation Failed']);
      return;
    }

    setIsSubmitting(true);
    createRaceBeforeResults(data)
      .then((response) => {
        if (!response) {
          setErrors([...errors, 'Form Submission Failed']);
          setIsSubmitting(false);
        } else {
          setSelectedRace(response);
          setSuccessMessage('Successfully Created Race');
          reset();
        }
        setIsSubmitting(false);
      })
      .catch((error: string) => {
        setErrors([...errors, error]);
        setIsSubmitting(false);
      });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Instructions />
        <Flex align="center" justify="center" gap="md">
          {/* Name Field */}
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Name is required' }}
            render={({ field }) => (
              <TextInput
                disabled={isSubmitting}
                className={classes.formSection}
                withAsterisk
                size="xs"
                label="Race Name"
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
                disabled={isSubmitting}
                className={classes.formSection}
                withAsterisk
                size="xs"
                label="Race Type"
                placeholder="Select race type"
                data={[
                  { value: 'type1', label: 'Gran Fondo' },
                  { value: 'type2', label: 'Road Race' },
                  { value: 'type3', label: 'Hill Climb' },
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
          <Button disabled={isSubmitDisabled} mt="16" type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </FormWrapper>
  );
}

export default RaceForm;
