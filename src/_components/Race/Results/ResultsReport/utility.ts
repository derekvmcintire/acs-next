import dayjs from 'dayjs';
import { MonthlyRaceData, TempRace } from './results-report-types';

export function groupRacesByMonth(races: TempRace[]): MonthlyRaceData[] {
  const monthMap = races.reduce((acc: Record<string, MonthlyRaceData>, race: TempRace) => {
    // Parse date and get month name and year
    const date = dayjs(race.raceStartDate);
    const monthName = date.format('MMM');
    const yearMonthKey = `${date.year()}-${date.month()}`; // Using month number for sorting

    // Initialize the month's data if not already present
    if (!acc[yearMonthKey]) {
      acc[yearMonthKey] = {
        name: monthName,
        numberOfRaces: 0,
        numberOfRiders: 0,
      };
    }

    // Update the month's totals
    acc[yearMonthKey].numberOfRaces += 1;
    acc[yearMonthKey].numberOfRiders += race.numberOfRiders;

    return acc;
  }, {});

  // @TODO double check all of this logic
  // Convert the object to an array, sort by ascending month, and return it
  return Object.values(monthMap).sort(
    (a, b) => dayjs(`${a.name} 1`).month() - dayjs(`${b.name} 1`).month()
  );
}
