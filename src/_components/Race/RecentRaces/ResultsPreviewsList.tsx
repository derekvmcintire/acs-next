'use client';

import React from 'react';
import { GetRecentRaceResultsResponse } from '@/src/_api/get/races/fetch-races-response-type';
import { RiderResult } from '@/src/_types/extended-types';
import ResultPreview from '../Results/ResultPreview';

export type ResultsList = RiderResult[];

interface ResultsPreviewListProps {
  races: GetRecentRaceResultsResponse[];
}

export default function ResultsPreviewList({ races }: ResultsPreviewListProps) {
  return (
    <div>
      {races.map((result: GetRecentRaceResultsResponse, index) => (
        <div key={`result-${index}`}>
          <ResultPreview raceResults={result} />
        </div>
      ))}
    </div>
  );
}
