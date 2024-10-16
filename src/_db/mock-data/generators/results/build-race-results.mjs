import { buildMockStagesForStageRace } from './build-stage-race-results.mjs';
import { generateRandomNumber, generateRandomString, getFutureDateTimestamp, generateRandomDateTimestamp } from '../helper-functions.mjs';
import { floorMap } from '../helper-functions.mjs';

export const getRacePlace = (n) => {
  // Random number is scaled using a quadractic function to make it more likely to get a higher scaledValue
  const scaledValue = Math.sqrt(Math.random());
  return floorMap(scaledValue, n);
}

export const buildMockRace = (raceType = 'road') => {
  const startDate = generateRandomDateTimestamp();
  const endDate =
    raceType === 'stage' ? String(getFutureDateTimestamp(new Date(startDate), 3)) : null;
  const racers = generateRandomNumber(85);
  const place = getRacePlace(racers);
  const upgradePoints = place > racers * 0.9 ? generateRandomNumber(10) : 0;
  const shouldDnf = generateRandomNumber(75) > 75 * 0.9;

  const race = {
    name: generateRandomString(),
    type: raceType,
    startDate,
    endDate,
    category: `Cat ${generateRandomNumber(4) + 1}`,
    place: shouldDnf ? 0 : place,
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
