'use client';

import { Flex, Skeleton, Stack } from '@mantine/core';
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
  const [isLoading, setIsLoading] = useState(true);

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
      } finally {
        setIsLoading(false);
      }
    };

    fetchRiderData();
  }, [rankings]);

  return (
    <div>
      {error && <div>{error}</div>}

      {isLoading ? (
        <Stack pt={16} mb={24} w="100%">
          {rankings.map((_, i) => (
            <Flex key={i} className={classes.rankPreview}>
              <Skeleton h={130} w="100%" radius="xs" />
            </Flex>
          ))}
        </Stack>
      ) : (
        ranksWithRiders.map((rank, i) => (
          <Flex w="100%" key={rank.riderId} mt={16} className={classes.rankPreview}>
            <RiderPreview
              mini
              rider={rank.rider}
              label={`#${i + 1} Ranked Rider: ${rank.totalPoints} Points`}
            />
          </Flex>
        ))
      )}
    </div>
  );
}
