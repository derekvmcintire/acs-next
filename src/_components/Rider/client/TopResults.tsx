'use client';

import React from 'react';
import { Text, useMantineColorScheme } from '@mantine/core';
import { getRiderResults } from '@/src/_api/get-rider-results';
import { IRaceData } from '@/src/_types';
import InfoBlock from '../../_ui/InfoBlock';
import LabeledText from '../../_ui/LabeledText';
import { getOrdinal, getTopTenResults } from '../../Results/utils';
import classes from '../styles/rider.module.css';

export default function TopResults() {
  const [topResults, setTopResults] = React.useState<IRaceData[]>([]);
  const { colorScheme } = useMantineColorScheme();

  React.useEffect(() => {
    const fetchRiderResults = async () => {
      await getRiderResults(2).then((data) => {
        setTopResults(getTopTenResults(data));
      });
    };

    fetchRiderResults();
  }, []);

  const getColor = (place: number) => {
    switch (place) {
      case 1:
        return colorScheme === 'light' ? '#B59410' : '#FFD700';
      case 2:
        return colorScheme === 'light' ? '#71706E' : '#C0C0C0';
      case 3:
        return '#CD7F32';
      default:
        return '';
    }
  };

  return (
    <section className={classes.topResults}>
      {topResults.length > 0 ? (
        <InfoBlock>
          <Text mb="8" fw={900}>
            Top Results
          </Text>
          {topResults.map((result) => (
            <div>
              <LabeledText
                size="xs"
                color={getColor(result.place)}
                label={`${getOrdinal(result.place)}`}
                text={`at ${result.name}`}
                noColon
              />
            </div>
          ))}
        </InfoBlock>
      ) : (
        <Text>Loading...</Text>
      )}
    </section>
  );
}
