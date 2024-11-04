'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Center, Container, Flex, MultiSelect, Text, Textarea } from '@mantine/core';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import { processResults } from '@/src/_processers/results';
import { ICategory } from '@/src/_types';
import Loader from '@/src/app/loading';
import Instructions from '../Instructions';
import classes from './result-form.module.css';

export interface ResultFormData {
  categories: string[];
  results: string;
}

const DEFAULT_FORM_VALUES = {
  categories: [],
  results: '',
};

function ResultForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean>(false);

  const { selectedRace, setSelectedRace, categoryOptions, errors, setErrors } =
    useUploaderContext();

  const categorySelectOptions = () =>
    categoryOptions
      .map((option: ICategory) => {
        return {
          value: String(option?.id || '1'), // Default to '1' if option.id is falsy
          label: option?.name || 'categories name missing', // Default label if option.name is missing
        };
      })
      .sort((a, b) => a.label.localeCompare(b.label)); // Use localeCompare for string sorting

  const { control, handleSubmit, reset } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const isFormValid = (data: ResultFormData): boolean => {
    const { results, categories } = data;
    if (!results || !categories) {
      //does not pass validation
      setErrors([...errors, 'Must select at least one category and provide results']);
      return false;
    }
    return true;
  };

  const handleSubmitResults = async (data: ResultFormData) => {
    setIsLoading(true);

    if (!isFormValid(data)) {
      setIsLoading(false);
      return;
    }

    const { results, categories } = data;
    const response = await processResults(selectedRace, results, categories);
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
                  name="categories"
                  control={control}
                  rules={{ required: 'Category is required' }}
                  render={({ field }) => (
                    <MultiSelect
                      withAsterisk
                      className={classes.categoryOptions}
                      size="xs"
                      clearable
                      label="Category"
                      placeholder="Select categories"
                      data={categorySelectOptions()}
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
