import { render, screen } from '@/test-utils';
import { COLOR_SCHEME_TOGGLE_TEST_ID } from '../ColorSchemeToggle/ColorSchemeToggle';
import { RIDER_SEARCH_DATA_TEST_ID } from '../TopNav/Search';
import { TOP_NAV_TEST_ID } from '../TopNav/TopNav';
import PageLayout from './PageLayout';

jest.mock('../TopNav/Search', () => {
  return function MockSearch() {
    return <div data-testid={RIDER_SEARCH_DATA_TEST_ID}>Search</div>;
  };
});

describe('PageLayout', () => {
  it('Renders the TopNav and ColorSchemeToggle components', () => {
    const MOCK_TEST_ID = 'mock-component';
    const MockComponent = () => <div data-testid={MOCK_TEST_ID}>Mock Component</div>;

    render(
      <PageLayout>
        <MockComponent />
      </PageLayout>
    );

    const topNavElement = screen.getByTestId(TOP_NAV_TEST_ID);
    const colorSchemeElement = screen.getByTestId(COLOR_SCHEME_TOGGLE_TEST_ID);
    const mockElement = screen.getByTestId(MOCK_TEST_ID);

    expect(topNavElement).toBeInTheDocument();
    expect(colorSchemeElement).toBeInTheDocument();
    expect(mockElement).toBeInTheDocument();
  });
});
