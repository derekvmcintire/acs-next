export const getFormattedMonthDayDateString = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
};

export const getFormattedYearString = (date: Date) => {
  const year = date.getFullYear();
  return `${year}`;
};

export const yearTrunc = (year: number, useFourDigitFormat: boolean = false) => {
  const stringDate = Math.abs(year).toString();
  return useFourDigitFormat ? stringDate.slice(-4) : stringDate.slice(-2);
};
