import { BaseEvent, BaseRace, BaseResult, BaseRider, PickType } from './base-types';

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
/**
 *   id?: number;

  place: number;
  points?: number;
  time?: string;
  eventId?: number;
  lap?: number;
 */
export interface RiderResult extends BaseResult {
  name: string; //@TODO Update this to be more specific i.e. "eventName"
  noPlaceCode?: string | null;
  resultType?: string;
  category?: string;
  racers: number; // @TODO update this to be more specific i.e. "numberOfRacers"
  type: string;
  startDate: string;
  endDate?: string | null;
  location?: string;
  rider?: TransformedRider;
}

export interface YearlyResults {
  year: number;
  races: RiderResult[];
}
