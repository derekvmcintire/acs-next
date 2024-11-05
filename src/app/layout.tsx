import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import React from 'react';
import { WebVitals } from '../_metrics/web-vitals';
import { theme } from '../../theme';

export const metadata = {
  title: 'ACS',
  description: 'Welcome to Amature Cycling Stats!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <>
          <WebVitals />
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </>
      </body>
    </html>
  );
}
