import { GetRacesResponse } from '@/src/_api/get/races/fetch-races-response-type';
import { CreateResultReturn } from '@/src/_api/post/results/create-result-return-type';
import { RaceFormData } from '@/src/_components/Uploader/RaceForm/index';
import { createRace } from '../../_api/post/races/create-race';

export type ProcessResultsReturnData = {
  race: GetRacesResponse;
  resultsCreated: CreateResultReturn[];
};

export const createRaceBeforeResults = async (data: RaceFormData) => {
  const { name, startDate, location } = data;
  const raceData = {
    name,
    raceTypeId: 1,
    startDate: startDate ? startDate.toLocaleDateString() : new Date().toLocaleDateString(),
    endDate: '',
    location: location || '',
  };

  const race = await createRace(raceData);
  return race;
};
