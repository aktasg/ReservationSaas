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
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import './i18n';
import { Box } from '@mui/material';

// Pages will be imported here
const Employees = React.lazy(() => import('./pages/Employees'));
const Appointments = React.lazy(() => import('./pages/Appointments'));

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196F3',
      light: '#64B5F6',
      dark: '#1976D2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#21CBF3',
      light: '#80DEEA',
      dark: '#00ACC1',
      contrastText: '#fff',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={tr}>
        <CssBaseline />
        <AuthProvider>
          <Router>
            <Navbar />
            <Box sx={{ pt: { xs: 7, sm: 8 } }}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
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
            </Box>
          </Router>
        </AuthProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
