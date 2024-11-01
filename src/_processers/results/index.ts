import { PreparedResult, prepareResults } from '@/src/_processers/results/prepare';
import { ResultFormData } from '@/src/app/results/upload/page';
import { createRace, CreateRaceReturnData } from '../../_api/create-race';
import { processPreparedResult } from './utility';

export const processResults = async (data: ResultFormData): Promise<CreateRaceReturnData> => {
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
    return Promise.resolve(race);
  }

  const parsedResults = prepareResults(results);
  parsedResults.forEach(async (result: PreparedResult) => {
    processPreparedResult(result, race);
  });

  return Promise.resolve(race);
};
