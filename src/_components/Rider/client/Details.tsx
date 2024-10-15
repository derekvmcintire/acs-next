'use client';

import React from 'react';
import { FaStrava } from 'react-icons/fa';
import { Anchor } from '@mantine/core';
import { STRAVA_BASE_URL } from '@/src/global-constants';
import InfoBlock from '../../_ui/InfoBlock';
import LabeledText from '../../_ui/LabeledText';
import { ICategory, IHometown, ISocials } from '../../../_types';
import { calculateAge } from '../utils';
import classes from '../styles/rider.module.css';

interface IDetailsProps {
  socials: ISocials;
  dob: string;
  categories: ICategory[];
  hometown: IHometown;
}

export default function DetailsServer({ socials, dob, hometown }: IDetailsProps) {
  const { country, city, state } = hometown;

  const birthDate: Date = new Date(dob);
  const age = calculateAge(birthDate);

  const { strava } = socials;
  const stravaUrl = strava ? `${STRAVA_BASE_URL}${strava}` : '';

  return (
    <section className={classes.details}>
      <InfoBlock>
        <div>
          <LabeledText label="Birthday" text={birthDate.toDateString()} />
        </div>
        <div>
          <LabeledText label="Age" text={age.toString()} />
        </div>
        <div>
          <LabeledText label="Nationality" text={country?.toUpperCase() || ''} />
        </div>
        <div>
          <LabeledText
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
