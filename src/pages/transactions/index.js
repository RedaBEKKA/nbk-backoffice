import { Container, Heading } from "@chakra-ui/react";
import Table from "components/table";
import LoadingTable from "components/loadingTable";
import Header from "components/header";
import Layout from "components/layout";
import { useSearchParams } from "react-router-dom";

import useTransactions from "./hooks/useTransactions";
import Filter from "./components/filter";
export default function Transaction() {
  const [searchParams] = useSearchParams();
  const walletId = searchParams.get("walletId");
  console.log(walletId);
  const { transactions, transactionColumns, transactionLoading } =
    useTransactions({
      walletId,
    });

  return (
    <Layout>
      <Header FilterForm={Filter} title="Gestion des Transaction"></Header>
      {walletId ? (
        <Container maxW="8xl">
          {transactionLoading ? (
            <LoadingTable></LoadingTable>
          ) : (
            <>
              <Table
                columns={transactionColumns}
                data={transactions || []}
              ></Table>
            </>
          )}
        </Container>
      ) : (
        <Container maxW="8xl">
          {transactionLoading ? (
            <LoadingTable></LoadingTable>
          ) : (
            <>
              <Table
                columns={transactionColumns}
                data={transactions || []}
              ></Table>
            </>
          )}
        </Container>
      )}
    </Layout>
  );
}
