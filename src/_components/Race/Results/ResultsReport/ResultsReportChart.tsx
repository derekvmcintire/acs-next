'use client';

import { ColorSwatch, Flex, Stack, Text } from '@mantine/core';
import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { MonthlyRaceData } from './results-report-types';
import classes from '../../styles/race-results.module.css';

type ResultsReportPresenterProps = {
  chartData: MonthlyRaceData[];
};

export default function ResultsReportChart({ chartData }: ResultsReportPresenterProps) {
  return (
    <Stack className={classes.resultsReport}>
      <Flex justify="center">
        <Text size="xs" span>
          {'Number of '}
        </Text>
        <ColorSwatch color="#B3CDAD" size={16} mr={4} ml={4} />
        <Text size="xs" span>
          {'Races and '}
        </Text>
        <ColorSwatch color="#FF5F5E" size={16} mr={4} ml={4} />
        <Text size="xs" span>
          Racers Over the Last Six Months
        </Text>
      </Flex>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          barCategoryGap="20%"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#555" />
          <XAxis dataKey="name" />
          <YAxis
            scale="log"
            domain={[1, 'dataMax']}
            tickFormatter={(tick) => Math.round(tick).toString()}
            allowDataOverflow
          />
          <Tooltip />
          <Bar
            dataKey="numberOfRaces"
            name="Races"
            fill="#B3CDAD"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="numberOfRiders"
            name="Riders"
            fill="#FF5F5E"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Stack>
  );
}
