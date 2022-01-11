import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Flex, Spinner } from '@chakra-ui/react';

import routes from 'routes';
import useStore from 'store';

export default function App() {
  const location = useLocation();
  const getAppToken = useStore((state) => state.getAppToken);
  const appLoading = useStore((state) => state.auth.appLoading);
  useEffect(() => {
    console.log(location);
  }, [location]);
  useEffect(() => {
    getAppToken();
  }, [getAppToken]);

  return (
    <div>
      {appLoading ? (
        <Loading></Loading>
      ) : (
        <Routes>
          {routes.map((route) => (
            <Route key={route.label} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      )}
    </div>
  );
}

function Loading() {
  return (
    <Flex>
      <Spinner></Spinner>
    </Flex>
  );
}
