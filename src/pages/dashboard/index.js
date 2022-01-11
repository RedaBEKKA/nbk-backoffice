import { Container } from '@chakra-ui/react';
import Table from 'components/table';
import LoadingTable from 'components/loadingTable';
import Header from 'components/header';
import Layout from 'components/layout';

import useStore from 'store';
export default function Contacts() {
  //   const { contacts, contactsColumns, contactsLoading, content } = useContacts();
  //   const getAllContacts = useStore((state) => state.getAllContacts);

  return (
    <Layout>
      <Header></Header>
      <Container maxW="8xl">
        {true ? (
          <LoadingTable></LoadingTable>
        ) : (
          <>
            <Table
            //   columns={contactsColumns} data={contacts} content={content}
            ></Table>
          </>
        )}
      </Container>
    </Layout>
  );
}
