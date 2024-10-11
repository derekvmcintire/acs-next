import { IRacerInfo } from '../../types';
import { FIRST_NAMES, LAST_NAMES } from '../constants/names';
import { SPONSORS } from '../constants/teams';
import { generateRandomDateTimestamp, generateRandomNumber, generateRandomString } from '../utils';

interface IOptionalRacerInfo extends Partial<IRacerInfo> {}

const generateRandomTeam = (n: number) => {
  const randomNumber = generateRandomNumber(n);

  let team = '';
  for (let i = 0; i < randomNumber; i++) {
    const word = SPONSORS[generateRandomNumber(SPONSORS.length - 1)];
    team = `${team} ${word}`;
  }

  return team;
};

export const buildMockRacerInfo = (racerInfo: IOptionalRacerInfo = {}): IRacerInfo => {
  const { id, name, socials, dob, categories, teams, hometown, photo } = racerInfo;

  return {
    id: id || generateRandomNumber(),
    name: name || {
      first: FIRST_NAMES[generateRandomNumber(FIRST_NAMES.length - 1)],
      last: LAST_NAMES[generateRandomNumber(LAST_NAMES.length - 1)],
    },
    socials: socials || {
      strava: String(generateRandomNumber(10000000)),
      insta: generateRandomString(),
    },
    dob: dob || generateRandomDateTimestamp(),
    categories: categories || [
      {
        discipline: 'road',
        category: generateRandomNumber(4),
      },
      {
        discipline: 'cx',
        category: generateRandomNumber(4),
      },
      {
        discipline: 'xc',
        category: generateRandomNumber(2),
      },
    ],
    teams: teams || [
      {
        year: 2024,
        name: generateRandomTeam(4),
      },
      {
        year: 2023,
        name: generateRandomTeam(4),
      },
      {
        year: 2022,
        name: generateRandomTeam(5),
      },
    ],
    hometown: hometown || {
      country: generateRandomString(3),
      state: generateRandomString(2),
      city: generateRandomString(),
    },
    photo:
      photo ||
      'https://dgtzuqphqg23d.cloudfront.net/xpqTav-4hWRXpvJoODOMmpeI_jUOONmJZ6KnCrG7ncc-2048x1536.jpg',
  };
};
