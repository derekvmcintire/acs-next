'use client';

import React from 'react';
import LabeledText from '@/src/_components/ui/LabeledText';
import { RiderResult } from '@/src/_types/extended-types';

interface RemainingTopTenProps {
  results: RiderResult[];
}

export default function RemainingTopTen({ results }: RemainingTopTenProps) {
  return (
    <div>
      {results.map((result: RiderResult, index) => {
        const riderResult = result.rider;
        const riderName = `${riderResult?.firstName} ${riderResult?.lastName}`;
        const place = index + 2; // +2 here because we removed the winner and arrays are zero based index
        return (
          <div key={`${result.place}-${index}`}>
            <LabeledText hasColon={false} label={`${place}.`} text={riderName} />
          </div>
        );
      })}
    </div>
  );
}
