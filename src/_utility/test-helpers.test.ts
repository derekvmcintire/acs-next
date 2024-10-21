import { mockGlobalFetch, mockMultiGlobalFetch, mockResponsePackage } from './test-helpers';

describe('Test Helpers', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('mockGlobalFetch', () => {
    it('should mock global fetch and return the correct response', async () => {
      const mockResponse = { success: true };
      mockGlobalFetch(mockResponse);

      const response = await fetch('https://example.com');
      const json = await response.json();

      expect(json).toEqual(mockResponse);
    });
  });

  describe('mockMultiGlobalFetch', () => {
    it('should mock global fetch and return the correct response for matching URL', async () => {
      const mockPackages: mockResponsePackage[] = [
        { expectedUrl: 'https://example.com/endpoint1', mockResponse: { data: 'response1' } },
        { expectedUrl: 'https://example.com/endpoint2', mockResponse: { data: 'response2' } },
      ];
      mockMultiGlobalFetch(mockPackages);

      const response1 = await fetch('https://example.com/endpoint1');
      const json1 = await response1.json();
      expect(json1).toEqual({ data: 'response1' });

      const response2 = await fetch('https://example.com/endpoint2');
      const json2 = await response2.json();
      expect(json2).toEqual({ data: 'response2' });
    });

    it('should log a warning when fetching an unmocked URL', async () => {
      console.log = jest.fn();
      const mockPackages: mockResponsePackage[] = [
        { expectedUrl: 'https://example.com/endpoint1', mockResponse: { data: 'response1' } },
      ];
      mockMultiGlobalFetch(mockPackages);

      const response = await fetch('https://example.com/unknown');
      await response.json();

      expect(console.log).toHaveBeenCalledWith(
        expect.stringContaining("Uh oh, couldn't find the expected mock response"),
        expect.objectContaining({
          input: 'https://example.com/unknown',
          mockPackages,
        })
      );
    });
  });
});
