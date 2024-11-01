import { createRider, CreateRiderData, CreateRiderReturnData } from '@/src/_api/create-rider';
import { getRidersByName } from '@/src/_api/get-riders-by-name';
import { IGetRidersResponse } from '@/src/_api/types';
import { IRiderInfo } from '@/src/_types';
import { splitName } from './helper-functions';
import { PreparedResult } from './prepare-results';

// fetch rider if they already exist
export const fetchRiderFromResult = async (result: PreparedResult): Promise<IRiderInfo | null> => {
  const riderName = result?.name;
  if (!riderName) {
    return null;
  }
  const matches: IGetRidersResponse = await getRidersByName(String(riderName));
  if (matches && matches?.error) {
    throw new Error(String(matches.error));
  }
  const riderMatches = Array.isArray(matches?.riders) ? matches?.riders : [];
  return riderMatches.length > 1 ? riderMatches[0] : null;
};

// create a new rider from a prepared result
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
