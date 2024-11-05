'use client';

import { Container, Divider } from '@mantine/core';
import React from 'react';
import RaceInstructions from './RaceInstructions';
import ResultInstructions from './ResultInstructions';

type InstructionsProps = {
  isResults?: boolean;
};

export default function Instructions({ isResults = false }: InstructionsProps) {
  return (
    <Container>
      {isResults ? <ResultInstructions /> : <RaceInstructions />}
      <Divider mb="16px" mt="16px" />
    </Container>
  );
}
