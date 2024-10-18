/*
 ** This function will mock the global fetch object and return however many different responses are necessary
 */
export const mockMultiGlobalFetch = (expectedUrls: string[], mockResponses: any[]): void => {
  global.fetch = jest.fn((input) => {
    const index = expectedUrls.indexOf(
      expectedUrls.find((url: string) => url === String(input)) || ''
    );

    if (index < 0) {
      console.log(
        "Uh oh, couldn't find the expected url, make sure you have passed a URL for each expected fetch request!"
      );
      const slush = {
        input,
        expectedUrls,
        mockResponses,
        index,
      };
      console.log('slush: ', slush);
      throw new Error(
        "Uh oh, couldn't find the expected url, make sure you have passed a URL for each expected fetch request!"
      );
    }

    const mockResponse = mockResponses[index];

    if (!mockResponse) {
      console.log(
        "Uh oh, couldn't find the expected mock response, make sure you have passed a mock response for each expected fetch request!"
      );
      const slush = {
        input,
        expectedUrls,
        mockResponses,
        index,
      };
      console.log('slush: ', slush);
      throw new Error(
        "Uh oh, couldn't find the expected mock response, make sure you have passed a mock response for each expected fetch request!"
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
