import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WebVitals } from '../_metrics/web-vitals';
import { theme } from '../../theme';

export const metadata = {
  title: 'ACS',
  description: 'Welcome to Amature Cycling Stats!',
};

const queryClient = new QueryClient();

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
          <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme}>{children}</MantineProvider>
          </QueryClientProvider>
        </>
      </body>
    </html>
  );
}
