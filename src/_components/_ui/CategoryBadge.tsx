'use client';

import React, { PropsWithChildren } from 'react';
import { Badge } from '@mantine/core';

export default function CategoryBadge({ children }: PropsWithChildren) {
  return (
    <Badge size="sm" variant="light" m="6">
      {children}
    </Badge>
  );
}
