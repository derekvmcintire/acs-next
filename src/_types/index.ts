import { NO_PLACE_CODE, RACE_TYPES } from './constants';

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

export interface ITeams {
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

export interface IRiderInfo {
  id: number;
  name: IRiderName;
  teams: ITeams[];
  socials: ISocials;
  categories: ICategory[];
  hometown: IHometown;
  dob: string;
  photo: string;
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
