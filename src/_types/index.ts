import { Dayjs } from 'dayjs';

export interface INetworkResponse {
  error?: string | null;
}

interface IPickType {
  id: number;
  name: string;
  description: string;
}

interface IBaseEvent {
  name: string;
}

interface IExistingEvent extends IBaseEvent {
  id: number;
}

interface IBaseRace {
  startDate: Dayjs | string;
  endDate?: Dayjs | string | null;
  location?: string;
}

export interface IExistingRace extends IBaseRace {
  id: number;
  eventId: number;
  event: IExistingEvent;
  raceType: IPickType;
  raceTypeId?: number;
}

export interface IRaceYear {
  year: number;
  races: IResult[];
}

export interface IRacerHistory {
  racerId: number;
  results: IRaceYear[];
}

export interface IRiderName {
  first: string;
  last: string;
}

export interface ITeam {
  year: number;
  name: string;
}

export interface ISocials {
  strava?: string;
  insta?: string;
}

export interface ICategory {
  discipline: string;
  category?: number;
  name?: string;
  description?: string;
  id?: number;
}

export interface IHometown {
  country: string | null;
  state?: string | null;
  city: string | null;
}

export interface IResult extends IBaseEvent, IBaseRace {
  id?: number;
  type: string;
  category: string;
  place: number;
  racers: number;
  points: number;
  upgPoints: number;
  stages?: null;
  noPlaceCode?: string | null;
  rider?: TransformedRider;
  time?: string;
}

export interface IRiderInfo {
  id: number;
  currentTeam?: string;
  name: IRiderName;
  teams: ITeam[];
  socials: ISocials;
  categories: ICategory[];
  hometown: IHometown;
  dob: string;
  photo: string;
  wins?: number;
  topResults?: IResult[];
}

export interface IAgeGroup {
  start: number;
  end: number;
  text: string;
}

export interface IGFCategory extends IAgeGroup {
  gender: 'M' | 'F' | 'NB';
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
