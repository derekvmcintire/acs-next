import { GetRacesResponse } from '../../get/races/fetch-races-response-type';

// Create return shape is the same as get response
export type CreateRaceReturn = GetRacesResponse;

export const mockCreateRaceReturnValue: CreateRaceReturn = {
  id: 503,
  eventId: 503,
  raceTypeId: 1,
  startDate: '2024-04-12',
  endDate: null,
  location: 'Northfield, MA',
  event: {
    id: 503,
    name: 'Killerwat Grass Crit',
  },
  raceType: {
    id: 1,
    name: 'Road',
    description: 'Road Race Type',
  },
};
