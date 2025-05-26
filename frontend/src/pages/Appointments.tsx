import React from 'react';
import { Box, Typography } from '@mui/material';
import Layout from '../components/Layout';

const Appointments: React.FC = () => {
  return (
    <Layout>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          Randevular
        </Typography>
        {/* Randevu listesi ve takvimi buraya gelecek */}
      </Box>
    </Layout>
  );
};

export default Appointments; 