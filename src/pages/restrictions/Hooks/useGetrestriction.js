import { useEffect, useMemo } from "react";
import { Badge, Text } from "@chakra-ui/react";
import useStore from "store";
import { Link } from "react-router-dom";
export default function useGetRestrictions() {
  const getLoading = useStore((state) => state.restrictions.getLoading);
  const restrictions = useStore((state) => state.restrictions.restriction);
  const getAllRestrictions = useStore((state) => state.getAllRestrictions);
  useEffect(() => {
    getAllRestrictions();
  }, [getAllRestrictions]);

  const restrictionColumns = useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: "Pays",
        accessor: "name",
      },
      {
        Header: "liste blanche",
        accessor: "isWhitelist",
        Cell: ({ row: { original } }) => {
            return (
              <>
                {!original.isWhitelist  && (
                  <Badge variant="solid" colorScheme="orange">
                    false
                  </Badge>
                )}
                {original.isWhitelist  && (
                  <Badge variant="solid" colorScheme="green">
                    true
                  </Badge>
                )}
              </>
            );
          },
      },
      {
        Header: "date de début",
        accessor: "startDate",
      },
      {
        Header: "date de création",
        accessor: "createdDate",
      },
      {
        Header: "status",
        accessor: "status",
        Cell: ({ row: { original } }) => {
          return (
            <>
              {original.status === "PENDING" && (
                <Badge variant="solid" colorScheme="orange">
                  en attendant
                </Badge>
              )}
              {original.status === "VALIDATED" && (
                <Badge variant="solid" colorScheme="green">
                  validé
                </Badge>
              )}
              {original.status === "CANCELED" && (
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
  return { restrictionsLoading: getLoading, restrictions, col :restrictionColumns };
}
