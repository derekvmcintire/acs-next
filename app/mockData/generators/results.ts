import { IRaceData, IStageData } from '../../types';
import {
  generateRandomDateTimestamp,
  generateRandomNumber,
  generateRandomString,
  getListOfPastYears,
} from '../utils';

type StageType = 'hill' | 'road' | 'cx' | 'xc';

const buildMockStage = (stageType: StageType = 'road', stageNumber: number = 1): IStageData => {
  const startDate = generateRandomDateTimestamp();
  const racers = generateRandomNumber(85);
  const place = generateRandomNumber(racers);
  const upgradePoints = place > racers * 0.9 ? generateRandomNumber(10) : 0;
  const shouldDnf = generateRandomNumber(75) > 75 * 0.9;

  return {
    name: generateRandomString(),
    stageNumber,
    type: stageType,
    startDate,
    place: shouldDnf ? 0 : generateRandomNumber(racers),
    racers,
    points: generateRandomNumber(800),
    upgPoints: upgradePoints,
    noPlaceCode: shouldDnf ? 'DNF' : null,
  };
};

export const buildMockStagesForStageRace = (n: number): IStageData[] => {
  const stageTypes: StageType[] = ['road', 'hill', 'xc', 'cx'];
  const randomStageType: StageType = stageTypes[generateRandomNumber(stageTypes.length - 1)];

  const stages = [];
  for (let i = 0; i < n; i++) {
    stages.push(buildMockStage(randomStageType, stages.length + 1));
  }

  return stages;
};

type RaceType = 'hill' | 'road' | 'cx' | 'xc' | 'stage';

export const buildMockRace = (raceType: RaceType = 'road'): IRaceData => {
  const startDate = generateRandomDateTimestamp();
  const endDate = raceType === 'stage' ? generateRandomDateTimestamp(startDate) : null;
  const racers = generateRandomNumber(85);
  const place = generateRandomNumber(racers);
  const upgradePoints = place > racers * 0.9 ? generateRandomNumber(10) : 0;
  const shouldDnf = generateRandomNumber(75) > 75 * 0.9;

  return {
    name: generateRandomString(),
    type: raceType,
    startDate,
    endDate,
    category: generateRandomString(7),
    place: shouldDnf ? 0 : generateRandomNumber(racers),
    racers,
    points: generateRandomNumber(800),
    upgPoints: upgradePoints,
    stages: raceType === 'stage' ? buildMockStagesForStageRace(3) : null,
    noPlaceCode: shouldDnf ? 'DNF' : null,
  };
};

export const buildMockRacesForSingleYear = () => {
  const raceTypes: RaceType[] = ['hill', 'road', 'cx', 'xc', 'stage'];
  const randomRaceType: RaceType = raceTypes[generateRandomNumber(raceTypes.length - 1)];
  const randomNumberOfRaces = generateRandomNumber(40);

  const races = [];
  for (let i = 0; i < randomNumberOfRaces; i++) {
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
