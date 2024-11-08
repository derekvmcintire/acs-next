'use client';

import { Anchor, Image, Stack } from '@mantine/core';
import { APP_BASE_URL, APP_RIDER_PATH } from '@/src/global-constants';
import classes from '../rider.module.css';

// const PLACEHOLDER_IMG =
//   'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

export const PLACEHOLDER_IMG =
  'https://www.procyclingstats.com/images/riders/bp/ae/marianne-vos-2024.png';

export const RACER_PROFILE_IMAGE_TEST_ID = 'racerProfileTestId';

type ProfileImageProps = {
  photo: string;
  riderId: number;
};

export default function ProfileImage({ photo, riderId }: ProfileImageProps) {
  return (
    <Anchor href={`${APP_BASE_URL}${APP_RIDER_PATH}/${riderId}`} aria-label="Rider Profile">
      <Stack
        align="flex-end"
        className={photo ? classes.profileImage : classes.defaultProfileImage}
        data-testid={RACER_PROFILE_IMAGE_TEST_ID}
      >
        <Image
          src={photo || PLACEHOLDER_IMG}
          alt="solid grey silhouette of a person on a white background"
        />
      </Stack>
    </Anchor>
  );
}
