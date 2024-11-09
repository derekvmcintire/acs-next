// type for data going into the chart
export type MonthlyRaceData = {
  name: string;
  numberOfRaces: number;
  numberOfRiders: number;
};

// temporary data shape used to build MonthlyRaceData
export type TempRace = {
  raceId: number;
  raceStartDate: string;
  numberOfRiders: number;
};

export const mockResultReports: MonthlyRaceData[] = [
  {
    name: 'March',
    numberOfRaces: 14,
    numberOfRiders: 253,
  },
  {
    name: 'April',
    numberOfRaces: 25,
    numberOfRiders: 366,
  },
  {
    name: 'May',
    numberOfRaces: 27,
    numberOfRiders: 376,
  },
  {
    name: 'June',
    numberOfRaces: 33,
    numberOfRiders: 412,
  },
  {
    name: 'July',
    numberOfRaces: 41,
    numberOfRiders: 433,
  },
  {
    name: 'August',
    numberOfRaces: 39,
    numberOfRiders: 398,
  },
];
