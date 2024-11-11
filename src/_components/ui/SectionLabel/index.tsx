'use client';

import React from 'react';
import { Container, Divider, Text } from '@mantine/core';
import classes from '../styles/section-label.module.css';

interface SectionLabelProps {
  text: string;
  slim?: boolean;
}
export default function SectionLabel({ text, slim = false }: SectionLabelProps) {
  return (
    <>
      <Container className={slim ? classes.slimSectionlabel : classes.sectionLabel}>
        <Text>{text}</Text>
      </Container>
      <Divider mb={slim ? '0' : '16px'} mt={slim ? '0' : '16px'} />
    </>
  );
}
