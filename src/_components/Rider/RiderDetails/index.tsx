'use client';

import React from 'react';
import { FaStrava } from 'react-icons/fa';
import { Anchor } from '@mantine/core';
import { ACS_COLOR_ORANGE, STRAVA_BASE_URL } from '@/src/global-constants';
import { useRider } from '../../../_contexts/Rider/RiderContext';
import InfoBlock from '../../Ui/InfoBlock';
import LabeledText from '../../Ui/LabeledText';
import { PrevAndNextRider } from '../PrevAndNextRider';
import { calculateAge } from '../utils';
import classes from '../rider.module.css';

const RIDER_DETAILS_TEST_ID = 'rider-details';

export default function RiderDetails() {
  const { riderInfo } = useRider();
  const { socials, dob, hometown } = riderInfo;
  const country = hometown?.country || '';
  const city = hometown?.city || '';

  const birthDate: Date | undefined = dob ? new Date(dob) : undefined;
  const age = birthDate ? calculateAge(birthDate) : undefined;

  const strava = socials?.strava;
  const stravaUrl = strava ? `${STRAVA_BASE_URL}${strava}` : '';

  return (
    <section className={classes.details} data-testid={RIDER_DETAILS_TEST_ID}>
      <InfoBlock title="Rider Details">
        {birthDate && <LabeledText label="Birthday" text={birthDate.toLocaleDateString()} />}
        {age && <LabeledText label="Age" text={age.toString()} />}
        <LabeledText label="Nationality" text={country?.toUpperCase() || ''} />
        <LabeledText size="sm" label="Hometown" text={`${city || ''}`} />
        <Anchor href={stravaUrl} aria-label={`Strava profile of ${strava}`}>
          <FaStrava color={ACS_COLOR_ORANGE} />
        </Anchor>
      </InfoBlock>
      <PrevAndNextRider />
    </section>
  );
}
