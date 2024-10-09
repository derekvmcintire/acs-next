'use client';

import React from 'react';
import { FaStrava } from 'react-icons/fa';
import { Anchor, Text } from '@mantine/core';
import { ICategory, IHometown, ISocials } from '../../../types';
import InfoBlock from './InfoBlock';
import classes from '../styles/RacerInfo.module.css';

export const RACER_INFO_BLOCK_TEST_ID = 'racerInfoBlock';
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
  const getStravaUrl = (stravaId: string = '') => (stravaId ? `${STRAVA_BASE_URL}${stravaId}` : '');

  const { country, city, state } = hometown;
  const { strava } = socials;

  return (
    <section className={classes.details}>
      <InfoBlock>
        <Text>{`Date of Birth: ${dob}`}</Text>
        <Text>{`Nationality: ${country}`}</Text>
        <Text>{`Hometown: ${city || ''}, ${state || ''}`}</Text>
        <Text>Categories:</Text>
        {mapCategories(categories)}
        <Anchor href={getStravaUrl(strava)} aria-label={`Strava profile of ${strava}`}>
          <FaStrava />
        </Anchor>
      </InfoBlock>
    </section>
  );
}
