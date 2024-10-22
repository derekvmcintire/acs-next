import React from 'react';
import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import { mockRider } from '@/src/_db/mock-data/mock-racer';
import { render, screen } from '@/test-utils';
import { LabeledTextProps } from '../../ui/LabeledText/LabeledText';
import { getTopResultPlaceColor } from '../utils';
import { MAPPED_TOP_RESULTS_TEST_ID, MappedTopResults } from './MappedTopResults';

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
    jest.clearAllMocks(); // Clear mocks after each test
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

    expect(labeledTexts[0]).toHaveTextContent('1th'); // Mocked ordinal
    expect(labeledTexts[0]).toHaveTextContent('Mock Race (2024)');
    expect(labeledTexts[0]).toHaveTextContent('gold'); // From the mock implementation

    expect(labeledTexts[1]).toHaveTextContent('2th'); // Mocked ordinal
    expect(labeledTexts[1]).toHaveTextContent('Mock Second Race (2024)');
    expect(labeledTexts[1]).toHaveTextContent('silver'); // From the mock implementation
  });
});
