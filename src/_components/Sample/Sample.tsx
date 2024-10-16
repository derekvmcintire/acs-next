'use client';

import React from 'react';
import { Text } from '@mantine/core';
import { getRiderResults } from '../Results/api/get-rider-results';

export default function Sample() {
  const [thing, setThing] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchSomething = async () => {
      const response = await getRiderResults(1);
      console.log(response);
      setThing('Done');
    };
    fetchSomething();
  });

  if (!thing) {
    return <Text>Loading</Text>;
  }
  return <Text>{thing}</Text>;
}
