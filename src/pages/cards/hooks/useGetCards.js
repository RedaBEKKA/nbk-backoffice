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
import { AiFillDelete } from 'react-icons/ai';

import useStore from 'store';

export default function useGetCards() {
  const getLoading = useStore((state) => state.cards.getLoading);
  const cards = useStore((state) => state.cards.cards);
  const getAllCards = useStore((state) => state.getAllCards);
  useEffect(() => {
    getAllCards();
  }, [getAllCards]);
  const cardColumns = useMemo(
    () => [
      {
        Header: 'id',
        accessor: 'cardId',
      },
      {
        Header: 'wallet id',
        accessor: 'walletTypeId',
      },
      {
        Header: 'user id',
        accessor: 'userId',
      },
      {
        Header: 'status code',
        accessor: 'statusCode',
      },
      {
        Header: 'masked pan',
        accessor: 'maskedPan',
      },
      {
        Header: 'perms group',
        accessor: 'permsGroup',
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
    ],
    []
  );
  return { cardLoading: getLoading, cards, cardColumns };
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
              <Box>Visualiser Un Cart</Box>
              <Flex>
                <AiFillDelete style={{ fontSize: 26 }}></AiFillDelete>
              </Flex>
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
                  CART ID :{' '}
                </Text>
                <Text fontSize="lg">{original.cardId}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  USER ID :{' '}
                </Text>
                <Text fontSize="lg">{original.userId}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  START DATE :{' '}
                </Text>
                <Text fontSize="lg">{original.startDate}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  END DATE :{' '}
                </Text>
                <Text fontSize="lg">{original.endDate}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  DELIVIERY TITLE :{' '}
                </Text>
                <Text fontSize="lg">{original.deliveryTitle}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  DELIVERY COUNTRY :{' '}
                </Text>
                <Text fontSize="lg">{original.deliveryCountry}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  MASKED PAN :{' '}
                </Text>
                <Text fontSize="lg">{original.maskedPan}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  PERMS GROUP :{' '}
                </Text>
                <Text fontSize="lg">{original.permsGroup}</Text>
              </Flex>
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
