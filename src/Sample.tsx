'use client';

import React from 'react';
import { Text } from '@mantine/core';
import { getRiderHistory } from '@/src/_api/get-history';
import { getSingleRider } from '@/src/_api/get-rider';

export default function Sample() {
  const [thing, setThing] = React.useState<any>(null);
  const [secondThing, setSecondThing] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchSomething = async () => {
      const historyResponse = await getRiderHistory(1);
      const riderResponse = await getSingleRider(1);

      setThing(`${historyResponse[0].year}`);
      setSecondThing(`${riderResponse?.name.first}`);
    };
    fetchSomething();
  });

  if (!thing) {
    return <Text>Loading</Text>;
  }
  return (
    <>
      <Text>{thing}</Text>
      <Text>{secondThing}</Text>
    </>
  );
}
