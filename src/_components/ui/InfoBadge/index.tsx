'use client';

import { Badge } from '@mantine/core';
import React, { PropsWithChildren } from 'react';
import { ACS_COLOR_BLUE } from '@/src/global-constants';

export default function InfoBadge({ children }: PropsWithChildren) {
  return (
    <Badge size="sm" color={ACS_COLOR_BLUE} variant="light" m="6">
      {children}
    </Badge>
  );
}
