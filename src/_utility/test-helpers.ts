export type mockResponsePackage = {
  expectedUrl: string;
  mockResponse: any;
};

/*
 ** This function will mock the global fetch object and return however many different responses are necessary
 */
export const mockMultiGlobalFetch = (mockPackages: mockResponsePackage[]): void => {
  global.fetch = jest.fn((input) => {
    const mockResponse = mockPackages.reduce((r: any, mockedPackage: mockResponsePackage) => {
      if (mockedPackage.expectedUrl === input) {
        return mockedPackage.mockResponse;
      }
      return r;
    }, null);

    if (!mockResponse) {
      const slush = {
        input,
        mockPackages,
      };
      console.log(
        "Uh oh, couldn't find the expected mock response, make sure you have passed a mockResponsePackage for each expected fetch request!",
        slush
      );
    }

    return Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    });
  }) as jest.Mock;
};

/*
 ** This function will mock the global fetch object and return a mocked response.
 */
export const mockGlobalFetch = (mockResponse: any): void => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve(mockResponse),
    });
  }) as jest.Mock;
};
