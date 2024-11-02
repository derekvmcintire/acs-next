'use client';

import React from 'react';
import { Center } from '@mantine/core';
import PageLayout from '@/src/_components/shared/PageLayout/PageLayout';
import UploadForm from '@/src/_components/Uploader/UploadForm';
import { UploaderContextProvider } from '@/src/_contexts/Uploader/UploaderContext';

function RaceUpload() {
  return (
    <PageLayout>
      <Center>
        <UploaderContextProvider>
          <UploadForm />
        </UploaderContextProvider>
      </Center>
    </PageLayout>
  );
}

export default RaceUpload;
