import { getRidersByName } from '@/src/_api/get/riders/get-riders-by-name';
import { createRider } from '@/src/_api/post/riders/create-rider';
import { CreateRiderRequest } from '@/src/_api/post/riders/create-rider-request-type';
import { IGetRidersResponse } from '@/src/_api/types';
import { splitName } from './helper-functions';
import { PreparedResult } from './parse-results';

export const fetchRiderIdFromResult = async (result: PreparedResult): Promise<number | null> => {
  const riderName = result?.name;
  if (!riderName) {
    return null;
  }
  const matches: IGetRidersResponse = await getRidersByName(String(riderName));
  if (matches && matches?.error) {
    throw new Error(String(matches.error));
  }
  const riderMatches = Array.isArray(matches?.riders) ? matches?.riders : [];
  return riderMatches.length > 1 ? riderMatches[0].id : null;
};

export const createNewRiderIdFromResult = async (
  result: PreparedResult
): Promise<number | void> => {
  if (!result?.name) {
    return Promise.resolve();
  }
  const { firstName, lastName } = splitName(result.name.toString());
  const hometown = typeof result?.hometown === 'string' ? result?.hometown : '';
  const riderData: CreateRiderRequest = {
    firstName,
    lastName,
    dob: '',
    country: '',
    hometown,
    photo: '',
    strava: '',
    insta: '',
    about: '',
  };
  const createdRider = await createRider(riderData);
  if (!createdRider || 'error' in createdRider) {
    throw new Error(String('Error creating race'));
  }
  return createdRider.id;
};
