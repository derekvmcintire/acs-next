'use client';

import React from 'react';
import { FaStrava } from 'react-icons/fa';
import { Anchor } from '@mantine/core';
import { ACS_COLOR_ORANGE, STRAVA_BASE_URL } from '@/src/global-constants';
import { useRider } from '../../../_contexts/Rider/RiderContext';
import InfoBlock from '../../ui/InfoBlock/InfoBlock';
import LabeledText from '../../ui/LabeledText/LabeledText';
import { calculateAge } from '../utils';
import classes from '../rider.module.css';

const RIDER_DETAILS_TEST_ID = 'rider-details';

export default function RiderDetails() {
  const { riderInfo } = useRider();
  const { socials, dob, hometown } = riderInfo;
  const { country, city, state } = hometown;

  const birthDate: Date = new Date(dob);
  const age = calculateAge(birthDate);

  const { strava } = socials;
  const stravaUrl = strava ? `${STRAVA_BASE_URL}${strava}` : '';

  return (
    <section className={classes.details} data-testid={RIDER_DETAILS_TEST_ID}>
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
