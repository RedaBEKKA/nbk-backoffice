import { useCallback, useEffect, useMemo } from 'react';
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
  HStack,
  useToast,
} from '@chakra-ui/react';
import { BiShow } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

import useStore from 'store';
import { RiEditBoxFill } from 'react-icons/ri';
import { ImBlocked } from 'react-icons/im';
import { Link } from 'react-router-dom';
import DisableUser from '../components/DisableUser';

export default function useGetWallets() {
  const toast = useToast();
  const getAllUsers = useStore((state) => state.getAllUsers);
  const getLoading = useStore((state) => state.users.getLoading);
  const users = useStore((state) => state.users.users);
  const getUser = useStore((state) => state.getUser);
  const getSingleLoading = useStore((state) => state.users.getSingleLoading);
  const updateKycReview = useStore((state) => state.updateKycReview);
  const updateKycLiveness = useStore((state) => state.updateKycLiveness);
  const kyclivenessLoading = useStore((state) => state.users.kyclivenessLoading);
  const kycreviewLoading = useStore((state) => state.users.kycreviewLoading);
  const user = useStore((state) => state.users.user);

  console.log('kycrloading', kycreviewLoading);

  let location = useLocation();
  const queryParams = new URLSearchParams(location?.search);
  console.log(queryParams.get('id'));
  let userId = queryParams.get('id');
  useEffect(() => {
    userId ? getUser(userId) : getAllUsers();
  }, [getAllUsers, getUser, userId]);

  const disptachKycReviewUpdate = useCallback(
    async (userId) => {
      const res = await updateKycReview(userId);
      if (res?.data?.status === 'success') {
        toast({
          description: 'opération terminée avec succès',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          description: "quelque chose s'est mal passé",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    },
    [updateKycReview]
  );
  const disptachKycLivenessUpdate = useCallback(
    async (userId) => {
      const res = await updateKycLiveness(userId);
      if (res?.data?.status === 'success') {
        toast({
          description: 'opération terminée avec succès',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          description: "quelque chose s'est mal passé",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    },
    [updateKycLiveness]
  );

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
              <HStack>
                <SingleView original={original}></SingleView>
                <Button
                  isLoading={kyclivenessLoading?.userId === original?.userId}
                  isDisabled={kyclivenessLoading?.loading}
                  onClick={() => disptachKycLivenessUpdate(original?.userId)}
                  colorScheme="orange"
                >
                  kycliveness
                </Button>
                <Button
                  isLoading={kycreviewLoading?.userId === original?.userId}
                  isDisabled={kycreviewLoading?.loading}
                  onClick={() => disptachKycReviewUpdate(original?.userId)}
                  colorScheme="orange"
                >
                  kycreview
                </Button>
              </HStack>
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
    [kycreviewLoading, disptachKycReviewUpdate, disptachKycLivenessUpdate, kyclivenessLoading]
  );
  return { userLoading: getLoading, users, userColumns, userId, user, getSingleLoading };
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
              <HStack>
                {/* <Delete id={original.documentId}></Delete> */}
                <Link to={`/users?id=${original?.userId}`}>
                  <RiEditBoxFill style={{ fontSize: 26 }}></RiEditBoxFill>
                </Link>
                <DisableUser userName={original?.email}></DisableUser>
              </HStack>
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
