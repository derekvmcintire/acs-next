import { Hometown, RiderName, Socials, Team } from '@/src/_types/base-types';
import { RiderResult } from '@/src/_types/extended-types';
import { GetCategoriesResponse } from '../categories/get-categories-response-type';

export interface GetRiderResponse {
  id: number;
  currentTeam?: string;
  name: RiderName;
  teams?: Team[];
  socials?: Socials;
  categories: GetCategoriesResponse[];
  hometown?: Hometown;
  dob?: string;
  photo?: string;
  wins?: number;
  topResults?: RiderResult[];
}

export const mockGetRiderResponse: GetRiderResponse = {
  id: 1,
  currentTeam: 'X Jumbo TDT Uno',
  name: {
    first: 'Tiesj',
    last: 'Helly',
  },
  teams: [
    {
      year: 2024,
      name: 'X Jumbo TDT Uno',
      id: 7,
      url: '',
      description:
        "X Jumbo TDT Uno is a racing community. We help each other keep things dialed on and off the bike to realize one another's  athletic goals.",
    },
  ],
  socials: {
    strava: '5904340',
    insta: 'yssze',
  },
  categories: [
    {
      id: 1,
      disicpline: 'road',
      name: 'Cat 1',
    },
  ],
  hometown: {
    country: 'Luxembourg',
    city: 'Chiang Mai',
  },
  dob: 'Mon Jan 14 1985',
  photo: 'https://www.procyclingstats.com/images/riders/bp/aa/remco-evenepoel-2024.jpeg',
  wins: 43,
};
