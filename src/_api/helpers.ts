export const getResponse = async <T>(
  url: string,
  callBack: (response: Response) => T
): Promise<T | { error: string }> => {
  try {
    const response = await fetch(url);

    console.log('got response: ', response);

    if (!response.ok) {
      return { error: `Network response status ${response.status} with url ${url}` };
    }

    return callBack(response);
  } catch (error: unknown) {
    return { error: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
};
