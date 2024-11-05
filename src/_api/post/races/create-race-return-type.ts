export interface Event {
  id?: number;
  name: string;
}

export interface PickType {
  id?: number;
  name: string;
  description?: string;
}

export interface CreateRaceReturn {
  id: number;
  eventId: number;
  raceTypeId: number;
  startDate: string;
  endDate: string | null;
  location: string;
  event: Event;
  raceType: PickType;
}

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
