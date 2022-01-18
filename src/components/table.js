/* eslint-disable react/display-name */
import { useTable } from 'react-table';
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Flex } from '@chakra-ui/react';
// import makeData from './makeData';

function DashTable({ columns, data }) {
  console.log('dataaaa', data);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
    initialState: { pageIndex: 2 },
  });

  return (
    <>
      <Table
        // variant="striped"
        colorScheme="gray"
        rounded="xl"
        shadow="xl"
        bg="white"
        {...getTableProps()}
        overflow="hidden"
      >
        <Thead overflow="hidden">
          {headerGroups.map((headerGroup, i) => (
            <Tr overflow="hidden" key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <Th
                  bg="gray.900"
                  color="green.100"
                  //   fontSize="md"
                  key={i}
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <Tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    <Td key={i} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      {!data.length && (
        <Flex w="full" p="16" justifyContent="center" alignItems="center">
          il n'y a pas de données
        </Flex>
      )}
    </>
  );
}

function App({ columns, data }) {
  return (
    <Box w="100%" overflowX="auto" overflowY="hidden">
      {true && <DashTable columns={columns} data={data} />}
    </Box>
  );
}

export default App;
