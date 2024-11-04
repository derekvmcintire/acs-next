'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Flex, MultiSelect, Text, Textarea } from '@mantine/core';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import { processResults } from '@/src/_processers/results';
import { ICategory } from '@/src/_types';
import { ACS_DARK_GREY } from '@/src/global-constants';
import FormWrapper from '../FormWrapper';
import Instructions from '../Instructions';
import { RESULTS_PLACEHOLDER_TEXT } from './placeholder-text.mjs';
import classes from './result-form.module.css';

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

  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const categories = watch('categories');
  const results = watch('results');

  const isSubmitDisabled = !categories.length || !results || isSubmitting;

  const onSubmit = async () => {
    if (isSubmitDisabled) {
      setErrors([...errors, 'Form Validation Failed']);
      return;
    }

    setIsSubmitting(true);

    const response = await processResults(selectedRace, results, categories);

    if (!response) {
      setErrors([...errors, 'Form Submission Failed']);
      setIsSubmitting(false);
    } else {
      setSuccessMessage('Successfully Created Results');
      reset();
    }
    setIsSubmitting(false);
  };

  const handleChangeRace = () => {
    setSelectedRace('');
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Instructions isResults />
        <Flex justify="center">
          <Text fw="700" className={classes.formSection}>
            {`*Uploading Results for ${selectedRace.event.name} - ${selectedRace.startDate}*`}
          </Text>
        </Flex>
        <Flex justify="center" className={classes.formSection}>
          <Button color={ACS_DARK_GREY} variant="subtle" onClick={handleChangeRace}>
            Create a New Race
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
                placeholder="You Must Manually Select Categories"
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
                placeholder={RESULTS_PLACEHOLDER_TEXT}
                minRows={8}
                maxRows={20}
                {...field}
              />
            )}
          />
        </Flex>
        <Flex align="center" justify="center" gap="md">
          {/* Submit Button */}
          <Button disabled={isSubmitDisabled} type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </FormWrapper>
  );
}

export default ResultForm;
