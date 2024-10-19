'use client';

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { Anchor, Button } from '@mantine/core';
import { APP_BASE_URL, APP_RIDER_PATH } from '@/src/global-constants';
import classes from '../styles/rider.module.css';

const RIDER_URL = `${APP_BASE_URL}${APP_RIDER_PATH}`;
const PREV_RIDER_BUTTON_TEXT = 'Previous Rider';
const NEXT_RIDER_BUTTON_TEXT = 'Next Rider';

interface PrevAndNextRiderProps {
  id: number;
}

export const PrevAndNextRider = ({ id }: PrevAndNextRiderProps) => {
  return (
    <div>
      <Button
        className={classes.prevButton}
        size="compact-xs"
        variant="outline"
        leftSection={<MdArrowBackIos />}
      >
        <Anchor href={`${RIDER_URL}/${id ? Number(id) - 1 : 1}`}>{PREV_RIDER_BUTTON_TEXT}</Anchor>
      </Button>
      <Button
        className={classes.nextButton}
        size="compact-xs"
        variant="outline"
        rightSection={<MdArrowForwardIos />}
      >
        <Anchor href={`${RIDER_URL}/${id ? Number(id) + 1 : 1}`}>{NEXT_RIDER_BUTTON_TEXT}</Anchor>
      </Button>
    </div>
  );
};
