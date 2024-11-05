export interface Event {
  id: number;
  name: string;
}

export interface PickType {
  id: number;
  name: string;
  description: string;
}

export interface GetRacesResponse {
  id: number;
  eventId: number;
  raceTypeId: number;
  startDate: string;
  endDate: string | null;
  location: string;
  event: {
    id: number;
    name: string;
  };
  raceType: {
    id: number;
    name: string;
    description: string;
  };
}

export const mockGetRacesResponse: GetRacesResponse[] = [
  {
    id: 55,
    eventId: 55,
    raceTypeId: 1,
    startDate: '2020-04-08',
    endDate: null,
    location: 'Tour de Mannheim',
    event: {
      id: 55,
      name: 'Tour de Mannheim',
    },
    raceType: {
      id: 1,
      name: 'Road',
      description: 'Road Race Type',
    },
  },
];
