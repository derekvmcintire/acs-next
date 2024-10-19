import { render, screen } from '../../../../test-utils';
import InfoBadge from './InfoBadge';

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
