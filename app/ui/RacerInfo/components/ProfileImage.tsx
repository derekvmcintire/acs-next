import { Image } from '@mantine/core';
import classes from '../styles/RacerInfo.module.css';

const PLACEHOLDER_IMG =
  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

interface ProfileImageProps {
  img?: string;
}

export const RACER_PROFILE_IMAGE_TEST_ID = 'racerProfileTestId';

export default function ProfileImage({ img = PLACEHOLDER_IMG }: ProfileImageProps) {
  return (
    <div className={classes.profileImage} data-testid={RACER_PROFILE_IMAGE_TEST_ID}>
      <Image src={img} alt="solid grey silhouette of a person on a white background" />
    </div>
  );
}
