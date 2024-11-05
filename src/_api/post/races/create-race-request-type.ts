export interface CreateRaceRequest {
  name: string;
  raceTypeId: number;
  startDate: string;
  endDate: string;
  location: string;
}

export const mockCreateRaceRequest = {
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
