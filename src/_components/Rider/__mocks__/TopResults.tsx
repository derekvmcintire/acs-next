import * as React from 'react';

export const MOCK_TOP_RESULTS_DATA_TEST_ID = 'mocked-topresults';

export const MockTopResults = jest.fn(() => (
  <div data-testid={MOCK_TOP_RESULTS_DATA_TEST_ID}>Mocked TopResults</div>
));
