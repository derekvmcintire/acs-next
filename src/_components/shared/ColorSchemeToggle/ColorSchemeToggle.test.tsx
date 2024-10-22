import { render, screen } from '../../../../test-utils';
import { ColorSchemeToggle } from './ColorSchemeToggle';

describe('InfoBlock', () => {
  test('renders its children', () => {
    render(
      <section>
        <ColorSchemeToggle />
      </section>
    );

    const setLightButton = screen.getByText(/Light Theme/i);
    const setDarkButton = screen.getByText(/Dark Theme/i);

    expect(setLightButton).toBeInTheDocument();
    expect(setDarkButton).toBeInTheDocument();
  });
});