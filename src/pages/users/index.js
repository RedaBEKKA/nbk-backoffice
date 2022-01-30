import { Container } from '@chakra-ui/react';
import Table from 'components/table';

import LoadingTable from 'components/loadingTable';
import Header from 'components/header';
import Layout from 'components/layout';
import useGetUsers from './hooks/useGetUsers';
import Filter from './components/filter';
import Edite from './components/Edite';
export default function Users() {
  const { users, userColumns, userLoading, userId } = useGetUsers();

  return (
    <Layout>
      <Header
        FilterForm={Filter}
        title={userId ? 'Éditer Un Utilisateur' : 'Gestion des Utilisateurs'}
      ></Header>
      <Container maxW="8xl">
        {userId ? (
          <Edite></Edite>
        ) : (
          <>
            {userLoading ? (
              <LoadingTable></LoadingTable>
            ) : (
              <>
                <Table columns={userColumns} data={users || []}></Table>
              </>
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}
