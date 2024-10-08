export interface IStageData {
  name: string;
  stageNumber: number;
  type: string;
  startDate: string;
  place?: number;
  racers: number;
  points: number;
  upgPoints: number;
  noPlaceCode?: 'DNF' | 'DSQ' | 'DNS';
}

export interface IRaceData {
  name: string;
  type: string;
  startDate: string;
  endDate: string | null;
  category: string;
  place: number | null;
  racers: number;
  points: number;
  upgPoints: number;
  stages: IStageData[] | null;
  noPlaceCode: 'DNF' | 'DSQ' | 'DNS' | null;
}

export interface IRaceYear {
  year: number;
  races: IRaceData[];
}

export interface IRiderName {
  first: string;
  last: string;
}

export interface ITeams {
  year: number;
  name: string;
}

export interface IRacerInfo {
  name: IRiderName;
  teams: ITeams[];
}
