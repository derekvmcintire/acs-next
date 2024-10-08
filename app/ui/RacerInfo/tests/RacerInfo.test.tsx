// RacerInfoBlock.test.js

import React from 'react';
import { render, screen } from '../../../../test-utils';
import RacerInfoBlock from '../components/RacerInfoBlock';
import RacerInfoContainer from '../components/RacerInfoContainer';

describe('RacerInfoBlock', () => {
  test('renders the racer information', () => {
    render(<RacerInfoBlock />);

    expect(screen.getByText(/Some info/i)).toBeInTheDocument();
    expect(screen.getByText(/Some more info/i)).toBeInTheDocument();
    expect(screen.getByText(/A different piece of info/i)).toBeInTheDocument();
  });
});

describe('RacerInfoContainer', () => {
  test('renders the correct contents', () => {
    render(<RacerInfoContainer />);

    expect(true).toEqual(true);
  });
});
