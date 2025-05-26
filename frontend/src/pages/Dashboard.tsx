import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import {
  Add as AddIcon,
  PersonAdd as PersonAddIcon,
  Event as EventIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Hızlı İşlemler */}
          <Box>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Hızlı İşlemler
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={() => navigate('/appointments/new')}
                >
                  Yeni Randevu
                </Button>
                <Button
                  variant="contained"
                  startIcon={<PersonAddIcon />}
                  onClick={() => navigate('/employees/new')}
                >
                  Çalışan Ekle
                </Button>
              </Box>
            </Paper>
          </Box>

          {/* Günlük Randevu Özeti ve Son Aktiviteler */}
          <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            {/* Günlük Randevu Özeti */}
            <Box sx={{ flex: 1 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Bugünkü Randevular
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Henüz randevu bulunmuyor.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" startIcon={<EventIcon />} onClick={() => navigate('/appointments')}>
                    Tüm Randevuları Gör
                  </Button>
                </CardActions>
              </Card>
            </Box>

            {/* Son Aktiviteler */}
            <Box sx={{ flex: 1 }}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Son Aktiviteler
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Henüz aktivite bulunmuyor.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Dashboard; 