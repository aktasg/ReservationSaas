import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Switch,
  CircularProgress,
  Button,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import AdminLayout from '../../components/AdminLayout';
import api from '../../services/api';

interface Business {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  isActive: boolean;
  createdAt: string;
}

const Businesses: React.FC = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBusinesses = async () => {
    try {
      const response = await api.get('/admin/businesses');
      setBusinesses(response.data);
      setError(null);
    } catch (err) {
      setError('İşletmeler yüklenirken bir hata oluştu.');
      console.error('Error fetching businesses:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

  const handleStatusChange = async (id: string, isActive: boolean) => {
    try {
      await api.put(`/admin/businesses/${id}/status`, { isActive });
      setBusinesses(businesses.map(business =>
        business._id === id ? { ...business, isActive } : business
      ));
    } catch (err) {
      console.error('Error updating business status:', err);
      setError('İşletme durumu güncellenirken bir hata oluştu.');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Bu işletmeyi silmek istediğinizden emin misiniz?')) {
      try {
        await api.delete(`/admin/businesses/${id}`);
        setBusinesses(businesses.filter(business => business._id !== id));
      } catch (err) {
        console.error('Error deleting business:', err);
        setError('İşletme silinirken bir hata oluştu.');
      }
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4">
            İşletmeler
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => {/* TODO: Implement new business form */}}
          >
            Yeni İşletme
          </Button>
        </Box>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>İşletme Adı</TableCell>
                <TableCell>E-posta</TableCell>
                <TableCell>Telefon</TableCell>
                <TableCell>Adres</TableCell>
                <TableCell>Durum</TableCell>
                <TableCell>Kayıt Tarihi</TableCell>
                <TableCell>İşlemler</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {businesses.map((business) => (
                <TableRow key={business._id}>
                  <TableCell>{business.name}</TableCell>
                  <TableCell>{business.email}</TableCell>
                  <TableCell>{business.phone}</TableCell>
                  <TableCell>{business.address}</TableCell>
                  <TableCell>
                    <Switch
                      checked={business.isActive}
                      onChange={(e) => handleStatusChange(business._id, e.target.checked)}
                      color="primary"
                    />
                  </TableCell>
                  <TableCell>
                    {new Date(business.createdAt).toLocaleDateString('tr-TR')}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => {/* TODO: Implement edit business */}}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(business._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </AdminLayout>
  );
};

export default Businesses; 