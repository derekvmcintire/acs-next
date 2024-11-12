import { GetRacesResponse } from '@/src/_api/get/races/fetch-races-response-type';
import { createResult } from '@/src/_api/post/results/create-result';
import { CreateResultRequest } from '@/src/_api/post/results/create-result-request-type';
import { CreateResultReturn } from '@/src/_api/post/results/create-result-return-type';
import { PreparedResult } from './parse-results';
import { createNewRiderIdFromResult, fetchRiderIdFromResult } from './process-new-rider';

export const createResultForRace = async (
  rawResult: PreparedResult,
  race: GetRacesResponse,
  riderId: number,
  categories: string[]
): Promise<CreateResultReturn> => {
  if (!race?.eventId || !riderId) {
    throw new Error('Missing Event or Rider Id');
  }
  const data: CreateResultRequest = {
    eventId: race.eventId,
    riderId,
    resultTypeId: 1,
    noPlaceCodeTypeId: 1,
    lap: 1,
    place: Number(rawResult.place),
    time: String(rawResult.time),
    points: Number(rawResult.points),
    categories,
  };

  const createdResult = await createResult(data);
  if (!createdResult || 'error' in createdResult) {
    throw new Error(String('Error creating result'));
  }
  return createdResult;
};

const processResult = async (
  result: PreparedResult,
  race: GetRacesResponse,
  riderId: number,
  categories: string[]
): Promise<CreateResultReturn> => {
  const createdResult = await createResultForRace(result, race, riderId, categories);

  if (!createdResult) {
    throw new Error('Error creating result');
  }

  return Promise.resolve(createdResult);
};

export const processPreparedResult = async (
  result: PreparedResult,
  race: GetRacesResponse,
  categories: string[]
): Promise<CreateResultReturn> => {
  const riderId =
    (await fetchRiderIdFromResult(result)) || (await createNewRiderIdFromResult(result));

  if (!riderId) {
    throw new Error('Problem getting rider id');
  }

  return Promise.resolve(processResult(result, race, riderId, categories));
};
