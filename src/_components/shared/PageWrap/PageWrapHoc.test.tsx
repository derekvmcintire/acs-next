import { render, screen } from '@/test-utils';
import { COLOR_SCHEME_TOGGLE_TEST_ID } from '../ColorSchemeToggle/ColorSchemeToggle';
import { TOP_NAV_TEST_ID } from '../TopNav/TopNav';
import PageWrapHoc from './PageWrapHoc';

describe('PageWrapHoc', () => {
  it('Renders the TopNav and ColorSchemeToggle components', () => {
    const MOCK_TEST_ID = 'mock-component';
    const MockComponent = () => <div data-testid={MOCK_TEST_ID}>Mock Component</div>;

    render(
      <PageWrapHoc>
        <MockComponent />
      </PageWrapHoc>
    );

    const topNavElement = screen.getByTestId(TOP_NAV_TEST_ID);
    const colorSchemeElement = screen.getByTestId(COLOR_SCHEME_TOGGLE_TEST_ID);
    const mockElement = screen.getByTestId(MOCK_TEST_ID);

    expect(topNavElement).toBeInTheDocument();
    expect(colorSchemeElement).toBeInTheDocument();
    expect(mockElement).toBeInTheDocument();
  });
});
