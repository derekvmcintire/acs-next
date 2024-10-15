import { mockRacer } from '@/src/_db/mock-data/mock-racer';
import { IAgeGroup, ITeams } from '@/src/_types';
import { GF_AGE_GROUPS } from '@/src/global-constants';

export const getMockRiderInfo = () => mockRacer;

export const getCurrentTeam = (teams: ITeams[]): string => {
  if (teams?.length < 1) {
    return '';
  }
  const sortedTeams = teams.sort((a, b) => b.year - a.year);
  return sortedTeams[0].name;
};

export const calculateAge = (dob: Date) => {
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return age;
};

export const getGFAgeGroup = (age: number): IAgeGroup => {
  return GF_AGE_GROUPS.reduce((acc: IAgeGroup, group: IAgeGroup) => {
    const { start, end } = group;
    if (age >= start && age <= end) {
      return group;
    }
    return acc;
  }, GF_AGE_GROUPS[0]);
};
