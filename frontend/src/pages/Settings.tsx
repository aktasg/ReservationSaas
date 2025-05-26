import React from 'react';
import { Box, Typography } from '@mui/material';
import Layout from '../components/Layout';

const Settings: React.FC = () => {
  return (
    <Layout>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          Ayarlar
        </Typography>
        {/* AI Agent ayarları ve diğer ayarlar buraya gelecek */}
      </Box>
    </Layout>
  );
};

export default Settings; 