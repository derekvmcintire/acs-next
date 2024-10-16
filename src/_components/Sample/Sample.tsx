'use client';

import React from 'react';
import { Text } from '@mantine/core';
import { getRiderHistory } from '@/src/_api/get-history';

export default function Sample() {
  const [thing, setThing] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchSomething = async () => {
      const response = await getRiderHistory(1);
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
