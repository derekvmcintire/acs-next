'use client';

import classes from './RacerInfo.module.css';

const PROFILE_IMAGE_URL =
  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png';

export default function RacerProfileImage() {
  return (
    <div className={classes.profileImage}>
      <img src={PROFILE_IMAGE_URL} width="100%" alt="something" />
    </div>
  );
}
