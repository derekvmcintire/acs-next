import { MantineProvider } from '@mantine/core';
import React from 'react';
import {
  NEXT_RIDER_ANCHOR_TEST_ID,
  NEXT_RIDER_BUTTON_TEXT,
  PREV_RIDER_ANCHOR_TEST_ID,
  PREV_RIDER_BUTTON_TEXT,
  PrevAndNextRider,
  RIDER_URL,
} from '.';
import { render, screen } from '@/test-utils';
import { useRider } from '../../../_contexts/Rider/RiderContext';

jest.mock('../../../_contexts/Rider/RiderContext', () => ({
  useRider: jest.fn(),
}));

describe('PrevAndNextRider Component', () => {
  const mockUseRider = useRider as jest.Mock;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders buttons with correct links when rider ID is available', () => {
    mockUseRider.mockReturnValue({
      riderInfo: { id: '5' },
    });

    render(
      <MantineProvider>
        <PrevAndNextRider />
      </MantineProvider>
    );

    const prevButton = screen.getByText(PREV_RIDER_BUTTON_TEXT);
    const nextButton = screen.getByText(NEXT_RIDER_BUTTON_TEXT);

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    const prevAnchor = screen.getByTestId(PREV_RIDER_ANCHOR_TEST_ID);
    const nextAnchor = screen.getByTestId(NEXT_RIDER_ANCHOR_TEST_ID);

    expect(prevAnchor).toHaveAttribute('href', `${RIDER_URL}/4`);
    expect(nextAnchor).toHaveAttribute('href', `${RIDER_URL}/6`);
  });

  it('renders buttons with default links when rider ID is not available', () => {
    mockUseRider.mockReturnValue({
      riderInfo: { id: undefined },
    });

    render(
      <MantineProvider>
        <PrevAndNextRider />
      </MantineProvider>
    );

    const prevButton = screen.getByText(PREV_RIDER_BUTTON_TEXT);
    const nextButton = screen.getByText(NEXT_RIDER_BUTTON_TEXT);

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    const prevAnchor = screen.getByTestId(PREV_RIDER_ANCHOR_TEST_ID);
    const nextAnchor = screen.getByTestId(NEXT_RIDER_ANCHOR_TEST_ID);

    expect(prevAnchor).toHaveAttribute('href', `${RIDER_URL}/1`);
    expect(nextAnchor).toHaveAttribute('href', `${RIDER_URL}/1`);
  });
});
