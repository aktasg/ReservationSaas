import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const isAdmin = user?.role === 'super-admin';

  return (
    <Layout>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          Hoş Geldiniz, {user?.name}
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
          {isAdmin ? (
            <>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    İşletmeler
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Tüm işletmeleri görüntüleyin, yeni işletme ekleyin veya mevcut işletmeleri düzenleyin.
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => navigate('/admin/businesses')}
                  >
                    İşletmeleri Yönet
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    İstatistikler
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Sistem genelindeki istatistikleri ve raporları görüntüleyin.
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => navigate('/admin')}
                  >
                    İstatistikleri Görüntüle
                  </Button>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Çalışanlar
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Çalışanları yönetin, yeni çalışan ekleyin veya mevcut çalışanları düzenleyin.
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => navigate('/employees')}
                  >
                    Çalışanları Yönet
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Randevular
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Randevuları görüntüleyin ve yönetin.
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => navigate('/appointments')}
                  >
                    Randevuları Yönet
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Ayarlar
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    İşletme ayarlarını yapılandırın.
                  </Typography>
                  <Button
                    variant="contained"
                    onClick={() => navigate('/settings')}
                  >
                    Ayarları Düzenle
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default Home; 