'use client';

import React from 'react';
import { Text } from '@mantine/core';

interface LabeledTextProps {
  text: string;
  label: string;
}

export default function LabeledText({ text, label }: LabeledTextProps) {
  return (
    <Text component="span">
      <Text fw={900} component="span">
        {`${label}: `}
      </Text>
      {text}
    </Text>
  );
}
