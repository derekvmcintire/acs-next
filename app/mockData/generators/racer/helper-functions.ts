import { SPONSORS } from '../../constants/teams';
import { generateRandomNumber } from '../../utils';

export const generateRandomTeam = (n: number) => {
  const randomNumber = generateRandomNumber(n);

  let team = '';
  for (let i = 0; i < randomNumber; i++) {
    const word = SPONSORS[generateRandomNumber(SPONSORS.length - 1)];
    team = `${team} ${word}`;
  }

  return team;
};
