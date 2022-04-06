import { useCallback, useEffect, useState } from "react";
import useStore from "store";
export default function UseGetUsers(id) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  // const loading = useStore((state) => state.users.getSingleLoading);
  const getUser = useStore((state) => state.getUser);

  const userFetch = useCallback(async () => {
    setLoading(true);
    const res = await getUser(id);
    // console.log(res?.data?.data?.users);
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
  return { loading, user };
}
