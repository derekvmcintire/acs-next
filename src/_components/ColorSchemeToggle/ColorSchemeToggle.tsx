'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { ACS_COLOR_ORANGE, DARK_COLOR_SCHEME, LIGHT_COLOR_SCHEME } from '@/src/global-constants';
import classes from './styles/color-scheme-toggle.module.css';

export const COLOR_SCHEME_TOGGLE_TEST_ID = 'color-scheme-toggle';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <div className={classes.colorScheme} data-testid={COLOR_SCHEME_TOGGLE_TEST_ID}>
      <Group justify="center">
        <Button
          size="compact-sm"
          variant="transparent"
          color={ACS_COLOR_ORANGE}
          onClick={() => setColorScheme(LIGHT_COLOR_SCHEME)}
        >
          Light Theme
        </Button>
        <Button
          size="compact-sm"
          variant="transparent"
          color={ACS_COLOR_ORANGE}
          onClick={() => setColorScheme(DARK_COLOR_SCHEME)}
        >
          Dark Theme
        </Button>
      </Group>
    </div>
  );
}
