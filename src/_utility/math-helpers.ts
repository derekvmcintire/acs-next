type Percentage = number & { __brand: 'Percentage' };

const createPercentage = (value: number): Percentage => {
  if (value < 0 || value > 1) {
    throw new Error('Value must be between 0 and 1');
  }
  return value as Percentage;
};

export const floorMap = (decimalValue: Percentage, maxValue: number) => {
  const validDecimal = createPercentage(decimalValue);
  return Math.floor(validDecimal * maxValue) + 1;
};
