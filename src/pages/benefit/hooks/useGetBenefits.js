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
import Delete from '../components/Delete';
export default function useGetCards() {
  const getLoading = useStore((state) => state.benefits.getLoading);
  const benefits = useStore((state) => state.benefits.benefits);
  const getAllBenefits = useStore((state) => state.getAllBenefits);
  useEffect(() => {
    getAllBenefits();
  }, [getAllBenefits]);
  const benefitColumns = useMemo(
    () => [
      {
        Header: 'id',
        accessor: 'id',
      },
      {
        Header: 'userId',
        accessor: 'userId',
      },
      {
        Header: 'bic',
        accessor: 'bic',
      },
      {
        Header: 'iban',
        accessor: 'iban',
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
  return { benefitLoading: getLoading, benefits, benefitColumns };
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
              <Box>Visualiser Un Beneficiarie</Box>
              <Flex>
                <Delete id={original.id}></Delete>
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
                  ID :{' '}
                </Text>
                <Text fontSize="lg">{original.id}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  USER ID :{' '}
                </Text>
                <Text fontSize="lg">{original.userId}</Text>
              </Flex>
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
