'use client';

import React from 'react';
import { Text } from '@mantine/core';

interface LabeledTextProps {
  text: string;
  label: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  noColon?: boolean;
}

export default function LabeledText({
  text,
  label,
  size = 'md',
  color = '',
  noColon = false,
}: LabeledTextProps) {
  return (
    <Text size={size} component="span">
      <Text size={size} c={color} fw={900} component="span">
        {`${label}${noColon ? ' ' : ': '}`}
      </Text>
      {text}
    </Text>
  );
}
