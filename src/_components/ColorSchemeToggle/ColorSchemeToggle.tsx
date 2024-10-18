'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
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
          color="orange"
          onClick={() => setColorScheme('light')}
        >
          Light Theme
        </Button>
        <Button
          size="compact-sm"
          variant="transparent"
          color="orange"
          onClick={() => setColorScheme('dark')}
        >
          Dark Theme
        </Button>
      </Group>
    </div>
  );
}
