'use client';

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { Anchor, Flex } from '@mantine/core';
import { APP_BASE_URL, APP_RIDER_PATH } from '@/src/global-constants';
import { useRider } from '../../../_contexts/Rider/RiderContext';
import classes from '../rider.module.css';

export const RIDER_URL = `${APP_BASE_URL}${APP_RIDER_PATH}`;
export const PREV_RIDER_BUTTON_TEXT = 'Previous Rider';
export const NEXT_RIDER_BUTTON_TEXT = 'Next Rider';
export const PREV_RIDER_ANCHOR_TEST_ID = 'prev-rider-anchor';
export const NEXT_RIDER_ANCHOR_TEST_ID = 'next-rider-anchor';

export const PrevAndNextRider = () => {
  const { riderInfo } = useRider();
  const { id } = riderInfo;
  return (
    <Flex align="center" className={classes.prevAndNextAnchors}>
      <MdArrowBackIos />
      <Anchor
        className={classes.prevRiderAnchor}
        data-testid="prev-rider-anchor"
        href={`${RIDER_URL}/${id ? Number(id) - 1 : 1}`}
      >
        {PREV_RIDER_BUTTON_TEXT}
      </Anchor>
      <Anchor
        className={classes.nextRiderAnchor}
        data-testid={NEXT_RIDER_ANCHOR_TEST_ID}
        href={`${RIDER_URL}/${id ? Number(id) + 1 : 1}`}
      >
        {NEXT_RIDER_BUTTON_TEXT}
      </Anchor>
      <MdArrowForwardIos />
    </Flex>
  );
};
