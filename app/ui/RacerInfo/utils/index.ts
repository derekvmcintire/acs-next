import { mockRacer } from '@/app/mockData/mockRacer';
import { ITeams } from '@/app/types';

export const getMockRiderInfo = () => mockRacer;

export const getCurrentTeam = (teams: ITeams[]): string => {
  const sortedTeams = teams.sort((a, b) => b.year - a.year);
  return sortedTeams[0].name;
};
