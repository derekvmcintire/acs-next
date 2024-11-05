import InfoBadge from '.';
import { render, screen } from '../../../../test-utils';

describe('InfoBlock', () => {
  test('renders its children', () => {
    render(
      <section>
        <InfoBadge>Information</InfoBadge>
      </section>
    );

    expect(screen.getByText(/Information/i)).toBeInTheDocument();
  });
});
