import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { tr } from 'date-fns/locale';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NewEmployee from './pages/NewEmployee';
import EditEmployee from './pages/EditEmployee';
import Settings from './pages/Settings';
import Dashboard from './pages/admin/Dashboard';
import Businesses from './pages/admin/Businesses';
import NewBusiness from './pages/admin/NewBusiness';
import EditBusiness from './pages/admin/EditBusiness';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';

// Pages will be imported here
const Employees = React.lazy(() => import('./pages/Employees'));
const Appointments = React.lazy(() => import('./pages/Appointments'));

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={tr}>
        <CssBaseline />
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/employees/new"
                element={
                  <PrivateRoute>
                    <NewEmployee />
                  </PrivateRoute>
                }
              />
              <Route
                path="/employees/:id/edit"
                element={
                  <PrivateRoute>
                    <EditEmployee />
                  </PrivateRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <PrivateRoute>
                    <Settings />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <Dashboard />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/businesses"
                element={
                  <AdminRoute>
                    <Businesses />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/businesses/new"
                element={
                  <AdminRoute>
                    <NewBusiness />
                  </AdminRoute>
                }
              />
              <Route
                path="/admin/businesses/:id/edit"
                element={
                  <AdminRoute>
                    <EditBusiness />
                  </AdminRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
        </AuthProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
