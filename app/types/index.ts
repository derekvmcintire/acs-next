interface IBaseRaceData {
  name: string;
  type: string;
  startDate: string;
  place: number;
  racers: number;
  points: number;
  upgPoints: number;
  noPlaceCode: 'DNF' | 'DSQ' | 'DNS' | null;
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
  history: IRaceYear[];
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
  strava: string;
  insta: string;
}

export interface ICategory {
  discipline: string;
  category: number;
}

export interface IHometown {
  country: string | null;
  state: string | null;
  city: string | null;
}

export interface IRacerInfo {
  id: number;
  name: IRiderName;
  teams: ITeams[];
  socials: ISocials;
  categories: ICategory[];
  hometown: IHometown;
  dob: string;
  photo: string;
}
