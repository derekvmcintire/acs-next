import { VERIFIED_HEADERS } from '../constants';

export type PreparedResult = Record<string, string | number | Date | undefined>;

const getHeader = (header: string): string | null => {
  const headerKeys = Object.keys(VERIFIED_HEADERS) as Array<keyof typeof VERIFIED_HEADERS>;

  for (const key of headerKeys) {
    if ((VERIFIED_HEADERS[key] as readonly string[]).includes(header as string)) {
      return key;
    }
  }
  return null;
};

export const parseResults = (data: string): PreparedResult[] => {
  const rows = data.trim().split('\n');
  const isTabSeparated = rows[0].includes('\t');
  const isCommaSeparated = rows[0].includes(',');

  if (!isTabSeparated || isCommaSeparated) {
    throw new Error('Results must be tab or comma separated');
  }

  const headers = rows[0].split(isTabSeparated ? '\t' : ',');

  const result = rows.slice(1).map((row) => {
    const values = row.split('\t');

    return headers.reduce<PreparedResult>((obj, header, index) => {
      if (!header.trim()) {
        return obj;
      }
      const verifiedHeader = getHeader(header.toLowerCase());

      if (!verifiedHeader) {
        return obj;
      }

      if (verifiedHeader === 'name') {
        const preparedName = values[index] ? values[index].replace(/\d+/g, '').trim() : '';
        obj[verifiedHeader] = preparedName;
        return obj;
      }
      obj[verifiedHeader] = values[index] || undefined;
      return obj;
    }, {});
  });

  return result;
};
