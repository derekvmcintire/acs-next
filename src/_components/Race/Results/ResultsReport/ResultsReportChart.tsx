'use client';

import React from 'react';
import { ColorSwatch, Divider, Flex, Stack, Text } from '@mantine/core';
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
    <Stack align="center" className={classes.resultsReport}>
      <Text fw={600}>Totals over the last six months</Text>
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
      <Stack>
        <Flex justify="center">
          <ColorSwatch color={RACE_COLOR} size={16} mr={4} ml={4} aria-label="Races color swatch" />
          <Text size="xs">Number of Races</Text>
          <Divider ml={8} mr={8} orientation="vertical" />
          <ColorSwatch
            color={RIDER_COLOR}
            size={16}
            mr={4}
            ml={4}
            aria-label="Riders color swatch"
          />
          <Text size="xs">Number of Riders</Text>
        </Flex>
      </Stack>
    </Stack>
  );
}
