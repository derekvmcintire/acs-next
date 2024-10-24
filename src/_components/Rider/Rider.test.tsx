import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import { mockRacingHistory } from '@/src/_db/mock-data/mock-race-history';
import { mockRider, mockTeamMembers } from '../../_db/mock-data/mock-racer';
import { render, screen } from '../../../test-utils';
import { NAME_HEADING_TEST_ID } from './NameHeading/NameHeading';
import { RACER_PROFILE_IMAGE_TEST_ID } from './ProfileImage/ProfileImage';
import Rider from './Rider';
import { TOP_RESULTS_TEST_ID } from './TopResults/TopResults';

const mockHistory = mockRacingHistory.results;

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
