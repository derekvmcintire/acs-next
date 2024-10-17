import { IRiderInfo } from '../../_types';

export const TEAM_B2C2_CONTES = "B2C2 Cycling p/b Conte's Bike Shop";
export const TEAM_B2C2_JRA = 'B2C2 Cycling p/b JRA';

export const mockRider: IRiderInfo = {
  id: 1,
  currentTeam: 'Composting Seguros',
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
  photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
};
