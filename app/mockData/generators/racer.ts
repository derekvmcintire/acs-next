import { IRacerInfo } from '../../types';
import { FIRST_NAMES, LAST_NAMES } from '../constants/names';
import { SPONSORS } from '../constants/teams';
import { generateRandomDateTimestamp, generateRandomNumber, generateRandomString } from '../utils';

interface IOptionalRacerInfo extends Partial<IRacerInfo> {}

const generateRandomTeam = (n: number) => {
  const randomNumber = generateRandomNumber(n) + 2;

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
      strava: generateRandomString(),
      insta: generateRandomString(),
    },
    dob: dob || generateRandomDateTimestamp(),
    categories: categories || [
      {
        discipline: 'road',
        category: generateRandomNumber(5),
      },
      {
        discipline: 'cx',
        category: generateRandomNumber(5),
      },
      {
        discipline: 'xc',
        category: generateRandomNumber(3),
      },
    ],
    teams: teams || [
      {
        year: 2024,
        name: generateRandomTeam(4),
      },
      {
        year: 2023,
        name: generateRandomTeam(3),
      },
      {
        year: 2022,
        name: generateRandomTeam(6),
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
