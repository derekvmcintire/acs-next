import { IRaceData, IStageData } from '../../types';
import {
  generateRandomDateTimestamp,
  generateRandomNumber,
  generateRandomString,
  getFutureDateTimestamp,
  getListOfPastYears,
} from '../utils';

const calculateMockUpgradePoints = (place: number, racers: number) =>
  place > racers * 0.9 ? generateRandomNumber(10) : 0;

type StageType = 'hill' | 'road' | 'cx' | 'xc' | 'gravity';

const buildMockStage = (raceData: IRaceData, stageType: StageType = 'road'): IStageData => {
  const stages: IStageData[] = raceData?.stages !== null ? raceData.stages : [];

  const startDate =
    stages.length > 0
      ? getFutureDateTimestamp(new Date(stages[stages.length - 1].startDate), 1)
      : raceData.startDate;

  return {
    name: generateRandomString(),
    stageNumber: stages.length,
    type: stageType,
    startDate: String(startDate),
    place: generateRandomNumber(raceData.racers),
    racers: raceData.racers,
    points: generateRandomNumber(800),
    upgPoints: calculateMockUpgradePoints(raceData.place, raceData.racers),
    noPlaceCode: raceData.place ? null : 'DNF',
  };
};

export const buildMockStagesForStageRace = (raceData: IRaceData, n: number): IStageData[] => {
  const stageTypes: StageType[] = ['road', 'hill', 'xc', 'cx'];
  const randomStageType: StageType = stageTypes[generateRandomNumber(stageTypes.length - 1)];

  const stages = [];
  for (let i = 0; i < n; i++) {
    stages.push(buildMockStage(raceData, randomStageType, stages.length + 1));
  }

  return stages;
};

type RaceType = 'hill' | 'road' | 'cx' | 'xc' | 'stage';

export const buildMockRace = (raceType: RaceType = 'road'): IRaceData => {
  const startDate = generateRandomDateTimestamp();
  const endDate =
    raceType === 'stage' ? String(getFutureDateTimestamp(new Date(startDate), 3)) : null;
  const racers = generateRandomNumber(85);
  const place = generateRandomNumber(racers);
  const upgradePoints = place > racers * 0.9 ? generateRandomNumber(10) : 0;
  const shouldDnf = generateRandomNumber(75) > 75 * 0.9;

  const race: IRaceData = {
    name: generateRandomString(),
    type: raceType,
    startDate,
    endDate,
    category: `Cat ${generateRandomNumber(4) + 1}`,
    place: shouldDnf ? 0 : generateRandomNumber(racers),
    racers,
    points: generateRandomNumber(800),
    upgPoints: upgradePoints,
    stages: null,
    noPlaceCode: shouldDnf ? 'DNF' : null,
  };

  if (raceType === 'stage') {
    race.stages = buildMockStagesForStageRace(race, 3);
  }

  return race;
};

export const buildMockRacesForSingleYear = () => {
  const raceTypes: RaceType[] = ['hill', 'road', 'cx', 'xc', 'stage'];

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
