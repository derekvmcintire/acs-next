import { CreateRaceReturnData } from '@/src/_api/create-race';
import { createResult, CreateResultData, CreateResultReturnData } from '@/src/_api/create-result';
import { CreateRiderReturnData } from '@/src/_api/create-rider';
import { IRiderInfo } from '@/src/_types';
import { PreparedResult } from './prepare-results';
import { createNewRiderFromPreparedResult, fetchRiderFromResult } from './process-new-rider';

export const createResultForRace = async (
  rawResult: PreparedResult,
  race: CreateRaceReturnData,
  rider: CreateRiderReturnData | IRiderInfo
): Promise<CreateResultReturnData> => {
  if (!race?.eventId || !rider?.id) {
    throw new Error('Missing Event or Rider Id');
  }
  const data: CreateResultData = {
    eventId: race.eventId,
    riderId: rider.id,
    resultTypeId: 1,
    noPlaceCodeTypeId: 1,
    lap: 1,
    place: Number(rawResult.place),
    time: String(rawResult.time),
    points: 1,
  };
  const createdResult = await createResult(data);
  if (!createdResult || 'error' in createdResult) {
    throw new Error(String('Error creating race'));
  }
  return createdResult;
};

const processResultForNewRider = async (
  result: PreparedResult,
  race: CreateRaceReturnData
): Promise<CreateResultReturnData> => {
  const createdRider = await createNewRiderFromPreparedResult(result);

  if (!createdRider) {
    throw new Error('Error creating rider');
  }

  const createdResult = await createResultForRace(result, race, createdRider);

  if (!createdResult) {
    throw new Error('Error creating result');
  }

  return Promise.resolve(createdResult);
};

const processResultForExistingRider = async (
  result: PreparedResult,
  race: CreateRaceReturnData,
  rider: IRiderInfo
): Promise<CreateResultReturnData> => {
  const createdResult = await createResultForRace(result, race, rider);

  if (!createdResult) {
    throw new Error('Error creating result');
  }

  return Promise.resolve(createdResult);
};

export const processPreparedResult = async (
  result: PreparedResult,
  race: CreateRaceReturnData
): Promise<CreateResultReturnData> => {
  const rider = await fetchRiderFromResult(result);

  if (!rider) {
    return Promise.resolve(processResultForNewRider(result, race));
  }

  return Promise.resolve(processResultForExistingRider(result, race, rider));
};
