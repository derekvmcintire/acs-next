import { Image } from '@mantine/core';
import classes from '../styles/rider.module.css';

const PLACEHOLDER_IMG =
  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

interface ProfileImageServerProps {
  img?: string;
}

export const RACER_PROFILE_IMAGE_TEST_ID = 'racerProfileTestId';

export default function ProfileImageServer({ img = PLACEHOLDER_IMG }: ProfileImageServerProps) {
  return (
    <div className={classes.profileImage} data-testid={RACER_PROFILE_IMAGE_TEST_ID}>
      <Image
        src={img || PLACEHOLDER_IMG}
        alt="solid grey silhouette of a person on a white background"
      />
    </div>
  );
}
