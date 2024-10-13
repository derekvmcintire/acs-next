import { mockRacer } from '@/app/_src/db/mock-data/mock-racer';
import { ITeams } from '@/app/_src/types';

export const getMockRiderInfo = () => mockRacer;

export const getCurrentTeam = (teams: ITeams[]): string => {
  if (teams?.length < 1) {
    return '';
  }
  const sortedTeams = teams.sort((a, b) => b.year - a.year);
  return sortedTeams[0].name;
};
