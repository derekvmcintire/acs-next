import React from 'react';
import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import { mockRider } from '@/src/_db/mock-data/mock-racer';
import { stringTrunc } from '@/src/_utility/string-helpers';
import { render, screen } from '@/test-utils';
import { getTopResultPlaceColor } from '../utils';
import { MAPPED_TOP_RESULTS_TEST_ID, MappedTopResults } from './MappedTopResults';
import { LabeledTextProps } from '../../Ui/LabeledText';

jest.mock('@mantine/core', () => ({
  ...jest.requireActual('@mantine/core'),
  useMantineColorScheme: jest.fn(),
}));

jest.mock('../../ui/LabeledText/LabeledText', () => {
  return function MockedLabeledText(props: LabeledTextProps) {
    return (
      <div data-testid="labeled-text">
        <p>{props.label}</p>
        <p>{props.text}</p>
        <p>{props.color}</p>
      </div>
    );
  };
});

jest.mock('../utils', () => ({
  getTopResultPlaceColor: jest.fn(),
  getOrdinal: jest.fn((place) => `${place}th`), // Mocked ordinal function
}));

describe('MappedTopResults Component', () => {
  const topResults = mockRider.topResults || [];

  beforeEach(() => {
    (useMantineColorScheme as jest.Mock).mockReturnValue({ colorScheme: 'light' });
    (getTopResultPlaceColor as jest.Mock).mockImplementation((place: number) =>
      place === 1 ? 'gold' : 'silver'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the top results correctly', () => {
    render(
      <MantineProvider>
        <MappedTopResults topResults={topResults} />
      </MantineProvider>
    );

    const mappedResultsContainer = screen.getByTestId(MAPPED_TOP_RESULTS_TEST_ID);
    expect(mappedResultsContainer).toBeInTheDocument();

    const labeledTexts = screen.getAllByTestId('labeled-text');
    expect(labeledTexts).toHaveLength(topResults.length);

    const expectedRaceNameOne = mockRider?.topResults ? mockRider.topResults[0]?.name : '';
    const expectedRaceNameTwo = mockRider?.topResults ? mockRider.topResults[1]?.name : '';

    expect(labeledTexts[0]).toHaveTextContent('1th'); // Mocked ordinal
    expect(labeledTexts[0]).toHaveTextContent(`${stringTrunc(expectedRaceNameOne)} (2024)`);
    expect(labeledTexts[0]).toHaveTextContent('gold'); // From the mock implementation

    expect(labeledTexts[1]).toHaveTextContent('2th'); // Mocked ordinal
    expect(labeledTexts[1]).toHaveTextContent(`${stringTrunc(expectedRaceNameTwo)} (2024)`);
    expect(labeledTexts[1]).toHaveTextContent('silver'); // From the mock implementation
  });
});
