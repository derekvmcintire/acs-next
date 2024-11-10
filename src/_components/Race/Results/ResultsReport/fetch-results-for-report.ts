import { GetRacesResponse } from '@/src/_api/get/races/fetch-races-response-type';
import { fetchRaceResults } from '@/src/_api/get/results/fetch-race-results';

export const fetchResultsForReport = async (race: GetRacesResponse) => {
  try {
    const response = await fetchRaceResults(race.id);

    // @TODO: handle this error
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

    // @TODO: handle this error
  } catch (error) {
    console.error(`Unknown error for race id ${race.id}: ${error}`);
    return null;
  }
};
