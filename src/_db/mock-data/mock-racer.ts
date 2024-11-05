import { GetRiderResponse } from '@/src/_api/get/riders/get-riders-response-type';

export const TEAM_B2C2_CONTES = "B2C2 Cycling p/b Conte's Bike Shop";
export const TEAM_B2C2_JRA = 'B2C2 Cycling p/b JRA';

export const MOCK_COUNTRY = 'USA';
export const MOCK_DOB = '1981-10-16T00:00:00.000-05:00';

export const mockRider: GetRiderResponse = {
  id: 1,
  wins: 4,
  topResults: [
    {
      name: 'Mock Race',
      type: 'road',
      startDate: 'Tue Aug 13 2024',
      endDate: null,
      category: 'Cat 2',
      place: 1,
      racers: 1,
      points: 719,
      noPlaceCode: null,
    },
    {
      name: 'Mock Second Race',
      type: 'xc',
      startDate: 'Fri Sep 13 2024',
      endDate: null,
      category: 'Cat 5',
      place: 2,
      racers: 1,
      points: 390,
      noPlaceCode: null,
    },
    {
      name: 'gkkbg',
      type: 'road',
      startDate: 'Thu Oct 17 2024',
      endDate: null,
      category: 'Cat 3',
      place: 1,
      racers: 1,
      points: 82,
      noPlaceCode: null,
    },
    {
      name: 'tisnhwutcegvt',
      type: 'road',
      startDate: 'Fri Jun 07 2024',
      endDate: null,
      category: 'Cat 2',
      place: 1,
      racers: 37,
      points: 372,
      noPlaceCode: null,
    },
    {
      name: 'rqvcikadjin',
      type: 'road',
      startDate: 'Wed Aug 14 2024',
      endDate: null,
      category: 'Cat 5',
      place: 3,
      racers: 8,
      points: 746,
      noPlaceCode: null,
    },
    {
      name: 'a',
      type: 'tt',
      startDate: 'Fri Feb 09 2024',
      endDate: null,
      category: 'Cat 4',
      place: 3,
      racers: 34,
      points: 765,
      noPlaceCode: null,
    },
    {
      name: 'qdwibjsrt',
      type: 'road',
      startDate: 'Thu Nov 14 2024',
      endDate: null,
      category: 'Cat 2',
      place: 3,
      racers: 37,
      points: 711,
      noPlaceCode: null,
    },
    {
      name: 'ah',
      type: 'cx',
      startDate: 'Wed Oct 16 2024',
      endDate: null,
      category: 'Cat 2',
      place: 3,
      racers: 4,
      points: 30,
      noPlaceCode: null,
    },
  ],
  name: {
    first: 'Derek',
    last: 'McIntire',
  },
  socials: {
    strava: '1139466',
    insta: 'horizonsoblivious',
  },
  dob: MOCK_DOB,
  categories: [
    {
      id: 1,
      disicpline: 'road',
      name: 'Cat 3',
    },
    {
      id: 2,
      disicpline: 'cx',
      name: 'Cat 3',
    },
    {
      id: 3,
      disicpline: 'xc',
      name: 'Cat 2',
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
    country: MOCK_COUNTRY,
    city: 'Boston',
  },
  photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
};

export const mockTeamMembers: GetRiderResponse[] = [
  {
    id: 1,
    wins: 4,
    topResults: [],
    name: {
      first: 'Jonas',
      last: 'Tacktheritrix',
    },
    socials: {
      strava: '1139466',
      insta: 'horizonsoblivious',
    },
    dob: '1985-07-18T00:00:00.000-05:00',
    categories: [
      {
        id: 1,
        disicpline: 'road',
        name: 'Cat 3',
      },
      {
        id: 2,
        disicpline: 'cx',
        name: 'Cat 3',
      },
      {
        id: 3,
        disicpline: 'xc',
        name: 'Cat 2',
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
      country: MOCK_COUNTRY,
      city: 'Boston',
    },
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  },
  {
    id: 2,
    wins: 4,
    topResults: [],
    name: {
      first: 'Biniam',
      last: 'Gamma',
    },
    socials: {
      strava: '1139466',
      insta: 'horizonsoblivious',
    },
    dob: '1999-02-24T00:00:00.000-05:00',
    categories: [
      {
        id: 1,
        disicpline: 'road',
        name: 'Cat 3',
      },
      {
        id: 2,
        disicpline: 'cx',
        name: 'Cat 3',
      },
      {
        id: 3,
        disicpline: 'xc',
        name: 'Cat 2',
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
      country: MOCK_COUNTRY,
      city: 'Boston',
    },
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  },
  {
    id: 3,
    wins: 4,
    topResults: [],
    name: {
      first: 'Fin',
      last: 'Velocez',
    },
    socials: {
      strava: '1139466',
      insta: 'horizonsoblivious',
    },
    dob: '1977-12-04T00:00:00.000-05:00',
    categories: [
      {
        id: 1,
        disicpline: 'road',
        name: 'Cat 3',
      },
      {
        id: 2,
        disicpline: 'cx',
        name: 'Cat 3',
      },
      {
        id: 3,
        disicpline: 'xc',
        name: 'Cat 2',
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
      country: MOCK_COUNTRY,
      city: 'Boston, Massachusetts',
    },
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  },
];
