import { CreateResultReturnData } from '@/src/_api/create-result';
import { parseResults, PreparedResult } from '@/src/_processers/results/utility/parse-results';
import { ResultFormData } from '@/src/app/results/upload/page';
import { createRace, CreateRaceReturnData } from '../../_api/create-race';
import { processPreparedResult } from './utility/process-prepared-results';

export type ProcessResultsReturnData = {
  race: CreateRaceReturnData;
  resultsCreated: CreateResultReturnData[];
};

export const createRaceBeforeResults = async (data: ResultFormData) => {
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
  existingRace: CreateRaceReturnData | undefined,
  data: ResultFormData
): Promise<ProcessResultsReturnData> => {
  const race = existingRace || (await createRaceBeforeResults(data));

  if (!race || 'error' in race) {
    throw new Error(String('Error creating race'));
  }

  const { results } = data;

  if (!results) {
    return Promise.resolve({ race, resultsCreated: [] });
  }

  const parsedResults = parseResults(results);
  const finalizedResults = await Promise.all(
    parsedResults.map(async (result: PreparedResult) => {
      const finalizedResult = await processPreparedResult(result, race);
      return finalizedResult;
    })
  );

  return Promise.resolve({ race, resultsCreated: finalizedResults });
};
