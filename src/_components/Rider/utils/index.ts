import { mockRacer } from '@/src/_db/mock-data/mock-racer';
import { ITeams } from '@/src/_types';

export const getMockRiderInfo = () => mockRacer;

export const getCurrentTeam = (teams: ITeams[]): string => {
  if (teams?.length < 1) {
    return '';
  }
  const sortedTeams = teams.sort((a, b) => b.year - a.year);
  return sortedTeams[0].name;
};
