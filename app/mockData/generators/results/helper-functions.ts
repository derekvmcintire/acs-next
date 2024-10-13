import { generateRandomNumber } from '../../utils';

export const calculateMockUpgradePoints = (place: number, racers: number) =>
  place > racers * 0.9 ? generateRandomNumber(10) : 0;
