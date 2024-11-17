'use client';

import React from 'react';
import { GetRaceResultsResponse } from '@/src/_api/get/results/fetch-race-results-response-type';
import LabeledText from '@/src/_components/ui/LabeledText';

interface RemainingTopTenProps {
  results: GetRaceResultsResponse[];
}

export default function RemainingTopTen({ results }: RemainingTopTenProps) {
  return (
    <div>
      {results.map((result: GetRaceResultsResponse, index) => {
        const riderResult = result.rider;
        const riderName = `${riderResult?.firstName} ${riderResult?.lastName}`;
        const { place } = result;
        return (
          <div key={`${place}-${index}`}>
            <LabeledText hasColon={false} label={`${place}.`} text={riderName} />
          </div>
        );
      })}
    </div>
  );
}
