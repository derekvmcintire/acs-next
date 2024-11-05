'use client';

import { Anchor, Divider, Flex } from '@mantine/core';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { APP_BASE_URL, APP_RIDER_PATH } from '@/src/global-constants';
import { useRider } from '../../../_contexts/Rider/RiderContext';
import classes from '../rider.module.css';

export const RIDER_URL = `${APP_BASE_URL}${APP_RIDER_PATH}`;
export const PREV_RIDER_BUTTON_TEXT = 'Previous';
export const NEXT_RIDER_BUTTON_TEXT = 'Next';
export const PREV_RIDER_ANCHOR_TEST_ID = 'prev-rider-anchor';
export const NEXT_RIDER_ANCHOR_TEST_ID = 'next-rider-anchor';

export const PrevAndNextRider = () => {
  const { riderInfo } = useRider();
  const { id } = riderInfo;
  return (
    <Flex justify="left" className={classes.prevAndNextAnchors}>
      <Anchor
        className={classes.prevRiderAnchor}
        data-testid="prev-rider-anchor"
        href={`${RIDER_URL}/${id ? Number(id) - 1 : 1}`}
      >
        <Flex align="center">
          <FaChevronCircleLeft className={classes.prevRiderChevron} />
          {PREV_RIDER_BUTTON_TEXT}
        </Flex>
      </Anchor>
      <Divider orientation="vertical" />
      <Anchor
        className={classes.nextRiderAnchor}
        data-testid={NEXT_RIDER_ANCHOR_TEST_ID}
        href={`${RIDER_URL}/${id ? Number(id) + 1 : 1}`}
      >
        <Flex align="center">
          {NEXT_RIDER_BUTTON_TEXT}
          <FaChevronCircleRight className={classes.nextRiderChevron} />
        </Flex>
      </Anchor>
    </Flex>
  );
};
