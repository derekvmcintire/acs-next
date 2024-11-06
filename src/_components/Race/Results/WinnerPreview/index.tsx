'use client';

import { Container, Flex, Image } from '@mantine/core';
import React from 'react';
import { PLACEHOLDER_IMG } from '@/src/_components/Rider/ProfileImage';
import InfoBlock from '@/src/_components/ui/InfoBlock';
import { useRaceContext } from '@/src/_contexts/Race/RaceContext';
import WinnerDetails from './WinnerDetails';
import classes from '../../styles/race-results.module.css';

export default function WinnerPreview() {
  const { winner } = useRaceContext();

  const photo = winner?.photo;

  return (
    <InfoBlock leftHanded title="Winner Details">
      <Container className={classes.raceDetailsInfoBlock}>
        <Flex>
          <Image
            className={classes.riderPhoto}
            w="70"
            src={photo || PLACEHOLDER_IMG}
            alt="solid grey silhouette of a person on a white background"
          />
          {winner && <WinnerDetails winner={winner} />}
        </Flex>
      </Container>
    </InfoBlock>
  );
}
