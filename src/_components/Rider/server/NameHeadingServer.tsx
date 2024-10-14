import { MdArrowForwardIos } from 'react-icons/md';
import { Text, Title } from '@mantine/core';
import { IAgeGroup, ICategory, IRacerInfo } from '@/src/_types';
import CategoryBadge from '../../_ui/CategoryBadge';
import { calculateAge, getCurrentTeam, getGFAgeGroup } from '../utils';
import classes from '../styles/rider.module.css';

const mapCategories = (categories: ICategory[]): React.ReactNode => {
  return categories.map((c: ICategory) => (
    <span key={c.discipline}>
      <CategoryBadge>{`${c.discipline}: cat ${c.category}`}</CategoryBadge>
    </span>
  ));
};

interface NameHeadingServerProps {
  riderInfo: IRacerInfo;
}

export const NameHeadingServer = ({ riderInfo }: NameHeadingServerProps) => {
  const { name, dob, teams, categories } = riderInfo;

  const team = getCurrentTeam(teams);
  const birthDay = new Date(dob);
  const age = calculateAge(birthDay);
  const gfAgeCategory: IAgeGroup = getGFAgeGroup(age);

  const TEAM_PLACEHOLDER_TEXT = 'n/a';

  return (
    <div className={classes.riderTitle}>
      <Title>
        <Text inherit c="orange" component="span">
          {`${name.first || ''} ${name.last || ''} `}
        </Text>
        <Text component="span">
          <MdArrowForwardIos />
        </Text>
        <Text className={classes.riderTeam} component="span">
          {` ${team || TEAM_PLACEHOLDER_TEXT}`}
        </Text>
      </Title>
      {mapCategories(categories)}
      <CategoryBadge>{`GF: ${gfAgeCategory.text}`}</CategoryBadge>
    </div>
  );
};
