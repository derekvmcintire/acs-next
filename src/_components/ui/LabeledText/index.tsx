'use client';

import React from 'react';
import { Text } from '@mantine/core';

export interface LabeledTextProps {
  text: string;
  label: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  hasColon?: boolean;
  isSpan?: boolean;
}

export default function LabeledText({
  text,
  label,
  size = 'md',
  color = '',
  hasColon = true,
  isSpan = false,
}: LabeledTextProps) {
  return (
    <Text size={size} span={isSpan}>
      <Text size={size} c={color} fw={600} component="span">
        {`${label}${hasColon ? ': ' : ' '}`}
      </Text>
      {text}
    </Text>
  );
}
