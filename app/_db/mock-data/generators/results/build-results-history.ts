import { RaceType } from '@/app/_types';
import { RACE_TYPES } from '@/app/_types/constants';
import { generateRandomNumber, getListOfPastYears } from '../../utils';
import { buildMockRace } from './build-race-results';

export const buildMockRacesForSingleYear = () => {
  const raceTypes: RaceType[] = Object.values(RACE_TYPES);

  const randomNumberOfRaces = generateRandomNumber(40);

  const races = [];
  for (let i = 0; i < randomNumberOfRaces; i++) {
    const randomRaceType: RaceType = raceTypes[generateRandomNumber(raceTypes.length - 1)];
    races.push(buildMockRace(randomRaceType));
  }

  return races;
};

export const buildMockRacingHistory = (numberOfYears: number = generateRandomNumber(10)) => {
  const listOfYears: number[] = getListOfPastYears(numberOfYears);
  return listOfYears.map((y: number) => {
    return {
      year: y,
      races: buildMockRacesForSingleYear(),
    };
  });
};
