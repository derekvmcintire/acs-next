import { CreateResultReturnData } from '@/src/_api/create-result';
import { PreparedResult, prepareResults } from '@/src/_processers/results/utility/prepare-results';
import { ResultFormData } from '@/src/app/results/upload/page';
import { createRace, CreateRaceReturnData } from '../../_api/create-race';
import { processPreparedResult } from './utility/process-prepared-results';

export type ProcessResultsReturnData = {
  race: CreateRaceReturnData;
  resultsCreated: CreateResultReturnData[];
};

export const processResults = async (data: ResultFormData): Promise<ProcessResultsReturnData> => {
  const { name, startDate, location, results } = data;
  const raceData = {
    name,
    raceTypeId: 1,
    startDate: startDate ? startDate.toLocaleDateString() : new Date().toLocaleDateString(),
    endDate: '',
    location: location || '',
  };

  const race = await createRace(raceData);
  if (!race || 'error' in race) {
    throw new Error(String('Error creating race'));
  }

  if (!results) {
    return Promise.resolve({ race, resultsCreated: [] });
  }

  const preparedResults = prepareResults(results);
  const finalizedResults = await Promise.all(
    preparedResults.map(async (result: PreparedResult) => {
      const finalizedResult = await processPreparedResult(result, race);
      return finalizedResult;
    })
  );

  return Promise.resolve({ race, resultsCreated: finalizedResults });
};
