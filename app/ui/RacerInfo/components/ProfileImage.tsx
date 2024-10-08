'use client';

import { Image } from '@mantine/core';
import classes from '../styles/RacerInfo.module.css';

const PROFILE_IMAGE_URL =
  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

export const RACER_PROFILE_IMAGE_TEST_ID = 'racerProfileTestId';

export default function RacerProfileImage() {
  return (
    <div className={classes.profileImage} data-testid="racerProfileImage">
      <Image src={PROFILE_IMAGE_URL} alt="something" />
    </div>
  );
}