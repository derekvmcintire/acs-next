'use client';

import React from 'react';
import { FaStrava } from 'react-icons/fa';
import { Anchor, Text } from '@mantine/core';
import { ICategory, IHometown, ISocials } from '../../../types';
import InfoBlock from './InfoBlock';
import classes from '../styles/RacerInfo.module.css';

const STRAVA_BASE_URL = 'http://strava.com/athletes/';

interface IDetailsProps {
  socials: ISocials;
  dob: string | null;
  categories: ICategory[];
  hometown: IHometown;
}

const mapCategories = (categories: ICategory[]): React.ReactNode => {
  return categories.map((c: ICategory) => (
    <Text key={c.discipline}>{`${c.discipline}: ${c.category}`}</Text>
  ));
};

export default function Details({ socials, dob, categories, hometown }: IDetailsProps) {
  const { country, city, state } = hometown;
  const fullHometown = `Hometown: ${city || ''}, ${state || ''}`;

  const { strava } = socials;
  const stravaUrl = strava ? `${STRAVA_BASE_URL}${strava}` : '';

  return (
    <section className={classes.details}>
      <InfoBlock>
        <Text>{`Date of Birth: ${dob}`}</Text>
        <Text>{`Nationality: ${country}`}</Text>
        <Text>{fullHometown}</Text>
        <Text>Categories:</Text>
        {mapCategories(categories)}
        <Anchor href={stravaUrl} aria-label={`Strava profile of ${strava}`}>
          <FaStrava />
        </Anchor>
      </InfoBlock>
    </section>
  );
}
