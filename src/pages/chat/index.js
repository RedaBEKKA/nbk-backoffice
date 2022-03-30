import Layout from "components/layout";
import BackGroundMessage from "./Components/Chat";
import useGetChats from "./Hooks/useGetChats";
export default function Chat() {
  const {chats } = useGetChats()
  // console.log('chats --------------------------', chats) 
  return (
    <Layout>
      <BackGroundMessage />
    </Layout>
  );
}
