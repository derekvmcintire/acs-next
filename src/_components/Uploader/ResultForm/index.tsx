'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Center, Container, Flex, Select, Text, Textarea } from '@mantine/core';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import { processResults } from '@/src/_processers/results';
import Loader from '@/src/app/loading';
import Instructions from '../Instructions';
import classes from './result-form.module.css';

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

function ResultForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);

  const { selectedRace, setSelectedRace } = useUploaderContext();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const handleSubmitResults = async (data: ResultFormData) => {
    setIsLoading(true);
    const response = await processResults(selectedRace, data);
    if (!response) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setSuccess(true);
      reset();
    }
    setIsLoading(false);
  };

  const onSubmit = (data: ResultFormData) => {
    handleSubmitResults(data);
  };

  const handleChangeRace = () => {
    setSelectedRace('');
  };

  return (
    <Container>
      {success && <div>Results successfully created</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <Center>
          <Flex>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.resultsForm}>
              <Instructions />
              <Flex justify="center">
                <Text fw="700" className={classes.formSection}>
                  {`*Uploading Results for ${selectedRace.event.name} - ${selectedRace.startDate}*`}
                </Text>
              </Flex>
              <Flex justify="center" className={classes.formSection}>
                <Button onClick={handleChangeRace}>Select a Different Race</Button>
              </Flex>
              <Flex align="center" justify="center" gap="md">
                {/* Category Field */}
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: 'Category is required' }}
                  render={({ field }) => (
                    <Select
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
              </Flex>
              <Flex align="center" justify="center" gap="md">
                {/* Results Field */}
                <Controller
                  name="results"
                  control={control}
                  render={({ field }) => (
                    <Textarea
                      withAsterisk
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
          </Flex>
        </Center>
      )}
    </Container>
  );
}

export default ResultForm;
