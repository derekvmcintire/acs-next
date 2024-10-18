import { mockRider } from '@/src/_db/mock-data/mock-racer';
import { IAgeGroup, ITeams } from '@/src/_types';
import {
  ACS_COLOR_BRONZE,
  ACS_COLOR_DARK_GOLD,
  ACS_COLOR_DARK_SILVER,
  ACS_COLOR_LIGHT_GOLD,
  ACS_COLOR_LIGHT_SILVER,
  GF_AGE_GROUPS,
  LIGHT_COLOR_SCHEME,
} from '@/src/global-constants';

export const getMockRiderInfo = () => mockRider;

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

export const calculateAgeGroupFromDob = (dob: string): IAgeGroup => {
  const birthDate = new Date(dob);
  const age = calculateAge(birthDate);
  return getGFAgeGroup(age);
};

export const getTopResultPlaceColor = (place: number, colorScheme: string) => {
  switch (place) {
    case 1:
      return colorScheme === LIGHT_COLOR_SCHEME ? ACS_COLOR_DARK_GOLD : ACS_COLOR_LIGHT_GOLD;
    case 2:
      return colorScheme === LIGHT_COLOR_SCHEME ? ACS_COLOR_DARK_SILVER : ACS_COLOR_LIGHT_SILVER;
    case 3:
      return ACS_COLOR_BRONZE;
    default:
      return '';
  }
};
