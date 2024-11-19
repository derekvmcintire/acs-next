export const getResponse = async <T>(
  url: string,
  callBack: (response: Response) => T
): Promise<T | { error: string }> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return { error: `Network response status ${response.status} with url ${url}` };
    }

    return callBack(response);
  } catch (error: unknown) {
    return { error: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
};

export const vFetch = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response status ${response.status} with URL: ${url}`);
    }

    const data = await response.json();
    return data as T; // Return the parsed data typed as T
  } catch (error: unknown) {
    throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};

export const postResponse = async <T>(
  url: string,
  callBack: (response: Response) => T,
  body: string = ''
): Promise<T | { error: string }> => {
  try {
    const response = await fetch(url, { method: 'POST', body });

    if (!response.ok) {
      return { error: `Network response status ${response.status} with url ${url}` };
    }

    return callBack(response);
  } catch (error: unknown) {
    return { error: error instanceof Error ? error.message : 'An unknown error occurred' };
  }
};
