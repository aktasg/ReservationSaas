import React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Register: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Kayıt işlemleri burada yapılacak
  };

  return (
    <Box>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography component="h1" variant="h5">
              {t('auth.register.title')}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label={t('auth.register.name')}
                    name="name"
                    autoComplete="name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label={t('auth.register.email')}
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label={t('auth.register.password')}
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirm_password"
                    label={t('auth.register.confirm_password')}
                    type="password"
                    id="confirm_password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="company"
                    label={t('auth.register.company')}
                    id="company"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="phone"
                    label={t('auth.register.phone')}
                    id="phone"
                    type="tel"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {t('auth.register.submit')}
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    onClick={() => navigate('/login')}
                  >
                    {t('auth.register.login')}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Register; 