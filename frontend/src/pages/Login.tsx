import React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Grid,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Login işlemleri burada yapılacak
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
              {t('auth.login.title')}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label={t('auth.login.email')}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={t('auth.login.password')}
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={t('auth.login.remember_me')}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {t('auth.login.submit')}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    {t('auth.login.forgot_password')}
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    onClick={() => navigate('/register')}
                  >
                    {t('auth.login.signup')}
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

export default Login; 