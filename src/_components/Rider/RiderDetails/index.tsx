'use client';

import { Anchor, Container, Text } from '@mantine/core';
import React from 'react';
import { FaStrava } from 'react-icons/fa';
import { GetRiderResponse } from '@/src/_api/get/riders/fetch-riders-response-type';
import InfoBlock from '@/src/_components/ui/InfoBlock';
import LabeledText from '@/src/_components/ui/LabeledText';
import { ACS_COLOR_ORANGE, APP_RIDER_PATH, STRAVA_BASE_URL } from '@/src/global-constants';
import { PrevAndNextRider } from '../PrevAndNextRider';
import { calculateAge } from '../utils';
import classes from '../rider.module.css';

const RIDER_DETAILS_TEST_ID = 'rider-details';

type RiderDetailsProps = {
  rider: GetRiderResponse;
  mini?: boolean;
  label?: string;
};

export default function RiderDetails({
  rider,
  mini = false,
  label = 'Rider Details',
}: RiderDetailsProps) {
  const { socials, dob, hometown } = rider;
  const country = hometown?.country || '';
  const city = hometown?.city || '';

  const birthDate: Date | undefined = dob ? new Date(dob) : undefined;
  const age = birthDate ? calculateAge(birthDate) : undefined;

  const strava = socials?.strava;
  const stravaUrl = strava ? `${STRAVA_BASE_URL}${strava}` : '';

  return (
    <section className={classes.details} data-testid={RIDER_DETAILS_TEST_ID}>
      <InfoBlock title={label}>
        <Container>
          {mini && (
            <Anchor href={`${APP_RIDER_PATH}/${rider.id}`}>
              <Text fw={600}>{`${rider.name.first} ${rider.name.last}`}</Text>
            </Anchor>
          )}
          {!mini && birthDate && (
            <LabeledText label="Birthday" text={birthDate.toLocaleDateString()} />
          )}
          {age && <LabeledText label="Age" text={age.toString()} />}
          <LabeledText label="Nationality" text={country?.toUpperCase() || ''} />
          {!mini && <LabeledText size="sm" label="Hometown" text={`${city || ''}`} />}
          <Anchor href={stravaUrl} aria-label={`Strava profile of ${strava}`}>
            <FaStrava color={ACS_COLOR_ORANGE} />
          </Anchor>
        </Container>
      </InfoBlock>
      {!mini && <PrevAndNextRider />}
    </section>
  );
}
