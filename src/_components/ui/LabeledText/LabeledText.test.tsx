import { render, screen } from '../../../../test-utils';
import LabeledText from './LabeledText';

describe('InfoBlock', () => {
  test('renders its children without colon', () => {
    const myLabel = 'My Label';
    const myText = 'My Text';
    render(<LabeledText label={myLabel} text={myText} hasColon={false} />);

    expect(screen.getByText(myLabel)).toBeInTheDocument();
    expect(screen.getByText(myText)).toBeInTheDocument();
    expect(screen.queryByText(/:/i)).not.toBeInTheDocument();
  });

  test('renders its children with colon', () => {
    const myLabel = 'My Label';
    const myText = 'My Text';
    render(<LabeledText label={myLabel} text={myText} />);

    expect(screen.getByText(`${myLabel}:`)).toBeInTheDocument();
    expect(screen.getByText(myText)).toBeInTheDocument();
  });
});
