import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, Outlet, Navigate } from 'react-router-dom';
import { Flex, Spinner } from '@chakra-ui/react';

import routes from 'routes';
import useStore from 'store';

const PrivateRoute = () => {
  const isLoggedIn = useStore((state) => state.auth.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
const UnprotectedRoute = () => {
  const isLoggedIn = useStore((state) => state.auth.isLoggedIn);

  return !isLoggedIn ? <Outlet /> : <Navigate to="/dashboard" />;
};
export default function App() {
  //   const location = useLocation();
  const getAppToken = useStore((state) => state.getAppToken);
  const appLoading = useStore((state) => state.auth.appLoading);
  //   useEffect(() => {
  //     console.log(location);
  //   }, [location]);
  useEffect(() => {
    getAppToken();
  }, [getAppToken]);

  return (
    <div>
      {appLoading ? (
        <Loading></Loading>
      ) : (
        <Routes>
          <>
            {routes.map((route) => {
              return route.protected ? (
                <Route key={route.label} exact path={route.path} element={<PrivateRoute />}>
                  <Route exact path={route.path} element={<route.component />} />
                </Route>
              ) : (
                <Route key={route.label} exact path={route.path} element={<UnprotectedRoute />}>
                  <Route exact path={route.path} element={<route.component />} />
                </Route>
              );
            })}
          </>
        </Routes>
      )}
    </div>
  );
}

function Loading() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      bg="linear-gradient(to right, #56ab2f, #a8e063)"
    >
      <Spinner size="xl"></Spinner>
    </Flex>
  );
}
