import { IRaceData, RaceType } from '@/app/_src/_types';
import {
  generateRandomDateTimestamp,
  generateRandomNumber,
  generateRandomString,
  getFutureDateTimestamp,
} from '../../utils';
import { buildMockStagesForStageRace } from './build-stage-race-results';

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
