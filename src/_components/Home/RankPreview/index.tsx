'use client';

import { Flex } from '@mantine/core';
import React from 'react';
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
  const [ranksWithRiders, setRanksWithRiders] = React.useState<RankWithRider[]>([]);
  const [errors, setErrors] = React.useState<string[]>([]);

  React.useEffect(() => {
    const getRiderData = async () => {
      try {
        const ranksWithRidersResponse: RankWithRider[] = await Promise.all(
          rankings.map(async (rank: GetRankingsResponse) => {
            const rankWithRider: RankWithRider = { ...rank };
            const response = await getSingleRider(rank.riderId);

            if (response && response?.error) {
              throw new Error('YOU GOT AN ERROR');
            }

            if (response && response.riderInfo) {
              rankWithRider.rider = response.riderInfo;
            }

            return rankWithRider;
          })
        );

        setRanksWithRiders(ranksWithRidersResponse);
      } catch (error) {
        setErrors((prev) => [...prev, String(error)]);
      }
    };

    getRiderData();
  }, [rankings]);

  return (
    <div>
      {errors && errors.map((error: string) => <div>{error}</div>)}

      {ranksWithRiders.map(async (rank: RankWithRider, i) => {
        const { rider } = rank;

        if (!rider) {
          return <div key={10000000000000} />;
        }

        return (
          <Flex mt={16} className={classes.rankPreview}>
            <RiderPreview
              mini
              key={rank.riderId}
              rider={rider}
              label={`#${i + 1} Ranked Rider: ${rank.totalPoints} Points`}
            />
          </Flex>
        );
      })}
    </div>
  );
}
