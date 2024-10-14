import { IAgeGroup } from './_types';

export const GF_AGE_GROUPS: IAgeGroup[] = [
  { start: 1, end: 13, text: 'Under 14' },
  { start: 14, end: 16, text: '14-16' },
  { start: 17, end: 18, text: '17-18' },
  { start: 19, end: 24, text: '19-24' },
  { start: 25, end: 29, text: '25-29' },
  { start: 30, end: 34, text: '30-34' },
  { start: 35, end: 39, text: '35-39' },
  { start: 40, end: 44, text: '40-44' },
  { start: 45, end: 49, text: '45-49' },
  { start: 50, end: 54, text: '50-54' },
  { start: 55, end: 59, text: '55-59' },
  { start: 60, end: 64, text: '60-64' },
  { start: 64, end: 69, text: '65-69' },
  { start: 70, end: 74, text: '70-74' },
  { start: 75, end: 10000, text: '75 and Over' },
];

export const STRAVA_BASE_URL = 'http://strava.com/athletes/';
