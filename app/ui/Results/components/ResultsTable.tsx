'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import { Flex, Table, Text } from '@mantine/core';
import { IRaceData } from '@/app/types';
import classes from '../styles/RaceTable.module.css';

interface RaceTableProps {
  races: IRaceData[];
}

const getFormattedDateString = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
};

export default function ResultsTable({ races }: RaceTableProps) {
  const [rows, setRows] = useState<ReactNode>(<></>);

  useEffect(() => {
    const mappedRows = races.map(({ name, category, startDate, place, racers, type, points }) => (
      <Table.Tr key={name + category}>
        <Table.Td>{getFormattedDateString(new Date(startDate))}</Table.Td>
        <Table.Td className={classes.result}>{place}</Table.Td>
        <Table.Td>{racers}</Table.Td>
        <Table.Td>{`${type} - ${name}`}</Table.Td>
        <Table.Td>{category}</Table.Td>
        <Table.Td>{points}</Table.Td>
      </Table.Tr>
    ));
    setRows(mappedRows);
  }, []);

  return (
    <>
      <Flex justify="right">
        <Text fs="italic" fw={700} pr={12} pt={8}>{`${races.length} races`}</Text>
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
        <Table.Tbody>
          {races.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={6} style={{ textAlign: 'center' }}>
                No results available
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </>
  );
}
