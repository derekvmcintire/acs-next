import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import Rider from '.';
import { mockRacingHistory } from '@/src/_db/mock-data/mock-race-history';
import { mockRider, mockTeamMembers } from '../../_db/mock-data/mock-racer';
import { render, screen } from '../../../test-utils';
import { RIDER_SEARCH_DATA_TEST_ID } from '../shared/TopNav/Search';
import { NAME_HEADING_TEST_ID } from './NameHeading';
import { RACER_PROFILE_IMAGE_TEST_ID } from './ProfileImage';
import { TOP_RESULTS_TEST_ID } from './TopResults';

const mockHistory = mockRacingHistory.results;

jest.mock('../shared/TopNav/Search', () => {
  return function MockSearch() {
    return <div data-testid={RIDER_SEARCH_DATA_TEST_ID}>Search</div>;
  };
});

describe('Rider', () => {
  test('renders with mockRiderInfo when fetch is mocked', () => {
    render(
      <Rider riderInfo={mockRider} riderTeamMembers={mockTeamMembers} history={mockHistory} />
    );

    const nameElement = screen.getByTestId(NAME_HEADING_TEST_ID);
    expect(nameElement).toBeInTheDocument();

    const imageElement = screen.getByTestId(RACER_PROFILE_IMAGE_TEST_ID);
    expect(imageElement).toBeInTheDocument();

    const topResultsElement = screen.getByTestId(TOP_RESULTS_TEST_ID);
    expect(topResultsElement).toBeInTheDocument();
  });
});
