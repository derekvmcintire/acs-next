'use client';

import React from 'react';
import { Flex } from '@mantine/core';
import { GetRiderResponse } from '@/src/_api/get/riders/fetch-riders-response-type';
import ProfileImage from '../ProfileImage';
import RiderDetails from '../RiderDetails';
import classes from '../rider.module.css';

interface RiderPreviewProps {
  rider?: GetRiderResponse;
  mini?: boolean;
  label?: string;
}
export default function RiderPreview({ rider, mini = false, label }: RiderPreviewProps) {
  if (!rider) {
    return null;
  }

  return (
    <Flex
      align="flex-start"
      justify="center"
      className={mini ? classes.miniRiderPreview : classes.riderPreview}
    >
      <ProfileImage photo={rider?.photo || ''} riderId={rider.id} />
      <RiderDetails rider={rider} mini={mini} label={label} />
    </Flex>
  );
}
