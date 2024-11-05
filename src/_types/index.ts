import { Dayjs } from 'dayjs';

// Base Types
export interface IGFCategory extends AgeGroup {
  gender: 'Men' | 'Women' | 'Non Binary';
}

export interface PickType {
  id: number;
  name: string;
  description: string;
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

export interface BaseEvent {
  id?: number;
  name: string;
}

export interface BaseRace {
  id?: number;
  startDate: Dayjs | string;
  endDate?: Dayjs | string | null;
  location?: string;
}

export interface BaseRider {
  id?: number;
  dob?: string;
  photo?: string;
  about?: string;
}

export interface BaseResult {
  place: number;
  points?: number;
  time?: string;
  eventId?: number;
  lap?: number;
}

// Extended Types
export interface ExtendedRace extends BaseRace {
  eventId: number;
  raceTypeId?: number;
  raceType?: PickType;
  event?: BaseEvent;
}

export interface TransformedRider extends BaseRider {
  firstName: string;
  lastName: string;
  country?: string;
  hometown?: string;
  strava?: string;
  insta?: string;
}

export interface ExtendedEvent extends BaseEvent {
  Race: ExtendedRace[];
}

export interface RiderResult extends BaseResult {
  name: string;
  noPlaceCode?: string | null;
  resultType?: string;
  category?: string;
  racers: number;
  type: string;
  startDate: string;
  endDate?: string | null;
  location?: string;
}

export interface YearlyResults {
  year: number;
  races: RiderResult[];
}
