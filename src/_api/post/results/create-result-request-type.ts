export interface CreateResultRequest {
  eventId: number;
  riderId: number;
  resultTypeId: number;
  noPlaceCodeTypeId: number;
  lap: number;
  place: number;
  time: string;
  points: number;
  categories: string[];
}

export const mockCreateResultRequest = {
  eventId: 1,
  resultTypeId: 1,
  riderId: 1,
  noPlaceCodeTypeId: 1,
  lap: 1,
  place: 4,
  time: '',
  points: 1,
};
