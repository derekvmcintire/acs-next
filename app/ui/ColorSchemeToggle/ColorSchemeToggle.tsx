'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
import classes from './ColorSchemeToggle.module.css';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <div className={classes.colorScheme}>
      <Group justify="center">
        <Button
          size="compact-sm"
          variant="transparent"
          color="pink"
          onClick={() => setColorScheme('light')}
        >
          Light Theme
        </Button>
        <Button
          size="compact-sm"
          variant="transparent"
          color="pink"
          onClick={() => setColorScheme('dark')}
        >
          Dark Theme
        </Button>
      </Group>
    </div>
  );
}
