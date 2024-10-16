import { FIRST_NAMES, LAST_NAMES } from '../../constants/names.mjs';
import { IMG_URLS } from '../../constants/photos.mjs';
import { generateRandomTeam, generateRandomNumber, generateRandomString, getRandomBirthday } from '../helper-functions.mjs';

export const buildMockRacerInfo = (racerInfo = {}, teamName) => {
  const { id, name, socials, dob, categories, teams, hometown, photo } = racerInfo;

  return {
    id: id,
    name: name || {
      first: FIRST_NAMES[generateRandomNumber(FIRST_NAMES.length - 1)],
      last: LAST_NAMES[generateRandomNumber(LAST_NAMES.length - 1)],
    },
    socials: socials || {
      strava: String(generateRandomNumber(10000000)),
      insta: generateRandomString(),
    },
    dob: dob || getRandomBirthday(),
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
        name: teamName || generateRandomTeam(4),
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
      country: generateRandomString(1000).substring(0, 2),
      state: generateRandomString(1000).substring(0, 2),
      city: generateRandomString(),
    },
    photo: photo || IMG_URLS[generateRandomNumber(IMG_URLS.length - 1)],
  };
};
