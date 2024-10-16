'use client';

import React, { useEffect, useState } from 'react';
import { Text, useMantineColorScheme } from '@mantine/core';
import { getRiderHistory } from '@/src/_api/get-history';
import { IRaceData } from '@/src/_types';
import { getFormattedYearString } from '@/src/_utility/date-helpers';
import InfoBlock from '../../_ui/InfoBlock';
import LabeledText from '../../_ui/LabeledText';
import { getCareerWins, getOrdinal, getTopTenResults } from '../../Results/utils';
import classes from '../styles/rider.module.css';

interface TopResultsProps {
  id: number;
}

export default function TopResults({ id }: TopResultsProps) {
  const [topResults, setTopResults] = useState<IRaceData[]>([]);
  const [careerWins, setCareerWins] = useState<number>(0);

  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    const fetchRiderResults = async () => {
      await getRiderHistory(id).then((data) => {
        setCareerWins(getCareerWins(data));
        setTopResults(getTopTenResults(data));
      });
    };

    fetchRiderResults();
  }, []);

  const getTopResultPlaceColor = (place: number) => {
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
    <section className={classes.topResults} data-testid="top-results">
      {topResults.length > 0 ? (
        <InfoBlock>
          <Text fw={900}>Top Results</Text>
          {careerWins > 0 && (
            <Text size="xs" c="orange" fw={700}>{`${careerWins} Career Wins`}</Text>
          )}
          <div className={classes.topResultsList}>
            {topResults.map((result) => (
              <div key={`${result.startDate}${result.points}`}>
                <LabeledText
                  size="xs"
                  color={getTopResultPlaceColor(result.place)}
                  label={`${getOrdinal(result.place)}`}
                  text={`at ${result.name} (${getFormattedYearString(new Date(result.startDate))})`}
                  noColon
                />
              </div>
            ))}
          </div>
        </InfoBlock>
      ) : (
        <Text>Loading...</Text>
      )}
    </section>
  );
}
