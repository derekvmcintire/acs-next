import { Text } from '@mantine/core';
import { render, screen } from '../../../../test-utils';
import InfoBlock from '.';

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
