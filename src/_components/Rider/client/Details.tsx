'use client';

import React from 'react';
import { FaStrava } from 'react-icons/fa';
import { Anchor } from '@mantine/core';
import { ACS_COLOR_ORANGE, STRAVA_BASE_URL } from '@/src/global-constants';
import { IRiderInfo } from '../../../_types';
import InfoBlock from '../../ui/InfoBlock';
import LabeledText from '../../ui/LabeledText';
import { calculateAge } from '../utils';
import classes from '../styles/rider.module.css';

type DetailsProps = IRiderInfo;

export default function Details({ socials, dob, hometown }: DetailsProps) {
  const { country, city, state } = hometown;

  const birthDate: Date = new Date(dob);
  const age = calculateAge(birthDate);

  const { strava } = socials;
  const stravaUrl = strava ? `${STRAVA_BASE_URL}${strava}` : '';

  return (
    <section className={classes.details}>
      <InfoBlock>
        <LabeledText size="sm" label="Birthday" text={birthDate.toDateString()} />
        <LabeledText size="sm" label="Age" text={age.toString()} />
        <LabeledText size="sm" label="Nationality" text={country?.toUpperCase() || ''} />
        <LabeledText
          size="sm"
          label="Hometown"
          text={`${city || ''}${state ? `, ${state.toUpperCase()}` : ''}`}
        />
        <Anchor href={stravaUrl} aria-label={`Strava profile of ${strava}`}>
          <FaStrava color={ACS_COLOR_ORANGE} />
        </Anchor>
      </InfoBlock>
    </section>
  );
}
