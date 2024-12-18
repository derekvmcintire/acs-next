import { BaseEvent, BaseRace, PickType } from '@/src/_types/base-types';
import { GetRaceResultsResponse } from '../results/fetch-race-results-response-type';

export interface GetRacesResponse extends BaseRace {
  id: number;
  eventId: number;
  raceTypeId?: number;
  event: BaseEvent;
  raceType: PickType;
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

export type GroupByOption = 'month' | 'quarter' | 'year';

export type GetTotalsFilters = {
  startDateRange?: {
    from: string;
    to: string;
  };
  groupBy?: GroupByOption;
};

export interface GetRacesTotalsResponse {
  startDate?: string;
  totalRaces: number | null;
  totalRiders: number | null;
}

export const mockGetRacesTotalsResponse = [
  {
    startDate: '2024-10-01T04:00:00.000Z',
    totalRaces: 4,
    totalRiders: 125,
  },
  {
    startDate: '2024-11-01T04:00:00.000Z',
    totalRaces: 2,
    totalRiders: 70,
  },
];

export interface GetRecentRaceResultsResponse {
  raceId: number;
  results: GetRaceResultsResponse[];
}
