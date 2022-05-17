import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Box,
  Flex,
  SimpleGrid,
  Spinner,
  Heading,
  Text,
  HStack,
  useToast,
  Input,
  Center,
} from "@chakra-ui/react";
import { BiShow } from "react-icons/bi";
import { useLocation } from "react-router-dom";

import useStore from "store";
import { RiEditBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import DisableUser from "../components/DisableUser";
import EnableUser from "../components/EnableUser";

export default function useGetWallets() {
  const toast = useToast();
  const getAllUsers = useStore((state) => state.getAllUsers);
  const getLoading = useStore((state) => state.users.getLoading);
  const users = useStore((state) => state.users.users);
  const getUser = useStore((state) => state.getUser);
  const getSingleLoading = useStore((state) => state.users.getSingleLoading);
  const updateKycReview = useStore((state) => state.updateKycReview);
  const updateKycLiveness = useStore((state) => state.updateKycLiveness);
  const kyclivenessLoading = useStore(
    (state) => state.users.kyclivenessLoading
  );
  const kycreviewLoading = useStore((state) => state.users.kycreviewLoading);
  const user = useStore((state) => state.users.user);

  // console.log("kycrloading", kycreviewLoading);

  let location = useLocation();
  const queryParams = new URLSearchParams(location?.search);
  // console.log(queryParams.get("id"));
  let userId = queryParams.get("id");
  useEffect(() => {
    userId ? getUser(userId) : getAllUsers();
  }, [getAllUsers, getUser, userId]);

  const disptachKycReviewUpdate = useCallback(
    async (userId) => {
      const res = await updateKycReview(userId);
      if (res?.data?.status === "success") {
        toast({
          description: "opération terminée avec succès",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          description: "quelque chose s'est mal passé",
          status: "error",
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
      if (res?.data?.status === "success") {
        toast({
          description: "opération terminée avec succès",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          description: "quelque chose s'est mal passé",
          status: "error",
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
        Header: "userId ",
        accessor: "userId",
      },
      {
        Header: "Nom ",
        accessor: "firstname",
      },
      {
        Header: "Prénom",
        accessor: "lastname",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Téléphone",
        accessor: "phone",
      },
      {
        Header: "Pays",
        accessor: "state",
      },
      {
        Header: "Ville",
        accessor: "city",
      },

      {
        Header: "Status",
        accessor: "status",
        Cell: ({ row: { original } }) => {
          return (
            <>
              {original.userStatus === "PENDING" && (
                <Badge variant="solid" colorScheme="orange">
                  en attendant
                </Badge>
              )}
              {original.userStatus === "VALIDATED" && (
                <Badge variant="solid" colorScheme="green">
                  validé
                </Badge>
              )}
              {original.userStatus === "CANCELED" && (
                <Badge variant="solid" colorScheme="red">
                  annulé
                </Badge>
              )}
            </>
          );
        },
      },
      {
        accessor: "viewww",
        Cell: ({ row: { original } }) => {
          return (
            <>
              <HStack>
                <SingleView original={original}></SingleView>
                {/* <Button
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
                </Button> */}
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
    [
      kycreviewLoading,
      disptachKycReviewUpdate,
      disptachKycLivenessUpdate,
      kyclivenessLoading,
    ]
  );
  return {
    userLoading: getLoading,
    users,
    userColumns,
    userId,
    user,
    getSingleLoading,
  };
}

function SingleView({ original }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const getLoading = useStore((state) => state.wallets.getLoading);
  const wallets = useStore((state) => state.wallets.wallets);
  const getAllWallets = useStore((state) => state.getAllWallets);
  const [first, setfirst] = useState(false);
  const getSingleView = () => {
    // getAllWallets({ userId: original?.userId, pageCount: 2 });
    //TODO WALLET USERID IS HARD CODED
    getAllWallets({ userId: 2151518 });
    onOpen();
  };

  const getSingleCloture = () => {
    getAllWallets({ userId: 2151518 });
    setfirst(!first);
  };

  const OnClosed = () => {
    setfirst(false);
  };
  console.log("user id", original.userId);
  console.log("wallets of user", wallets);
  function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "1 ") + " €";
  }
  return (
    <>
      <Button onClick={getSingleView}>
        <BiShow style={{ fontSize: 24 }}></BiShow>
      </Button>
      <Button onClick={getSingleCloture} width={20}>
        Clôturer
      </Button>

      <Drawer size="xl" placement={"right"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            // bg="linear-gradient(to right, #56ab2f, #a8e063)"
            bg="#2DDCB1"
            color="white"
            borderBottomWidth="1px"
            h="md"
          >
            <Flex py="8" justifyContent="space-between" alignItems="center">
              <Box>Visualiser Un Utilisateur</Box>
              <HStack>
                {/* <Delete id={original.documentId}></Delete> */}
                <Link to={`/users?id=${original?.userId}`}>
                  <Button bg="black" _hover={{ bg: "black" }}>
                    <RiEditBoxFill style={{ fontSize: 26 }}></RiEditBoxFill>
                  </Button>
                </Link>
                <DisableUser userName={original?.email}></DisableUser>
                <EnableUser userName={original?.email}></EnableUser>
              </HStack>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Heading my="4" size="md">
              user info :
            </Heading>
            <SimpleGrid
              border="1px solid black"
              rounded="xl"
              p="4"
              columns={{ base: 1, md: 2 }}
              spacing={8}
            >
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Nom :{" "}
                </Text>
                <Text fontSize="lg">{original.firstname}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Prénom :{" "}
                </Text>
                <Text fontSize="lg">{original.lastname}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Email :{" "}
                </Text>
                <Text fontSize="lg">{original.email}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Téléphone :{" "}
                </Text>
                <Text fontSize="lg">{original.phone}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Pays :{" "}
                </Text>
                <Text fontSize="lg">{original.state}</Text>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="lg" fontWeight="bold">
                  Ville :{" "}
                </Text>
                <Text fontSize="lg">{original.city}</Text>
              </Flex>
            </SimpleGrid>
            {getLoading ? (
              <Flex mt="8" justifyContent="center">
                <Spinner></Spinner>
              </Flex>
            ) : (
              <>
                <Heading my="4" size="md">
                  user wallets :
                </Heading>
                {!wallets && (
                  <Flex
                    w="full"
                    p="16"
                    justifyContent="center"
                    alignItems="center"
                  >
                    il n'y a pas de données
                  </Flex>
                )}
                {wallets?.map((wallet) => (
                  <SimpleGrid
                    key={wallet.walletId}
                    border="1px solid black"
                    rounded="xl"
                    p="4"
                    mt="8"
                    columns={{ base: 1, md: 2 }}
                    spacing={8}
                  >
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text fontSize="lg" fontWeight="bold">
                        Wallet ID :
                      </Text>
                      <Text fontSize="lg">{wallet.walletId}</Text>
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text fontSize="lg" fontWeight="bold">
                        Solde :{" "}
                      </Text>
                      <Text fontSize="lg">{currencyFormat(wallet.solde)}</Text>
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text fontSize="lg" fontWeight="bold">
                        iban :{" "}
                      </Text>
                      <Text fontSize="lg">{wallet.iban}</Text>
                    </Flex>
                  </SimpleGrid>
                ))}
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Drawer size="xl" placement={"right"} onClose={OnClosed} isOpen={first}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            // bg="linear-gradient(to right, #56ab2f, #a8e063)"
            bg="#2DDCB1"
            color="white"
            borderBottomWidth="1px"
            h="md"
          >
            <Flex py="8" justifyContent="space-between" alignItems="center">
              <Box>Cloture d'un compte </Box>
              <HStack>
                <Link to={`/users?id=${original?.userId}`}>
                  <Button bg="black" _hover={{ bg: "black" }}>
                    <RiEditBoxFill style={{ fontSize: 26 }}></RiEditBoxFill>
                  </Button>
                </Link>
                <DisableUser userName={original?.email}></DisableUser>
                <EnableUser userName={original?.email}></EnableUser>
              </HStack>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            {getLoading ? (
              <Flex mt="8" justifyContent="center">
                <Spinner></Spinner>
              </Flex>
            ) : (
              <>
                <Heading my="4" size="md">
                  user wallets :
                </Heading>
                {!wallets && (
                  <Flex
                    w="full"
                    p="16"
                    justifyContent="center"
                    alignItems="center"
                  >
                    il n'y a pas de données
                  </Flex>
                )}
                {wallets?.map((wallet) => (
                  <SimpleGrid
                    key={wallet.walletId}
                    border="1px solid black"
                    rounded="xl"
                    p="4"
                    mt="8"
                    columns={{ base: 1, md: 2 }}
                    spacing={8}
                  >
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text fontSize="lg" fontWeight="bold">
                        Wallet ID :
                      </Text>
                      <Text fontSize="lg">{wallet.walletId}</Text>
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text fontSize="lg" fontWeight="bold">
                        Solde :{" "}
                      </Text>
                      <Text fontSize="lg">{currencyFormat(wallet.solde)}</Text>
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text fontSize="lg" fontWeight="bold">
                        iban :{" "}
                      </Text>
                      <Text fontSize="lg">{wallet.iban}</Text>
                    </Flex>
                  </SimpleGrid>
                ))}
                <SimpleGrid
                  fullWidth
                  rounded="xl"
                  p="4"
                  mt="8"
                  columns={{ base: 1, md: 2 }}
                  spacing={1}
                  alignItems="center"
                >
                  <Text fontSize="lg" fontWeight="bold">
                    iban :{" "}
                  </Text>
                  <Input
                    mx="2"
                    variant="filled"
                    type="number"
                    w={"100%"}
                    // defaultValue={}
                    onChange={(e) => {}}
                    placeholder="Enter iban"
                  />
                </SimpleGrid>
                <HStack
                  fullWidth
                  mt="4"
                  justifyContent='center'
                >
                <Button  width={40} color='#f00' >
                  Valider la clôture
                </Button>
                </HStack>

              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
