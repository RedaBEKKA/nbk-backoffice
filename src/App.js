import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Dashboard from 'pages/dashboard';
import Login from 'pages/login';

export default function App() {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}
