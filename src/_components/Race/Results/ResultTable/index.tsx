'use client';

import { Anchor, Container, Table, Text } from '@mantine/core';
import React from 'react';
import { RIDER_URL } from '@/src/_components/Rider/PrevAndNextRider';
import { useRaceContext } from '@/src/_contexts/Race/RaceContext';

export default function ResultTable() {
  const { results } = useRaceContext();
  const hasResults = results?.length > 0;

  if (!hasResults) {
    return <Text>No results available</Text>;
  }

  const rows = results.map((result, i) => {
    const { place, rider, time, points } = result;
    const name = `${rider?.firstName} ${rider?.lastName}`;
    const hometown = `${rider?.hometown}`;
    const riderId = rider?.id || 0;
    const riderUrl = `${RIDER_URL}/${riderId}`;

    return (
      <Table.Tr key={i + place}>
        <Table.Td>{place || 'DNF'}</Table.Td>
        <Table.Td>
          {riderId ? <Anchor href={riderUrl}>{name}</Anchor> : <Text>{name}</Text>}
        </Table.Td>
        <Table.Td>{hometown}</Table.Td>
        <Table.Td>{time || '--'}</Table.Td>
        <Table.Td>{points || 0}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Container mt="16">
      <Table striped horizontalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Place</Table.Th>
            <Table.Th>Rider Name</Table.Th>
            <Table.Th>Hometown</Table.Th>
            <Table.Th>Time</Table.Th>
            <Table.Th>ACS Points</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  );
}
