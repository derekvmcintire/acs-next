'use client';

import React from 'react';
import { Container, Flex, Image } from '@mantine/core';
import { PLACEHOLDER_IMG } from '@/src/_components/Rider/ProfileImage';
import InfoBlock from '@/src/_components/ui/InfoBlock';
import { useRaceContext } from '@/src/_contexts/Race/RaceContext';
import WinnerDetails from './WinnerDetails';
import WinnerRecentResults from './WinnerRecentResults';
import classes from '../../styles/race-results.module.css';

export default function WinnerPreview() {
  const { winner } = useRaceContext();
  const photo = winner?.photo;

  return (
    <>
      {winner && (
        <InfoBlock leftHanded title="Winner Details">
          <Container className={classes.raceDetailsInfoBlock}>
            <Flex>
              <Image
                className={photo ? classes.riderPhoto : classes.defaultRiderPhoto}
                w="70"
                src={photo || PLACEHOLDER_IMG}
                alt="silhouette of a person posing with hands behind their back on a white background"
              />
              <WinnerDetails winner={winner} />
            </Flex>
            <WinnerRecentResults />
          </Container>
        </InfoBlock>
      )}
    </>
  );
}
