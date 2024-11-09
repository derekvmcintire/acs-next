import { GetRacesResponse } from '@/src/_api/get/races/get-races-response-type';
import { getRecentRaceResults } from '@/src/_api/get/results/get-race-results';

export const fetchResultsForReport = async (race: GetRacesResponse) => {
  try {
    const response = await getRecentRaceResults(race.id);

    if (response?.error) {
      console.error(`Error getting results for race with id: ${race.id}`);
      return null;
    }

    const results = response.results || [];
    const numberOfRiders = results.length || 0;

    return {
      raceId: race.id,
      raceStartDate: race.startDate,
      numberOfRiders,
    };
  } catch (error) {
    console.error(`Unknown error for race id ${race.id}: ${error}`);
    return null;
  }
};
