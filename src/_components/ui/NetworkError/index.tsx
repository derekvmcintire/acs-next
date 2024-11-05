'use client';

import { Alert } from '@mantine/core';
import React from 'react';
import { IconInfoCircle } from '@tabler/icons-react';

interface NetworkErrorProps {
  errors: string[];
}
export default function NetworkError({ errors }: NetworkErrorProps) {
  const icon = <IconInfoCircle />;
  return (
    <>
      {errors.length > 0 && (
        <>
          {errors.map((error: string) => (
            <Alert key={error} variant="light" color="red" title="Network Error" icon={icon}>
              {error}
            </Alert>
          ))}
        </>
      )}
    </>
  );
}
