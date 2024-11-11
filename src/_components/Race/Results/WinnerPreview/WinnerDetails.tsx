'use client';

import React from 'react';
import { Anchor, Container, Flex, Text } from '@mantine/core';
import { FaStrava } from 'react-icons/fa';
import { GetRiderResponse } from '@/src/_api/get/riders/fetch-riders-response-type';
import LabeledText from '@/src/_components/ui/LabeledText';
import { ACS_COLOR_ORANGE, APP_RIDER_PATH, STRAVA_BASE_URL } from '@/src/global-constants';

interface WinnerDetailsProps {
  winner: GetRiderResponse;
}

export default function WinnerDetails({ winner }: WinnerDetailsProps) {
  const { currentTeam = 'Unknown Team', hometown, name, socials = {}, wins = 0 } = winner;
  const winnerName = `${name?.first || 'First Name'} ${name?.last || 'Last Name'}`;
  const stravaUrl = socials?.strava ? `${STRAVA_BASE_URL}${socials.strava}` : '';

  return (
    <Container>
      <Text fw={600} size="lg">
        <Anchor href={`${APP_RIDER_PATH}/${winner.id}`}>{winnerName}</Anchor>
      </Text>
      <Text size="sm">{currentTeam}</Text>
      <LabeledText size="sm" label="Nationality" text={hometown?.country || 'N/A'} />
      <LabeledText size="sm" label="Hometown" text={hometown?.city || 'N/A'} />
      {stravaUrl && (
        <Flex align="center" gap="xs">
          <Anchor
            href={stravaUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Strava profile of ${winnerName}`}
          >
            <FaStrava color={ACS_COLOR_ORANGE} size={16} />
          </Anchor>
          <Text size="xs" span>{`Career Wins: ${wins}`}</Text>
        </Flex>
      )}
    </Container>
  );
}
