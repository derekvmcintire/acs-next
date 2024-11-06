'use client';

import { Anchor, Container, Flex, Text } from '@mantine/core';
import React from 'react';
import { FaStrava } from 'react-icons/fa';
import { GetRiderResponse } from '@/src/_api/get/riders/get-riders-response-type';
import LabeledText from '@/src/_components/ui/LabeledText';
import { ACS_COLOR_ORANGE, APP_RIDER_PATH, STRAVA_BASE_URL } from '@/src/global-constants';

interface WinnerDetailsProps {
  winner: GetRiderResponse;
}

export default function WinnerDetails({ winner }: WinnerDetailsProps) {
  const { currentTeam, hometown, name, socials, wins } = winner;
  const winnerName = `${name?.first || ''} ${name?.last || ''}`;
  const strava = socials?.strava;
  const stravaUrl = strava ? `${STRAVA_BASE_URL}${strava}` : '';
  return (
    <Container>
      <Text fw={600} size="lg">
        <Anchor href={`${APP_RIDER_PATH}/${winner.id}`}>{winnerName}</Anchor>
      </Text>
      <Text size="sm">{currentTeam}</Text>
      <LabeledText size="sm" label="Nationality" text={hometown?.country || ''} />
      <LabeledText size="sm" label="Hometown" text={hometown?.city || ''} />
      {stravaUrl && (
        <Flex align="center">
          <Anchor href={stravaUrl} aria-label={`Strava profile of ${strava}`}>
            <FaStrava color={ACS_COLOR_ORANGE} />
          </Anchor>
          <Text size="xs" span>{` Career Wins: ${wins}`}</Text>
        </Flex>
      )}
    </Container>
  );
}
