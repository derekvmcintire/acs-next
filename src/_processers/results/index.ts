import { CreateResultReturnData } from '@/src/_api/create-result';
import { RaceFormData } from '@/src/_components/Uploader/RaceForm/index';
import { parseResults, PreparedResult } from '@/src/_processers/results/utility/parse-results';
import { createRace, CreateRaceReturnData } from '../../_api/create-race';
import { processPreparedResult } from './utility/process-prepared-results';

export type ProcessResultsReturnData = {
  race: CreateRaceReturnData;
  resultsCreated: CreateResultReturnData[];
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
  race: CreateRaceReturnData,
  results: string,
  categories: string[]
): Promise<ProcessResultsReturnData> => {
  const parsedResults = parseResults(results);
  const finalizedResults = await Promise.all(
    parsedResults.map(async (result: PreparedResult) => {
      const finalizedResult = await processPreparedResult(result, race, categories);
      return finalizedResult;
    })
  );

  return Promise.resolve({ race, resultsCreated: finalizedResults });
};
