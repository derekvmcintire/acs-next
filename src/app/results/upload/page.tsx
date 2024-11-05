import React from 'react';
import { Center } from '@mantine/core';
import { getCategories } from '@/src/_api/get/categories/get-categories';
import UploadForm from '@/src/_components/Uploader/UploadForm';
import {
  defaultUploaderContextValue,
  IUploaderContext,
  UploaderContextProvider,
} from '@/src/_contexts/Uploader/UploaderContext';
import PageLayout from '@/src/_components/Shared/PageLayout';

async function RaceUpload() {
  const errors: string[] = [];
  const categoriesResponse = await getCategories();

  categoriesResponse?.error && errors.push(categoriesResponse.error);
  const categories = categoriesResponse?.categories || [];

  const uploaderContextValue: IUploaderContext = {
    ...defaultUploaderContextValue,
    categoryOptions: categories,
  };

  return (
    <PageLayout>
      <Center>
        <UploaderContextProvider initialValue={uploaderContextValue}>
          <UploadForm />
        </UploaderContextProvider>
      </Center>
    </PageLayout>
  );
}

export default RaceUpload;
