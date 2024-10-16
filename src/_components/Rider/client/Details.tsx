'use client';

import React from 'react';
import { FaStrava } from 'react-icons/fa';
import { Anchor } from '@mantine/core';
import { STRAVA_BASE_URL } from '@/src/global-constants';
import InfoBlock from '../../_ui/InfoBlock';
import LabeledText from '../../_ui/LabeledText';
import { IRiderInfo } from '../../../_types';
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
        <div>
          <LabeledText size="sm" label="Birthday" text={birthDate.toDateString()} />
        </div>
        <div>
          <LabeledText size="sm" label="Age" text={age.toString()} />
        </div>
        <div>
          <LabeledText size="sm" label="Nationality" text={country?.toUpperCase() || ''} />
        </div>
        <div>
          <LabeledText
            size="sm"
            label="Hometown"
            text={`${city || ''}${state ? `, ${state.toUpperCase()}` : ''}`}
          />
        </div>
        <div>
          <Anchor href={stravaUrl} aria-label={`Strava profile of ${strava}`}>
            <FaStrava color="orange" />
          </Anchor>
        </div>
      </InfoBlock>
    </section>
  );
}
