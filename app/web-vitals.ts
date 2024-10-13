'use client';

import { useReportWebVitals } from 'next/web-vitals';

type Metric = { id: any; value: any; name: any; delta: any; entries: any[]; navigationType: any };

const logMetric = (metric: Metric) => {
  const { id, name, delta, value, entries } = metric;
  console.log(`Reporting metric: ${name}`, {
    id,
    delta,
    value,
    entries,
  });
};

export function WebVitals() {
  useReportWebVitals((metric: Metric) => {
    logMetric(metric);
  });

  return null;
}
