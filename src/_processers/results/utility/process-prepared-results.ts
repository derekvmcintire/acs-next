import { CreateRaceReturnData } from '@/src/_api/create-race';
import { createResult, CreateResultData, CreateResultReturnData } from '@/src/_api/create-result';
import { PreparedResult } from './parse-results';
import { createNewRiderIdFromResult, fetchRiderIdFromResult } from './process-new-rider';

export const createResultForRace = async (
  rawResult: PreparedResult,
  race: CreateRaceReturnData,
  riderId: number,
  categories: string[]
): Promise<CreateResultReturnData> => {
  if (!race?.eventId || !riderId) {
    throw new Error('Missing Event or Rider Id');
  }
  const data: CreateResultData = {
    eventId: race.eventId,
    riderId,
    resultTypeId: 1,
    noPlaceCodeTypeId: 1,
    lap: 1,
    place: Number(rawResult.place),
    time: String(rawResult.time),
    points: 1,
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
  race: CreateRaceReturnData,
  riderId: number,
  categories: string[]
): Promise<CreateResultReturnData> => {
  const createdResult = await createResultForRace(result, race, riderId, categories);

  if (!createdResult) {
    throw new Error('Error creating result');
  }

  return Promise.resolve(createdResult);
};

export const processPreparedResult = async (
  result: PreparedResult,
  race: CreateRaceReturnData,
  categories: string[]
): Promise<CreateResultReturnData> => {
  const riderId =
    (await fetchRiderIdFromResult(result)) || (await createNewRiderIdFromResult(result));

  if (!riderId) {
    throw new Error('Problem getting rider id');
  }

  return Promise.resolve(processResult(result, race, riderId, categories));
};
