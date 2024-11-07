'use client';

import { Container, Image } from '@mantine/core';
import classes from '../rider.module.css';

// const PLACEHOLDER_IMG =
//   'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

export const PLACEHOLDER_IMG =
  'https://www.procyclingstats.com/images/riders/bp/ae/marianne-vos-2024.png';

export const RACER_PROFILE_IMAGE_TEST_ID = 'racerProfileTestId';

type ProfileImageProps = {
  photo: string;
};

export default function ProfileImage({ photo }: ProfileImageProps) {
  return (
    <Container
      className={photo ? classes.profileImage : classes.defaultProfileImage}
      data-testid={RACER_PROFILE_IMAGE_TEST_ID}
    >
      <Image
        src={photo || PLACEHOLDER_IMG}
        alt="solid grey silhouette of a person on a white background"
      />
    </Container>
  );
}
