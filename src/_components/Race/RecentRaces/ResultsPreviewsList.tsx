'use client';

import { Skeleton } from '@mantine/core';
import React from 'react';
import { RiderResult } from '@/src/_types/extended-types';
import { MAX_RACES_TO_PREVIEW } from '@/src/global-constants';
import ResultPreview from '../Results/ResultPreview';

const getLoadingSkeletons = () => {
  const skeletons: React.ReactNode[] = [];
  for (let i = 0; i < MAX_RACES_TO_PREVIEW; i++) {
    skeletons.push(
      <div key={i}>
        <Skeleton mb={8} h={78} w="100%" radius="xs" />
      </div>
    );
  }
  return skeletons;
};

export type ResultsList = RiderResult[];

interface ResultsPreviewListProps {
  results: ResultsList[];
  isLoading: boolean;
}

export default function ResultsPreviewList({ results, isLoading }: ResultsPreviewListProps) {
  return (
    <div>
      {isLoading
        ? getLoadingSkeletons()
        : results.map((result: ResultsList, index) => (
            <div key={`result-${index}`}>
              <ResultPreview raceResults={result} />
            </div>
          ))}
    </div>
  );
}
