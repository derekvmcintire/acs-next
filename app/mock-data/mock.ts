export const mockRacer = {
  id: 1,
  name: {
    first: 'Derek',
    last: 'McIntire',
  },
  socials: {
    strava: '1139466',
    'insta:': 'horizonsoblivious',
  },
  racingAge: 44,
  category: 4,
  teams: [
    {
      year: 2024,
      name: "B2C2 Cycling p/b Conte's Bike Shop",
    },
    {
      year: 2023,
      name: "B2C2 Cycling p/b Conte's Bike Shop",
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

export const mockRacingHistory = {
  racerId: 1,
  history: [
    {
      year: 2024,
      races: [
        {
          name: 'Ascutney Hillclimb',
          type: 'hill',
          startDate: '2024-08-03T00:00:00.000-05:00',
          endDate: null,
          category: 'Overall Men',
          place: 9,
          racers: 65,
          points: 399.38,
          upgPoints: 0,
          stages: null,
          noPlaceCode: null,
        },
        {
          name: 'Green Mountain Stage Race',
          type: 'stage',
          startDate: '2024-08-30T00:00:00.000-05:00',
          endDate: '2024-09-02T00:00:00.000-05:00',
          category: 'Men Cat 3',
          place: 28,
          racers: 85,
          points: 350.3,
          upgPoints: 0,
          stages: [
            {
              name: 'Warren Time Trial',
              stageNumber: 1,
              type: 'tt',
              startDate: '2024-08-30T00:00:00.000-05:00',
              place: 41,
              racers: 85,
              points: 361.67,
              upgPoints: 0,
            },
            {
              name: 'Randolph Circuit Race',
              stageNumber: 2,
              type: 'road',
              startDate: '2024-08-31T00:00:00.000-05:00',
              place: 52,
              racers: 77,
              points: 389.92,
              upgPoints: 0,
            },
            {
              name: 'Mad River Road Race',
              stageNumber: 3,
              type: 'road',
              startDate: '2024-09-01T00:00:00.000-05:00',
              place: 27,
              racers: 74,
              points: 334.64,
              upgPoints: 0,
            },
            {
              name: 'Burlington Criterium',
              stageNumber: 4,
              type: 'crit',
              startDate: '2024-09-02T00:00:00.000-05:00',
              place: 31,
              racers: 67,
              points: 353.75,
              upgPoints: 0,
            },
          ],
          noPlaceCode: null,
        },
        {
          name: 'Kilowatt Cross Day 1',
          type: 'cx',
          startDate: '2024-09-28T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 4/Novice Master 40+',
          place: 1,
          racers: 19,
          points: 363.65,
          upgPoints: 4,
          stages: null,
          noPlaceCode: null,
        },
        {
          name: 'Kilowatt Cross Day 2',
          type: 'cx',
          startDate: '2024-09-29T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 4',
          place: 4,
          racers: 31,
          points: 437.54,
          upgPoints: 2,
          stages: null,
          noPlaceCode: null,
        },
        {
          name: 'BOSSCROSS',
          type: 'cx',
          startDate: '2024-10-05T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 4/5',
          place: 8,
          racers: 67,
          points: 414.03,
          upgPoints: 2,
          stages: null,
          noPlaceCode: null,
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
          category: 'Men Open B',
          place: 6,
          racers: 10,
          points: 451.76,
          upgPoints: 0,
          stages: null,
          noPlaceCode: null,
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
          upgPoints: 0,
          stages: null,
          noPlaceCode: null,
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
          upgPoints: 0,
          stages: null,
          noPlaceCode: null,
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
          upgPoints: 0,
          stages: null,
          noPlaceCode: null,
        },
      ],
    },
    {
      year: 2023,
      races: [
        {
          name: 'Ken Harrod Memorial Road Race',
          type: 'road',
          startDate: '2023-05-20T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 3',
          place: 5,
          racers: 15,
          points: 356.22,
          upgPoints: 2,
          stages: null,
          noPlaceCode: null,
        },
        {
          name: 'Kilowatt Cross Day 1',
          type: 'cx',
          startDate: '2023-09-28T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 4/Novice Master 40+',
          place: 1,
          racers: 19,
          points: 363.65,
          upgPoints: 4,
          stages: null,
          noPlaceCode: null,
        },
        {
          name: 'Kilowatt Cross Day 2',
          type: 'cx',
          startDate: '2023-09-29T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 4',
          place: 4,
          racers: 31,
          points: 437.54,
          upgPoints: 2,
          stages: null,
          noPlaceCode: null,
        },
      ],
    },
  ],
};

// export const MOCK_API = {
//   '/history': mockRacingHistory,
//   '/racer': mockRacer
// }

// interface IParsedURL {
//   path: string;
//   params: Object;
// }

// function parseUrl(url: any): IParsedURL {
//   const [path, queryString] = url.split('?');
//   const params: any = {};

//   if (queryString) {
//       queryString.split('&').forEach((param: string) => {
//           const [key, value] = param.split('=');
//           params[decodeURIComponent(key)] = decodeURIComponent(value || '');
//       });
//   }

//   return {
//       path: path,
//       params: params
//   };
// }

// const _parseHistoryUrl = (url: string): {path: string, year: number} => {
//   const [path, queryString] = url.split('?');
//   let year: number = 0;

//   if (queryString) {
//       queryString.split('&').forEach((param: string) => {
//           const [key, value] = param.split('=');
//           const decodedKey = decodeURIComponent(key);
//           if (decodedKey === 'year') {
//             year = Number(decodeURIComponent(value)) || 0;
//           }
//       });
//   }

//   return {
//       path: path,
//       year: year,
//   };
// }

// export const fetchHistoryFromMockAPI = (url: string) => {
//   // fetchHistoryFromMockAPI('/history?year=2024')
//   const parsed: {path: string, year: number} = _parseHistoryUrl(url);
//   const res = MOCK_API['/history'].history.filter(h => h.year === parsed.year);
//   return res;
// }

/******************************************************************** */

export const mockRacingData = {
  name: {
    first: 'Derek',
    last: 'McIntire',
  },
  socials: {
    strava: '1139466',
    'insta:': 'horizonsoblivious',
  },
  racingAge: 44,
  category: 4,
  teams: [
    {
      year: 2024,
      name: "B2C2 Cycling p/b Conte's Bike Shop",
    },
    {
      year: 2023,
      name: "B2C2 Cycling p/b Conte's Bike Shop",
    },
  ],
  hometown: {
    country: 'USA',
    state: 'Massachusetts',
    city: 'Boston',
  },
  photo:
    'https://dgtzuqphqg23d.cloudfront.net/xpqTav-4hWRXpvJoODOMmpeI_jUOONmJZ6KnCrG7ncc-2048x1536.jpg',
  history: [
    {
      year: 2024,
      races: [
        {
          name: 'Ascutney Hillclimb',
          type: 'hill',
          startDate: '2024-08-03T00:00:00.000-05:00',
          endDate: null,
          category: 'Overall Men',
          place: 9,
          racers: 65,
          points: 399.38,
          upgPoints: 0,
          stages: null,
          noPlaceCode: null,
        },
        {
          name: 'Green Mountain Stage Race',
          type: 'stage',
          startDate: '2024-08-30T00:00:00.000-05:00',
          endDate: '2024-09-02T00:00:00.000-05:00',
          category: 'Men Cat 3',
          place: 28,
          racers: 85,
          points: 350.3,
          upgPoints: 0,
          stages: [
            {
              name: 'Warren Time Trial',
              stageNumber: 1,
              type: 'tt',
              startDate: '2024-08-30T00:00:00.000-05:00',
              place: 41,
              racers: 85,
              points: 361.67,
              upgPoints: 0,
            },
            {
              name: 'Randolph Circuit Race',
              stageNumber: 2,
              type: 'road',
              startDate: '2024-08-31T00:00:00.000-05:00',
              place: 52,
              racers: 77,
              points: 389.92,
              upgPoints: 0,
            },
            {
              name: 'Mad River Road Race',
              stageNumber: 3,
              type: 'road',
              startDate: '2024-09-01T00:00:00.000-05:00',
              place: 27,
              racers: 74,
              points: 334.64,
              upgPoints: 0,
            },
            {
              name: 'Burlington Criterium',
              stageNumber: 4,
              type: 'crit',
              startDate: '2024-09-02T00:00:00.000-05:00',
              place: 31,
              racers: 67,
              points: 353.75,
              upgPoints: 0,
            },
          ],
          noPlaceCode: null,
        },
        {
          name: 'Kilowatt Cross Day 1',
          type: 'cx',
          startDate: '2024-09-28T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 4/Novice Master 40+',
          place: 1,
          racers: 19,
          points: 363.65,
          upgPoints: 4,
          stages: null,
          noPlaceCode: null,
        },
        {
          name: 'Kilowatt Cross Day 2',
          type: 'cx',
          startDate: '2024-09-29T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 4',
          place: 4,
          racers: 31,
          points: 437.54,
          upgPoints: 2,
          stages: null,
          noPlaceCode: null,
        },
        {
          name: 'BOSSCROSS',
          type: 'cx',
          startDate: '2024-10-05T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 4/5',
          place: 8,
          racers: 67,
          points: 414.03,
          upgPoints: 2,
          stages: null,
          noPlaceCode: null,
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
          category: 'Men Open B',
          place: 6,
          racers: 10,
          points: 451.76,
          upgPoints: 0,
          stages: null,
          noPlaceCode: null,
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
          upgPoints: 0,
          stages: null,
          noPlaceCode: null,
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
          upgPoints: 0,
          stages: null,
          noPlaceCode: null,
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
          upgPoints: 0,
          stages: null,
          noPlaceCode: null,
        },
      ],
    },
    {
      year: 2023,
      races: [
        {
          name: 'Ken Harrod Memorial Road Race',
          type: 'road',
          startDate: '2023-05-20T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 3',
          place: 5,
          racers: 15,
          points: 356.22,
          upgPoints: 2,
          stages: null,
          noPlaceCode: null,
        },
        {
          name: 'Kilowatt Cross Day 1',
          type: 'cx',
          startDate: '2023-09-28T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 4/Novice Master 40+',
          place: 1,
          racers: 19,
          points: 363.65,
          upgPoints: 4,
          stages: null,
          noPlaceCode: null,
        },
        {
          name: 'Kilowatt Cross Day 2',
          type: 'cx',
          startDate: '2023-09-29T00:00:00.000-05:00',
          endDate: null,
          category: 'Men Cat 4',
          place: 4,
          racers: 31,
          points: 437.54,
          upgPoints: 2,
          stages: null,
          noPlaceCode: null,
        },
      ],
    },
  ],
};
