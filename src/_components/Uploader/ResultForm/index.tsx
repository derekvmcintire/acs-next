'use client';

import React from 'react';
import { Anchor, Button, Flex, MultiSelect, Text, Textarea } from '@mantine/core';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { GetCategoriesResponse } from '@/src/_api/get/categories/fetch-categories-response-type';
import { createRaceResults } from '@/src/_api/post/races/results/create-race-results';
import { CreateRaceResultsRequest } from '@/src/_api/post/races/results/create-race-results-request-type';
import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';
import FormWrapper from '../FormWrapper';
import Instructions from '../Instructions';
import { RESULTS_PLACEHOLDER_TEXT } from './placeholder-text.mjs';
import classes from './result-form.module.css';

const DEFAULT_FORM_VALUES = {
  categories: [],
  results: '',
};

function ResultForm() {
  // Context values for managing form state and selected race
  const { selectedRace, setSelectedRace, categoryOptions, errors, setErrors, setSuccessMessage } =
    useUploaderContext();

  // Type for category options used in the MultiSelect dropdown
  type Option = {
    value: string;
    label: string;
  };

  // Function to map category options from API response into MultiSelect-compatible format
  const mappedCategoryOptions = () =>
    categoryOptions
      .reduce((acc: Option[], option: GetCategoriesResponse) => {
        if (!option?.id || !option?.name) {
          return acc; // Skip options with missing data
        }
        const newOption = {
          value: String(option.id),
          label: option.name,
        };
        return [...acc, newOption];
      }, [])
      .sort((a, b) => a.label.localeCompare(b.label)); // Sort options alphabetically by label

  // React Hook Form setup with default values and state management
  const { control, handleSubmit, reset, watch, formState } = useForm({
    defaultValues: DEFAULT_FORM_VALUES,
  });

  // Watch form values for categories and results fields
  const categories = watch('categories');
  const results = watch('results');

  // Disable submit button if form fields are invalid or form is submitting
  const isSubmitDisabled = !categories.length || !results || formState.isSubmitting;

  // Form submission handler
  const onSubmit: SubmitHandler<typeof DEFAULT_FORM_VALUES> = async () => {
    if (isSubmitDisabled) {
      setErrors([...errors, 'Form Validation Failed']);
      return;
    }

    if (!selectedRace) {
      setErrors([...errors, 'Cannot submit results without a selected race']);
      return;
    }

    // Prepare request payload
    const requestData: CreateRaceResultsRequest = {
      eventId: selectedRace.eventId,
      results,
      categories,
    };

    // Send results data to the API
    const response = await createRaceResults(requestData);

    // Handle API response
    if (!response) {
      setErrors([...errors, 'Form Submission Failed']);
    } else if (response.details.errors.length > 0) {
      // TODO: Handle partial success cases
      setErrors([...errors, ...response.details.errors]);
    } else {
      setSuccessMessage('Successfully Created Results');
      reset(); // Reset the form to default values
    }
  };

  // Handler to reset the selected race
  const handleChangeRace = () => {
    setSelectedRace('');
  };

  return (
    <FormWrapper>
      {/* Form wrapper for consistent styling */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Instructions component for form guidance */}
        <Instructions isResults />

        {/* Display selected race information */}
        {selectedRace && (
          <Flex justify="center">
            <Text fw="700" className={classes.formSection}>
              <Anchor
                underline="never"
                className={classes.topNavAnchor}
                href={`/race/${selectedRace.id}`}
              >
                {`*Uploading Results for ${selectedRace.event.name} - ${selectedRace.startDate}*`}
              </Anchor>
            </Text>
          </Flex>
        )}

        {/* Button to switch to a new race */}
        <Flex justify="center" className={classes.formSection}>
          <Button variant="transparent" onClick={handleChangeRace}>
            Create a New Race
          </Button>
        </Flex>

        {/* Category selection field */}
        <Flex align="center" justify="center" gap="md">
          <Controller
            name="categories"
            control={control}
            rules={{ required: 'Category is required' }}
            render={({ field }) => (
              <MultiSelect
                withAsterisk
                disabled={formState.isSubmitting}
                className={classes.categoryOptions}
                size="xs"
                clearable
                searchable
                label="Category"
                placeholder="You Must Manually Select Categories"
                data={mappedCategoryOptions()}
                {...field}
              />
            )}
          />
        </Flex>

        {/* Results input field */}
        <Flex align="center" justify="center" gap="md">
          <Controller
            name="results"
            control={control}
            render={({ field }) => (
              <Textarea
                withAsterisk
                disabled={formState.isSubmitting}
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

        {/* Submit button */}
        <Flex align="center" justify="center" gap="md">
          <Button disabled={isSubmitDisabled} type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </FormWrapper>
  );
}

export default ResultForm;
