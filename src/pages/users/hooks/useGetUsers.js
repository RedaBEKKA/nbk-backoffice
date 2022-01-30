import { useEffect, useMemo } from 'react';
import {
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Flex,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import { BiShow } from 'react-icons/bi';

import useStore from 'store';
import { Link } from 'react-router-dom';

export default function useGetWallets() {
  const getLoading = useStore((state) => state.users.getLoading);
  const users = useStore((state) => state.users.users);
  const getAllUsers = useStore((state) => state.getAllUsers);
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);
  const userColumns = useMemo(
    () => [
      {
        Header: 'Nom ',
        accessor: 'firstname',
      },
      {
        Header: 'Prénom',
        accessor: 'lastname',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Téléphone',
        accessor: 'phone',
      },
      {
        Header: 'Pays',
        accessor: 'state',
      },
      {
        Header: 'Ville',
        accessor: 'city',
      },

      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ row: { original } }) => {
          return (
            <>
              {original.userStatus === 'PENDING' && (
                <Badge variant="solid" colorScheme="orange">
                  en attendant
                </Badge>
              )}
              {original.userStatus === 'VALIDATED' && (
                <Badge variant="solid" colorScheme="green">
                  validé
                </Badge>
              )}
              {original.userStatus === 'CANCELED' && (
                <Badge variant="solid" colorScheme="red">
                  annulé
                </Badge>
              )}
            </>
          );
        },
      },
      {
        accessor: 'viewww',
        Cell: ({ row: { original } }) => {
          return (
            <>
              <SingleView original={original}></SingleView>
            </>
          );
        },
      },
      //   {
      //     accessor: 'links',
      //     Cell: ({ row: { original } }) => {
      //       return (
      //         <>
      //           <Text color="purple.500" fontWeight="bold" cursor="pointer">
      //             <Link to={`/transfers?userId=${original.userId}`}>transfers</Link>
      //           </Text>
      //         </>
      //       );
      //     },
      //   },
    ],
    []
  );
  return { userLoading: getLoading, users, userColumns };
}

function SingleView({ original }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        <BiShow style={{ fontSize: 24 }}></BiShow>
      </Button>

      <Drawer size="xl" placement={'right'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            bg="linear-gradient(to right, #56ab2f, #a8e063)"
            color="white"
            borderBottomWidth="1px"
            h="md"
          >
            <Flex py="8" justifyContent="space-between" alignItems="center">
              <Box>Visualiser Un Utilisateur</Box>
              <Flex>{/* <Delete id={original.documentId}></Delete> */}</Flex>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <SimpleGrid
              border="1px solid black"
              rounded="xl"
              p="4"
              columns={{ base: 1, md: 2 }}
              spacing={8}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Nom :{' '}
                </Text>
                <Text fontSize="lg">{original.firstname}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Prénom :{' '}
                </Text>
                <Text fontSize="lg">{original.lastname}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Email :{' '}
                </Text>
                <Text fontSize="lg">{original.email}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Téléphone :{' '}
                </Text>
                <Text fontSize="lg">{original.phone}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Pays :{' '}
                </Text>
                <Text fontSize="lg">{original.state}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Ville :{' '}
                </Text>
                <Text fontSize="lg">{original.city}</Text>
              </Flex>
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
