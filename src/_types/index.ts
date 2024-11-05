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

export interface IHometown {
  country: string | null;
  state?: string | null;
  city: string | null;
}

export interface IAgeGroup {
  start: number;
  end: number;
  text: string;
}

export interface IGFCategory extends IAgeGroup {
  gender: 'M' | 'F' | 'NB';
}
