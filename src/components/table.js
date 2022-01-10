/* eslint-disable react/display-name */
import { useTable } from 'react-table';
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box } from '@chakra-ui/react';
// import makeData from './makeData';

function DashTable({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
    initialState: { pageIndex: 2 },
  });

  return (
    <>
      <Table
        variant="striped"
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
                  bg="gray.600"
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
    </>
  );
}

// function App({ columns, data }) {
function App() {
  //   const data = React.useMemo(() => makeData(20), []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  );
  return (
    <Box w="100%" overflowX="auto" overflowY="hidden">
      {true && <DashTable columns={columns} data={[]} />}
    </Box>
  );
}

export default App;
