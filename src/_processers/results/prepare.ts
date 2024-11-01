export type PreparedResult = Record<string, string | number | Date | undefined>;

const verifiedHeaders = {
  category: ['category', 'div', 'division', 'cat', 'ctgry'],
  place: ['place', 'pl', 'p', 'pos', 'position', 'plc'],
  hometown: ['hometown', 'city', 'hmtwn', 'town'],
  gap: ['gap'],
  time: ['time'],
  name: ['name', 'rider', 'bib & name'],
} as const;

const getHeader = (header: string): string | null => {
  const headerKeys = Object.keys(verifiedHeaders) as Array<keyof typeof verifiedHeaders>;

  for (const key of headerKeys) {
    if ((verifiedHeaders[key] as readonly string[]).includes(header as string)) {
      return key;
    }
  }
  return null;
};

export const prepareResults = (data: string): PreparedResult[] => {
  // Split the data into rows
  const rows = data.trim().split('\n');

  // Extract headers
  const headers = rows[0].split('\t');

  // Convert rows to objects
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
