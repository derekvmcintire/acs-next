import { NO_PLACE_CODE, RACE_TYPES } from './constants';

export interface INetworkResponse {
  error?: string | null;
}

interface IBaseRaceData {
  name: string;
  type: string;
  startDate: string;
  place: number;
  racers: number;
  points: number;
  upgPoints: number;
  noPlaceCode:
    | typeof NO_PLACE_CODE.DNF
    | typeof NO_PLACE_CODE.DSQ
    | typeof NO_PLACE_CODE.DNS
    | null;
}

export interface IStageData extends IBaseRaceData {
  stageNumber: number;
}

export interface IRaceData extends IBaseRaceData {
  endDate: string | null;
  category: string;
  stages: IStageData[] | null;
}

export interface IRaceYear {
  year: number;
  races: IRaceData[];
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
  category: number;
}

export interface IHometown {
  country: string | null;
  state?: string | null;
  city: string | null;
}

/**
 * parsedResponse be:  {
  id: 3149,
  currentTeam: 'TJ Maxx -',
  name: { first: 'Laurens', last: 'Ghekiere' },
  teams: [ { year: 2024, name: 'TJ Maxx -' } ],
  socials: { strava: '4294964', insta: 'sjzztdg' },
  categories: [ { discipline: 'road', category: 1 } ],
  hometown: { country: 'Iran', city: 'Novi Sad' },
  dob: 'Wed Mar 23 2005',
  photo: 'https://www.procyclingstats.com/images/riders/bp/dc/tadej-pogacar-2024-n2.jpeg',
  wins: 43
}
 */

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
  topResults?: IRaceData[];
}

export type RaceType =
  | typeof RACE_TYPES.HILL
  | typeof RACE_TYPES.ROAD
  | typeof RACE_TYPES.CX
  | typeof RACE_TYPES.XC
  | typeof RACE_TYPES.TT
  | typeof RACE_TYPES.STAGE;

export type StageType =
  | typeof RACE_TYPES.HILL
  | typeof RACE_TYPES.ROAD
  | typeof RACE_TYPES.CX
  | typeof RACE_TYPES.XC
  | typeof RACE_TYPES.TT;

export interface IAgeGroup {
  start: number;
  end: number;
  text: string;
}
