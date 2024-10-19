import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import { mockRider, mockTeamMembers } from '../../../_db/mock-data/mock-racer';
import { render, screen } from '../../../../test-utils';
import { RACER_PROFILE_IMAGE_TEST_ID } from '../client/ProfileImage';
import RacerInfoServer from '../client/Rider';
import { TOP_RESULTS_TEST_ID } from '../client/TopResults';

describe('RacerInfoServer', () => {
  test('renders with mockRiderInfo when fetch is mocked', () => {
    const component = RacerInfoServer({ riderInfo: mockRider, riderTeamMembers: mockTeamMembers });
    render(component);

    const nameElement = screen.getByText(/Derek McIntire/i);
    expect(nameElement).toBeInTheDocument();

    const imageElement = screen.getByTestId(RACER_PROFILE_IMAGE_TEST_ID);
    expect(imageElement).toBeInTheDocument();

    const topResultsElement = screen.getByTestId(TOP_RESULTS_TEST_ID);
    expect(topResultsElement).toBeInTheDocument();
  });
});
