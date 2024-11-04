'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Container, Flex, MultiSelect, Text, Textarea } from '@mantine/core';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import { processResults } from '@/src/_processers/results';
import { ICategory } from '@/src/_types';
import { ACS_DARK_GREY } from '@/src/global-constants';
import FormWrapper from '../FormWrapper';
import Instructions from '../Instructions';
import classes from './result-form.module.css';

interface ResultFormData {
  categories: string[];
  results: string;
}

const DEFAULT_FORM_VALUES = {
  categories: [],
  results: '',
};

function ResultForm() {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const { selectedRace, setSelectedRace, categoryOptions, errors, setErrors, setSuccessMessage } =
    useUploaderContext();

  type Option = {
    value: string;
    label: string;
  };

  const categorySelectOptions = () =>
    categoryOptions
      .reduce((acc: Option[], option: ICategory) => {
        if (!option?.id || !option?.name) {
          return acc;
        }
        const newOption = {
          value: String(option.id),
          label: option.name,
        };
        return [...acc, newOption];
      }, [])
      .sort((a, b) => a.label.localeCompare(b.label));

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
    setIsSubmitting(true);

    if (!isFormValid(data)) {
      setIsSubmitting(false);
      return;
    }

    const { results, categories } = data;
    const response = await processResults(selectedRace, results, categories);
    if (!response) {
      setIsSubmitting(false);
    } else {
      setIsSubmitting(false);
      setSuccessMessage('Successfully Created Results');
      reset();
    }
    setIsSubmitting(false);
  };

  const onSubmit = (data: ResultFormData) => {
    handleSubmitResults(data);
  };

  const handleChangeRace = () => {
    setSelectedRace('');
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Instructions />
        <Flex justify="center">
          <Text fw="700" className={classes.formSection}>
            {`*Uploading Results for ${selectedRace.event.name} - ${selectedRace.startDate}*`}
          </Text>
        </Flex>
        <Flex justify="center" className={classes.formSection}>
          <Button color={ACS_DARK_GREY} variant="subtle" onClick={handleChangeRace}>
            Select a Different Race
          </Button>
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
                disabled={isSubmitting}
                className={classes.categoryOptions}
                size="xs"
                clearable
                searchable
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
                disabled={isSubmitting}
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
          <Button disabled={isSubmitting} type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </FormWrapper>
  );
}

export default ResultForm;
