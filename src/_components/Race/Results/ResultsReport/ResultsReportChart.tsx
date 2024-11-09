'use client';

import { ColorSwatch, Flex, Stack, Text } from '@mantine/core';
import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { MonthlyRaceData } from './results-report-types';
import classes from '../../styles/race-results.module.css';

const RACE_COLOR = '#52739e';
const RIDER_COLOR = '#FF5F5E';
const GRID_STROKE_COLOR = '#555';

type ResultsReportPresenterProps = {
  chartData: MonthlyRaceData[];
};

export default function ResultsReportChart({ chartData }: ResultsReportPresenterProps) {
  return (
    <Stack className={classes.resultsReport}>
      <Flex justify="center">
        <Text size="xs">{'Number of '}</Text>
        <ColorSwatch color={RACE_COLOR} size={16} mr={4} ml={4} aria-label="Races color swatch" />
        <Text size="xs">{'Races and '}</Text>
        <ColorSwatch color={RIDER_COLOR} size={16} mr={4} ml={4} aria-label="Riders color swatch" />
        <Text size="xs">Riders Over the Last Six Months</Text>
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
          <CartesianGrid strokeDasharray="3 3" stroke={GRID_STROKE_COLOR} />
          <XAxis dataKey="name" />
          <YAxis
            scale="log"
            domain={[1, 'dataMax']}
            tickFormatter={(tick) => Math.round(tick).toString()}
            allowDataOverflow
          />
          <Tooltip />
          <Bar dataKey="numberOfRaces" name="Races" fill={RACE_COLOR} />
          <Bar dataKey="numberOfRiders" name="Riders" fill={RIDER_COLOR} />
        </BarChart>
      </ResponsiveContainer>
    </Stack>
  );
}
