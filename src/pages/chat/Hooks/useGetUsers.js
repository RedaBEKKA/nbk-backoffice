import { useCallback, useEffect, useState } from "react";
import useStore from "store";
export default function UseGetUsers(id,key) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  // const loading = useStore((state) => state.users.getSingleLoading);
  const getUser = useStore((state) => state.getUser);
  const getMessages = useStore((state) => state.getMessages);
  const Messages = useStore((state) => state.channels.messages);

  const userFetch = useCallback(async () => {
    setLoading(true);
    const res = await getUser(id);
    // console.log(res?.data?.data?.users?.userId);
    setUser(res?.data?.data?.users);
    setLoading(false);
    return res?.data?.data?.users;
  }, [getUser, id]);

  useEffect(() => {
    userFetch();
    return () => {
      setUser({}); // This worked for me
    };
  }, [userFetch]);


  // const getMessage = async() =>{
    //  getMessages(key)
    // console.log('res', res)
  // }


  return { loading, user ,getMessages,Messages};
}
