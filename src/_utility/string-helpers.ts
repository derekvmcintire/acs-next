export const stringTrunc = (str: string, max: number = 10) => {
  if (str.length <= max) {
    return str;
  }
  return `${str.slice(0, max)}...`;
};
