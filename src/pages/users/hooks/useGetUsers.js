import { useEffect, useMemo } from 'react';
import { Badge } from '@chakra-ui/react';
import useStore from 'store';

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
    ],
    []
  );
  return { userLoading: getLoading, users, userColumns };
}
