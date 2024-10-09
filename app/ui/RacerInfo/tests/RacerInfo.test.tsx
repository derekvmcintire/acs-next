// RacerInfoBlock.test.js

import React from 'react';
import { mockRacer } from '@/app/mock-data/mock';
import { render, screen } from '../../../../test-utils';
import Details from '../components/Details';
import { RACER_PROFILE_IMAGE_TEST_ID } from '../components/ProfileImage';
import RacerInfoContainer from '../components/RacerInfoContainer';

const { socials, dob, categories, hometown } = mockRacer;

describe('RacerInfoBlock', () => {
  test('renders the racer details', () => {
    render(<Details socials={socials} dob={dob} categories={categories} hometown={hometown} />);

    expect(screen.getByText(/USA/i)).toBeInTheDocument();
    expect(screen.getByText(/Date of Birth/i)).toBeInTheDocument();
    expect(screen.getByText(/cx: 3/i)).toBeInTheDocument();
  });
});

describe('RacerInfoContainer', () => {
  test('renders the correct contents', () => {
    render(<RacerInfoContainer />);

    expect(screen.getByText(/Top Results/i)).toBeInTheDocument();
    expect(screen.getByText(/Upcoming Races/i)).toBeInTheDocument();
    expect(screen.getByText(/cx: 3/i)).toBeInTheDocument();
    expect(screen.getByTestId(RACER_PROFILE_IMAGE_TEST_ID)).toBeInTheDocument();
  });
});
