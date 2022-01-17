import { Container } from '@chakra-ui/react';
import Table from 'components/table';
import LoadingTable from 'components/loadingTable';
import Header from 'components/header';
import Layout from 'components/layout';
import useGetUsers from './hooks/useGetUsers';
import Filter from './components/filter';
export default function Users() {
  const { users, userColumns, userLoading } = useGetUsers();

  return (
    <Layout>
      <Header FilterForm={Filter} title="Gestion des Utilisateurs"></Header>
      <Container maxW="8xl">
        {userLoading ? (
          <LoadingTable></LoadingTable>
        ) : (
          <>
            <Table columns={userColumns} data={users || []}></Table>
          </>
        )}
      </Container>
    </Layout>
  );
}
