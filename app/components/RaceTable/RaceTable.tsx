'use client';

import { Table } from '@mantine/core';
import { IRaceData } from '@/app/types';
import classes from './RaceTable.module.css';

interface RaceTableProps {
  races: IRaceData[];
}

export default function RaceTable({ races }: RaceTableProps) {
  const rows = races.map((race) => (
    <Table.Tr data-testid="custom-element" key={`${race.name}${race.category}`}>
      <Table.Td>{new Date(race.startDate).toDateString()}</Table.Td>
      <Table.Td className={classes.result}>{race.place}</Table.Td>
      <Table.Td>{race.racers}</Table.Td>
      <Table.Td>{`${race.type} - ${race.name}`}</Table.Td>
      <Table.Td>{race.category}</Table.Td>
      <Table.Td>{race.points}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table className={classes.raceTable}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
          <Table.Th>Result</Table.Th>
          <Table.Th>Starters</Table.Th>
          <Table.Th>Race</Table.Th>
          <Table.Th>Category</Table.Th>
          <Table.Th>Points</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
