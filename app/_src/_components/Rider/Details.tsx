import React from 'react';
import { FaStrava } from 'react-icons/fa';
import { Anchor, Text } from '@mantine/core';
import { ICategory, IHometown, ISocials } from '../../_types';
import InfoBlock from '../../_ui/InfoBlock';
import classes from './styles/rider.module.css';

const STRAVA_BASE_URL = 'http://strava.com/athletes/';

interface IDetailsProps {
  socials: ISocials;
  dob: string | null;
  categories: ICategory[];
  hometown: IHometown;
}

const mapCategories = (categories: ICategory[]): React.ReactNode => {
  return categories.map((c: ICategory) => (
    <Text component="span" key={c.discipline}>{`${c.discipline}: ${c.category}/`}</Text>
  ));
};

export default function Details({ socials, dob, categories, hometown }: IDetailsProps) {
  const { country, city, state } = hometown;
  const fullHometown = `Hometown: ${city || ''}, ${state?.toUpperCase() || ''}`;

  const { strava } = socials;
  const stravaUrl = strava ? `${STRAVA_BASE_URL}${strava}` : '';

  return (
    <section className={classes.details}>
      <InfoBlock>
        <Text>{`DOB: ${dob}`}</Text>
        <Text>{`Nationality: ${country?.toUpperCase()}`}</Text>
        <Text>{fullHometown}</Text>
        <Text>Categories:</Text>
        {mapCategories(categories)}
        <div>
          <Anchor href={stravaUrl} aria-label={`Strava profile of ${strava}`}>
            <FaStrava color="orange" />
          </Anchor>
        </div>
      </InfoBlock>
    </section>
  );
}
