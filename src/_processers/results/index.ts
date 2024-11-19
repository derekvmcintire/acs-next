import { calculatePoints, parseResults, PreparedResult } from 'cycling-results-parser';
import { GetRacesResponse } from '@/src/_api/get/races/fetch-races-response-type';
import { CreateResultReturn } from '@/src/_api/post/results/create-result-return-type';
import { RaceFormData } from '@/src/_components/Uploader/RaceForm/index';
import { createRace } from '../../_api/post/races/create-race';
import { processPreparedResult } from './utility/process-prepared-results';

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

export const processResults = async (
  race: GetRacesResponse,
  results: string,
  categories: string[]
): Promise<ProcessResultsReturnData> => {
  const parsedResults = parseResults(results);
  const totalRacers = parsedResults.length;
  const finalizedResults = await Promise.all(
    parsedResults.map(async (result: PreparedResult) => {
      // @TODO figure out how to import types from library here
      const position = result?.place || 0;
      if (totalRacers && position) {
        const points = calculatePoints({ totalRacers, position: Number(position) });
        result.points = points || 0;
      }
      const finalizedResult = await processPreparedResult(result, race, categories);
      return finalizedResult;
    })
  );

  return Promise.resolve({ race, resultsCreated: finalizedResults });
};
