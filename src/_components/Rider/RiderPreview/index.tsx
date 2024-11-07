'use client';

import { Flex } from '@mantine/core';
import React from 'react';
import { GetRiderResponse } from '@/src/_api/get/riders/get-riders-response-type';
import ProfileImage from '../ProfileImage';
import RiderDetails from '../RiderDetails';

interface RiderPreviewProps {
  rider: GetRiderResponse;
}
export default function RiderPreview({ rider }: RiderPreviewProps) {
  return (
    <Flex justify="center">
      <ProfileImage photo={rider?.photo || ''} />
      <RiderDetails rider={rider} />
    </Flex>
  );
}
