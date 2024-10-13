import { IRacerInfo } from '../../app/types';

export const TEAM_B2C2_CONTES = "B2C2 Cycling p/b Conte's Bike Shop";
export const TEAM_B2C2_JRA = 'B2C2 Cycling p/b JRA';

export const mockRacer: IRacerInfo = {
  id: 1,
  name: {
    first: 'Derek',
    last: 'McIntire',
  },
  socials: {
    strava: '1139466',
    insta: 'horizonsoblivious',
  },
  dob: '1981-10-16T00:00:00.000-05:00',
  categories: [
    {
      discipline: 'road',
      category: 3,
    },
    {
      discipline: 'cx',
      category: 3,
    },
    {
      discipline: 'xc',
      category: 2,
    },
  ],
  teams: [
    {
      year: 2024,
      name: TEAM_B2C2_CONTES,
    },
    {
      year: 2023,
      name: TEAM_B2C2_CONTES,
    },
    {
      year: 2022,
      name: TEAM_B2C2_JRA,
    },
  ],
  hometown: {
    country: 'USA',
    state: 'Massachusetts',
    city: 'Boston',
  },
  photo:
    'https://dgtzuqphqg23d.cloudfront.net/xpqTav-4hWRXpvJoODOMmpeI_jUOONmJZ6KnCrG7ncc-2048x1536.jpg',
};
