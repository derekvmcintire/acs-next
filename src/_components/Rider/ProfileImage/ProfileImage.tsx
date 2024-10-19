'use client';

import { Image } from '@mantine/core';
import { useRider } from '../../../_contexts/Rider/RiderContext';
import classes from '../rider.module.css';

const PLACEHOLDER_IMG =
  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

export const RACER_PROFILE_IMAGE_TEST_ID = 'racerProfileTestId';

export default function ProfileImage() {
  const { riderInfo } = useRider();
  const { photo } = riderInfo;

  return (
    <div className={classes.profileImage} data-testid={RACER_PROFILE_IMAGE_TEST_ID}>
      <Image
        src={photo || PLACEHOLDER_IMG}
        alt="solid grey silhouette of a person on a white background"
      />
    </div>
  );
}
