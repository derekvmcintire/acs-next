import { BaseEvent, PickType } from '@/src/_types';

export interface CreateRaceReturn {
  id: number;
  eventId: number;
  raceTypeId: number;
  startDate: string;
  endDate: string | null;
  location: string;
  event: BaseEvent;
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
