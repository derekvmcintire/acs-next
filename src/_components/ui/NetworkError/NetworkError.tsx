'use client';

import React from 'react';
import { IconInfoCircle } from '@tabler/icons-react';
import { Alert } from '@mantine/core';

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
            <Alert variant="light" color="red" title="Network Error" icon={icon}>
              {error}
            </Alert>
          ))}
        </>
      )}
    </>
  );
}
