'use client';

import React from 'react';
import { Container, Divider, Text } from '@mantine/core';
import classes from '../styles/section-label.module.css';

interface SectionLabelProps {
  text: string;
}
export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <>
      <Container className={classes.teamQuickStatsLabel}>
        <Text>{text}</Text>
      </Container>
      <Divider mb="16px" mt="16px" />
    </>
  );
}
