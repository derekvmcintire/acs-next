'use client';

import { Flex, Table, Text } from '@mantine/core';
import { IRaceData } from '@/src/_types';
import classes from './styles/rider.module.css';

const getFormattedDateString = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
};

interface HistoryTableProps {
  results: IRaceData[];
}

export default function HistoryTable({ results }: HistoryTableProps) {
  const hasResults = results && results?.length > 0;

  if (!hasResults) {
    return <Text>No results available</Text>;
  }

  const rows = results.map(({ name, category, startDate, place, racers, type, points }, i) => (
    <Table.Tr key={i + category}>
      <Table.Td>{getFormattedDateString(new Date(startDate))}</Table.Td>
      <Table.Td className={classes.result}>{place || 'DNF'}</Table.Td>
      <Table.Td>{racers}</Table.Td>
      <Table.Td>{`${type} - ${name}`}</Table.Td>
      <Table.Td>{category}</Table.Td>
      <Table.Td>{points}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className={classes.tableWrap}>
      <Flex justify="right">
        <Text fs="italic" fw={700} pr={12} pt={8}>{`${results.length} races`}</Text>
      </Flex>
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
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}
