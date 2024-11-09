'use client';

import { Flex } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { GetRankingsResponse } from '@/src/_api/get/rankings/get-rankings-response-type';
import { getSingleRider } from '@/src/_api/get/riders/get-rider';
import { GetRiderResponse } from '@/src/_api/get/riders/get-riders-response-type';
import RiderPreview from '../../Rider/RiderPreview';
import classes from '../styles/home.module.css';

interface RankPreviewProps {
  rankings: GetRankingsResponse[];
  year: number;
}

interface RankWithRider extends GetRankingsResponse {
  rider?: GetRiderResponse;
}

export default function RankPreview({ rankings }: RankPreviewProps) {
  const [ranksWithRiders, setRanksWithRiders] = useState<RankWithRider[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRiderData = async () => {
      try {
        const results: RankWithRider[] = await Promise.all(
          rankings.map(async (rank) => {
            const rankWithRider: RankWithRider = { ...rank };
            const response = await getSingleRider(rank.riderId);

            if (response?.error) {
              throw new Error('Error fetching rider data');
            }

            if (response?.riderInfo) {
              rankWithRider.rider = response.riderInfo;
            }

            return rankWithRider;
          })
        );
        setRanksWithRiders(results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    };

    fetchRiderData();
  }, [rankings]);

  return (
    <div>
      {error && <div>{error}</div>}

      {ranksWithRiders.map((rank, i) => (
        <Flex key={rank.riderId} mt={16} className={classes.rankPreview}>
          <RiderPreview
            mini
            rider={rank.rider}
            label={`#${i + 1} Ranked Rider: ${rank.totalPoints} Points`}
          />
        </Flex>
      ))}
    </div>
  );
}
