'use client';

import React, { PropsWithChildren } from 'react';
import { Center, Container, Flex } from '@mantine/core';
import Loader from '@/src/app/loading';
import classes from './form-wrapper.module.css';

import '@mantine/dates/styles.css';

import { useUploaderContext } from '@/src/_contexts/Uploader/UploaderContext';

export default function FormWrapper({ children }: PropsWithChildren) {
  const { successMessage, isLoading } = useUploaderContext();

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Center>
          <Flex justify="right" className={classes.uploadForm}>
            <Container>
              {successMessage && <div>{successMessage}</div>}
              {children}
            </Container>
          </Flex>
        </Center>
      )}
    </Container>
  );
}
