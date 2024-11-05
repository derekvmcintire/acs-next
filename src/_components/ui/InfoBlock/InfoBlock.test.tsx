import { Text } from '@mantine/core';
import InfoBlock from '.';
import { render, screen } from '../../../../test-utils';

describe('InfoBlock', () => {
  test('renders its children', () => {
    render(
      <section>
        <InfoBlock>
          <Text>Top Results</Text>
        </InfoBlock>
      </section>
    );

    expect(screen.getByText(/Top Results/i)).toBeInTheDocument();
  });
});
