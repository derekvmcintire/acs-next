import React from 'react';
import { Center } from '@mantine/core';
import { fetchCategories } from '@/src/_api/get/categories/fetch-categories';
import PageLayout from '@/src/_components/shared/PageLayout';
import UploadForm from '@/src/_components/Uploader/UploadForm';
import {
  defaultUploaderContextValue,
  IUploaderContext,
  UploaderContextProvider,
} from '@/src/_contexts/Uploader/UploaderContext';

async function RaceUpload() {
  const errors: string[] = [];
  const categoriesResponse = await fetchCategories();

  categoriesResponse?.error && errors.push(categoriesResponse.error);
  const categories = categoriesResponse?.categories || [];

  const uploaderContextValue: IUploaderContext = {
    ...defaultUploaderContextValue,
    categoryOptions: categories,
  };

  return (
    <Center>
      <PageLayout>
        <UploaderContextProvider initialValue={uploaderContextValue}>
          <UploadForm />
        </UploaderContextProvider>
      </PageLayout>
    </Center>
  );
}

export default RaceUpload;
