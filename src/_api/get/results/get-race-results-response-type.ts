import { BaseResult, PickType } from '@/src/_types/base-types';
import { ExtendedEvent, TransformedRider } from '@/src/_types/extended-types';

export interface GetRaceResultsResponse extends BaseResult {
  id: number;
  riderId: number;
  resultTypeId: number;
  noPlaceCodeTypeId: number;
  rider: TransformedRider;
  event: ExtendedEvent;
  resultType: PickType;
  noPlaceCodeType: PickType;
}

export const mockGetRaceResultsResponse: GetRaceResultsResponse[] = [
  {
    id: 484,
    eventId: 15,
    riderId: 24,
    resultTypeId: 1,
    noPlaceCodeTypeId: 1,
    lap: undefined,
    place: 2,
    time: '',
    points: undefined,
    rider: {
      id: 24,
      firstName: 'Biniam',
      lastName: 'Madeleine',
      dob: 'Mon Mar 17 1986',
      country: 'Indonesia',
      hometown: 'Mekele',
      photo: 'https://www.procyclingstats.com/images/riders/bp/eb/jens-keukeleire-2023.jpeg',
      strava: '5315466',
      insta: 'ptwtieyqnowc',
      about: "They think I'm just some dumb hick. They said that to me, at a dinner!",
    },
    event: {
      id: 15,
      name: 'Keren Championship',
      Race: [
        {
          id: 15,
          eventId: 15,
          raceTypeId: 1,
          startDate: '2020-06-02',
          endDate: null,
          location: 'Keren Championship',
          raceType: {
            id: 1,
            name: 'Road',
            description: 'Road Race Type',
          },
        },
      ],
    },
    resultType: {
      id: 1,
      name: 'default',
      description: 'Default Result Type',
    },
    noPlaceCodeType: {
      id: 1,
      name: 'NA',
      description: 'Participant Placed',
    },
  },
  {
    id: 485,
    eventId: 15,
    riderId: 25,
    resultTypeId: 1,
    noPlaceCodeTypeId: 1,
    lap: undefined,
    place: 0,
    time: '',
    points: undefined,
    rider: {
      id: 25,
      firstName: 'Borum',
      lastName: 'Madening',
      dob: 'Mon Mar 17 1987',
      country: 'Switzerland',
      hometown: 'Dorchester',
      photo: 'https://www.procyclingstats.com/images/riders/bp/eb/jens-keukeleire-2023.jpeg',
      strava: '5315467',
      insta: 'ptwtieyqnowd',
      about: "They think I'm just some dumb hick. They said that to me, at a dinner!",
    },
    event: {
      id: 15,
      name: 'Keren Championship',
      Race: [
        {
          id: 15,
          eventId: 15,
          raceTypeId: 1,
          startDate: '2020-06-02',
          endDate: null,
          location: 'Keren Championship',
          raceType: {
            id: 1,
            name: 'Road',
            description: 'Road Race Type',
          },
        },
      ],
    },
    resultType: {
      id: 1,
      name: 'default',
      description: 'Default Result Type',
    },
    noPlaceCodeType: {
      id: 2,
      name: 'DNF',
      description: 'Participant Did Not Finish',
    },
  },
];
