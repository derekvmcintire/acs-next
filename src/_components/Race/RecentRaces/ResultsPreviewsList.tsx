'use client';

import React from 'react';
import { ResultsList } from '.';
import ResultPreview from '../Results/ResultPreview';

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
