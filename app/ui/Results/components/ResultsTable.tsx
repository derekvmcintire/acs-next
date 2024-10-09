'use client';

import { Table } from '@mantine/core';
import { IRaceData } from '@/app/types';
import classes from '../styles/RaceTable.module.css';

interface RaceTableProps {
  races: IRaceData[];
}

export default function ResultsTable({ races }: RaceTableProps) {
  const rows = races.map(({ name, category, startDate, place, racers, type, points }) => (
    <Table.Tr data-testid="custom-element" key={name + category}>
      <Table.Td>{new Date(startDate).toDateString()}</Table.Td>
      <Table.Td className={classes.result}>{place}</Table.Td>
      <Table.Td>{racers}</Table.Td>
      <Table.Td>{`${type} - ${name}`}</Table.Td>
      <Table.Td>{category}</Table.Td>
      <Table.Td>{points}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table className={classes.raceTable}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Date</Table.Th>
          <Table.Th>Result</Table.Th>
          <Table.Th>Starters</Table.Th>
          <Table.Th>Race Name</Table.Th>
          <Table.Th>Category</Table.Th>
          <Table.Th>Points</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows.length > 0 ? (
          rows
        ) : (
          <Table.Tr>
            <Table.Td colSpan={6} style={{ textAlign: 'center' }}>
              No races available
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Tbody>
    </Table>
  );
}
