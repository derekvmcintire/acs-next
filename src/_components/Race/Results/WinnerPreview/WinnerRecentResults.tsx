'use client';

import { Container, Text } from '@mantine/core';
import React from 'react';
import SectionLabel from '@/src/_components/ui/SectionLabel';

export default function WinnerRecentResults() {
  return (
    <Container>
      <SectionLabel text="Recent Results" />
      <Text fs="italic" size="xs">
        3rd at Treehouse Cross
      </Text>
      <Text fs="italic" size="xs">
        9th at GMSR Road Race
      </Text>
      <Text fs="italic" size="xs">
        2nd at Vermont Gran Fondo
      </Text>
    </Container>
  );
}
