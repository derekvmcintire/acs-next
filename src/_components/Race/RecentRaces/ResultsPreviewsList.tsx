'use client';

import React from 'react';
import { RiderResult } from '@/src/_types/extended-types';
import ResultPreview from '../Results/ResultPreview';

export type ResultsList = RiderResult[];

interface ResultsPreviewListProps {
  results: ResultsList[];
}

export default function ResultsPreviewList({ results }: ResultsPreviewListProps) {
  return (
    <div>
      {results.map((result: ResultsList, index) => (
        <div key={`result-${index}`}>
          <ResultPreview raceResults={result} />
        </div>
      ))}
    </div>
  );
}
