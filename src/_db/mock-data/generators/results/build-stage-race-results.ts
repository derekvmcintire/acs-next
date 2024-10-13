import { IRaceData, IStageData, StageType } from '@/src/_types';
import { generateRandomNumber, generateRandomString, getFutureDateTimestamp } from '../../utils';
import { calculateMockUpgradePoints } from './helper-functions';

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
    stages.push(buildMockStage(raceData, randomStageType));
  }

  return stages;
};
