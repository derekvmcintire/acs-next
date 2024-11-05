import { BaseResult, ExtendedEvent, PickType, TransformedRider } from '@/src/_types';

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

export const mockGetRaceResultsResponse = [
  {
    id: 484,
    eventId: 15,
    riderId: 24,
    resultTypeId: 1,
    noPlaceCodeTypeId: 1,
    lap: null,
    place: 2,
    time: '',
    points: null,
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
];
