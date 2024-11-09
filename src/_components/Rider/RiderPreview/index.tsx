'use client';

import { Flex } from '@mantine/core';
import React from 'react';
import { GetRiderResponse } from '@/src/_api/get/riders/get-riders-response-type';
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
    return <></>;
  }
  return (
    <Flex
      mb={8}
      align="center"
      justify="center"
      className={mini ? classes.miniRiderPreview : classes.riderPreview}
    >
      <ProfileImage photo={rider?.photo || ''} riderId={rider.id} />
      <RiderDetails rider={rider} mini={mini} label={label} />
    </Flex>
  );
}
