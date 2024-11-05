import { GetRiderResponse } from './_api/get/riders/get-riders-response-type';
import { AgeGroup } from './_types';

// External re-direct URLs
export const STRAVA_BASE_URL = 'http://strava.com/athletes/';

// App paths
export const APP_BASE_URL = 'http://localhost:3000';
export const APP_RIDER_PATH = '/rider';

// Global Colors
export const LIGHT_COLOR_SCHEME = 'light';
export const DARK_COLOR_SCHEME = 'dark';
export const ACS_COLOR_DARK_GOLD = '#B59410';
export const ACS_COLOR_LIGHT_GOLD = '#FFD700';
export const ACS_COLOR_DARK_SILVER = '#71706E';
export const ACS_COLOR_LIGHT_SILVER = '#C0C0C0';
export const ACS_COLOR_BRONZE = '#CD7F32';
export const ACS_COLOR_ORANGE = '#FC8D14';
export const ACS_COLOR_BLUE = '#1B9BE0';
export const ACS_COLOR_FORM = '#7D98A3';
export const ACS_DARK_GREY = '#343637';

// Pick lists and default data
export const DEFAULT_RIDER_NOT_FOUND: GetRiderResponse = {
  id: 0,
  name: {
    first: 'Rider',
    last: 'Not Found',
  },
  teams: [],
  categories: [],
  hometown: { country: '', city: '' },
  dob: '',
  photo: '/shadowbarn.jpeg',
};

export const GF_AGE_GROUPS: AgeGroup[] = [
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
