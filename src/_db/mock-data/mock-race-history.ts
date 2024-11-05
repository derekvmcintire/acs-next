import { GetHistoryResponse } from '@/src/_api/get/history/get-history-response-type';
import { buildMockRacesForSingleYear } from './generators/results/build-results-history.mjs';

export const FIRST_NAME_OUT_OF_ORDER = 'Ascutney Hillclimb';
export const FIRST_NAME_IN_ORDER = 'BOSSCROSS';

export const mockRacingHistoryEmpty: GetHistoryResponse = {
  riderId: 2,
  results: [],
};

export const mockRacingHistoryEmptyYear: GetHistoryResponse = {
  riderId: 2,
  results: [
    {
      year: 2024,
      races: buildMockRacesForSingleYear(),
    },
    {
      year: 2023,
      races: [],
    },
    {
      year: 2022,
      races: buildMockRacesForSingleYear(),
    },
  ],
};

export const mockRacingHistoryMissingYear: GetHistoryResponse = {
  riderId: 2,
  results: [
    {
      year: 2024,
      races: buildMockRacesForSingleYear(),
    },
    {
      year: 2022,
      races: buildMockRacesForSingleYear(),
    },
    {
      year: 2021,
      races: buildMockRacesForSingleYear(),
    },
  ],
};

export const mockRacingHistory: GetHistoryResponse = {
  riderId: 1,
  results: [
    {
      year: 2024,
      races: [
        {
          name: FIRST_NAME_OUT_OF_ORDER,
          type: 'hill',
          startDate: '2024-08-03T00:00:00.000-05:00',
          endDate: null,
          category: 'Overall Men',
          place: 9,
          racers: 65,
          points: 329.38,
        },
        {
          name: 'Green Mountain Stage Race Road Race',
          type: 'road',
          startDate: '2024-08-30T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 3',
          place: 28,
          racers: 85,
          points: 350.6,
        },
        {
          name: 'Kilowatt Cross Day 1',
          type: 'cx',
          startDate: '2024-09-28T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 4/Novice Master 40+',
          place: 1,
          racers: 19,
          points: 323.65,
        },
        {
          name: 'Kilowatt Cross Day 2',
          type: 'cx',
          startDate: '2024-09-29T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 4',
          place: 4,
          racers: 31,
          points: 437.5,
        },
        {
          name: FIRST_NAME_IN_ORDER,
          type: 'cx',
          startDate: '2024-10-05T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 4/5',
          place: 8,
          racers: 67,
          points: 424.03,
        },
      ],
    },
    {
      year: 2022,
      races: [
        {
          name: 'Wells Ave',
          type: 'crit',
          startDate: '2022-04-24T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 4/Novice Master 40+',
          place: 6,
          racers: 10,
          points: 451.76,
        },
        {
          name: 'Ascutney Hillclimb',
          type: 'hill',
          startDate: '2022-08-06T00:00:00.000-05:00',
          endDate: null,
          category: 'Overall Men',
          place: 11,
          racers: 50,
          points: 409.5,
        },
        {
          name: 'Mt Washington Hillclimb',
          type: 'hill',
          startDate: '2022-08-20T00:00:00.000-05:00',
          endDate: null,
          category: 'Overall Men',
          place: 21,
          racers: 328,
          points: 390.73,
        },
        {
          name: 'NCC Greylock Hill Climb',
          type: 'hill',
          startDate: '2022-09-10T00:00:00.000-05:00',
          endDate: null,
          category: 'Overall Men',
          place: 9,
          racers: 94,
          points: 363.65,
        },
      ],
    },
    {
      year: 2023,
      races: [
        {
          name: 'NCC Greylock Hill Climb',
          type: 'hill',
          startDate: '2023-09-10T00:00:00.000-05:00',
          endDate: null,
          category: 'Overall Men',
          place: 9,
          racers: 94,
          points: 363.65,
        },
      ],
    },
  ],
};

export const mockRaces = [
  {
    name: 'Mock Race One',
    type: 'hill',
    startDate: '2024-08-03T00:00:00.000-05:00',
    endDate: null,
    category: 'Overall Men',
    place: 1,
    racers: 65,
  },
];
