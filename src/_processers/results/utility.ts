import { PreparedResult } from '@/src/_processers/results/prepare';
import { IRiderInfo } from '@/src/_types';
import { CreateRaceReturnData } from '../../_api/create-race';
import { createResult, CreateResultData } from '../../_api/create-result';
import { createRider, CreateRiderData, CreateRiderReturnData } from '../../_api/create-rider';
import { getRidersByName } from '../../_api/get-riders-by-name';
import { IGetRidersResponse } from '../../_api/types';

export interface FullName {
  firstName: string;
  lastName: string;
}

export const splitName = (name: string): FullName => {
  const lastSpaceIndex = name.lastIndexOf(' ');
  if (lastSpaceIndex === -1) return { firstName: '', lastName: name };
  const firstName = name.slice(0, lastSpaceIndex);
  const lastName = name.slice(lastSpaceIndex + 1);
  return {
    firstName,
    lastName,
  };
};

export const fetchRiderMatches = async (result: PreparedResult): Promise<IRiderInfo[]> => {
  const riderName = result?.name;
  if (!riderName) {
    return [];
  }
  const matches: IGetRidersResponse = await getRidersByName(String(riderName));
  if (matches && matches?.error) {
    throw new Error(String(matches.error));
  }
  const riderMatches = Array.isArray(matches?.riders) ? matches?.riders : [];
  return riderMatches;
};

export const createNewRiderFromPreparedResult = async (
  result: PreparedResult
): Promise<CreateRiderReturnData | void> => {
  if (!result?.name) {
    return Promise.resolve();
  }
  const { firstName, lastName } = splitName(result.name.toString());
  const riderData: CreateRiderData = {
    firstName,
    lastName,
    dob: '',
    country: '',
    hometown: String(result.hometowm || ''),
    photo: '',
    strava: '',
    insta: '',
    about: '',
  };
  const createdRider = await createRider(riderData);
  if (!createdRider || 'error' in createdRider) {
    throw new Error(String('Error creating race'));
  }
  return createdRider;
};

export const createResultForRace = async (
  rawResult: PreparedResult,
  race: CreateRaceReturnData,
  rider: CreateRiderReturnData | IRiderInfo
): Promise<CreateRaceReturnData> => {
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

export const processPreparedResult = async (
  result: PreparedResult,
  race: CreateRaceReturnData
): Promise<void> => {
  const riderMatches = await fetchRiderMatches(result);
  const riderAlreadyExists = riderMatches.length > 1;

  if (riderAlreadyExists) {
    const rider = riderMatches[0];
    createResultForRace(result, race, rider);
  } else {
    const createdRider = await createNewRiderFromPreparedResult(result);

    if (!createdRider) {
      throw new Error('Error creating rider');
    }
    createResultForRace(result, race, createdRider);
  }
};
