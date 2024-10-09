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

export default function Details({ socials, dob, categories, hometown }: IDetailsProps) {
  const mapCategories = (): React.ReactNode => {
    return categories.map((c: ICategory) => <Text>{`${c.discipline}: ${c.category}`}</Text>);
  };

  const getStravaUrl = (stravaId: string = '') => (stravaId ? `${STRAVA_BASE_URL}${stravaId}` : '');

  return (
    <section className={classes.details}>
      <InfoBlock>
        <Text>{`Date of Birth: ${dob}`}</Text>
        <Text>{`Nationality: ${hometown.country}`}</Text>
        <Text>{`Hometown: ${hometown.city || ''}, ${hometown.state || ''}`}</Text>
        <Text>Categories:</Text>
        {mapCategories()}
        <Anchor href={getStravaUrl(socials.strava)}>
          <FaStrava />
        </Anchor>
      </InfoBlock>
    </section>
  );
}
