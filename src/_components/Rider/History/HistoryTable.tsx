'use client';

import { Anchor, Flex, Table, Text } from '@mantine/core';
import { RiderResult } from '@/src/_types/extended-types';
import LabeledText from '../../ui/LabeledText';
import classes from '../rider.module.css';

const getFormattedDateString = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
};

interface HistoryTableProps {
  results: RiderResult[];
}

export default function HistoryTable({ results }: HistoryTableProps) {
  const hasResults = results && results?.length > 0;
  const totalPoints = results.reduce((acc, result) => acc + (result?.points || 0), 0);

  if (!hasResults) {
    return <Text>No results available</Text>;
  }

  const rows = results.map(
    ({ name, category, startDate, place, racers, type, points, eventId }, i) => (
      <Table.Tr key={i + place}>
        <Table.Td>{getFormattedDateString(new Date(String(startDate)))}</Table.Td>
        <Table.Td className={classes.result}>{place || 'DNF'}</Table.Td>
        <Table.Td>{racers}</Table.Td>
        <Table.Td>
          <Text size="xs" className={classes.raceNameText}>
            <Anchor href={`/race/${eventId}`}>{name}</Anchor>
          </Text>
        </Table.Td>
        <Table.Td>{type}</Table.Td>
        <Table.Td>{category}</Table.Td>
        <Table.Td>{points}</Table.Td>
      </Table.Tr>
    )
  );

  const TotalPointsText = () => (
    <LabeledText size="xs" isSpan hasColon={false} text="ACS Points" label={String(totalPoints)} />
  );
  const NumberOfRacesText = () => (
    <LabeledText size="xs" isSpan hasColon={false} text="Races" label={String(results.length)} />
  );

  return (
    <div className={classes.tableWrap}>
      <Flex justify="right">
        <Text span size="xs" fw={500} pr={12} pt={8}>
          <NumberOfRacesText />
          <Text span>{' | '}</Text>
          <TotalPointsText />
        </Text>
      </Flex>
      <Table className={classes.historyTable} striped horizontalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Date</Table.Th>
            <Table.Th>Result</Table.Th>
            <Table.Th>Starters</Table.Th>
            <Table.Th>Race Name</Table.Th>
            <Table.Th>Discipline</Table.Th>
            <Table.Th>Category</Table.Th>
            <Table.Th>ACS Points</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}
