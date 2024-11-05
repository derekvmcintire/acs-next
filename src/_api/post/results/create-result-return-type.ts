export interface CreateResultReturn {
  id: number;
  eventId: number;
  riderId: number;
  resultTypeId: number;
  noPlaceCodeTypeId: number;
  lap: number;
  place: number;
  time: number | null;
  points: number;
}

export const mockCreateResultReturnValue: CreateResultReturn = {
  id: 17344,
  eventId: 1,
  riderId: 1,
  resultTypeId: 1,
  noPlaceCodeTypeId: 1,
  lap: 1,
  place: 4,
  time: null,
  points: 1,
};
