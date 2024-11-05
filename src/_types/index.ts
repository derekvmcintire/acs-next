import { Dayjs } from 'dayjs';

export interface INetworkResponse {
  error?: string | null;
}

export interface PickType {
  id: number;
  name: string;
  description: string;
}

export interface BaseEvent {
  id?: number;
  name: string;
}

export interface BaseRace {
  startDate: Dayjs | string;
  endDate?: Dayjs | string | null;
  location?: string;
}

export interface RiderName {
  first: string;
  last: string;
}

export interface Team {
  year: number;
  name: string;
  id?: number;
  url?: string;
  description?: string;
}

export interface Socials {
  strava?: string;
  insta?: string;
}

export interface Hometown {
  country: string | null;
  city: string | null;
}

export interface AgeGroup {
  start: number;
  end: number;
  text: string;
}

export interface RiderResult {
  name: string;
  place: number;
  time?: string;
  points?: number;
  noPlaceCode?: string | null;
  resultType?: string;
  eventId?: number;
  category?: string;
  racers: number;
  type: string;
  startDate: string;
  endDate?: string | null;
  location?: string;
  lap?: number;
}

export interface YearlyResults {
  year: number;
  races: RiderResult[];
}

export interface IGFCategory extends AgeGroup {
  gender: 'Men' | 'Women' | 'Non Binary';
}

export interface BaseRider {
  id?: number;
  dob: string;
  photo: string;
}

export interface TransformedRider extends BaseRider {
  firstName: string;
  lastName: string;
  country: string;
  hometown: string;
  strava: string;
  insta: string;
  about: string;
}
