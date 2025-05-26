import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, useTheme, Avatar, Accordion, AccordionSummary, AccordionDetails, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../components/Navbar';
import HeroDemo from '../components/HeroDemo';
import { useTranslation } from 'react-i18next';

const features = [
  {
    icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
    key: 'feature1',
    descriptionKey: 'feature1_desc',
    gradient: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)'
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: 40 }} />,
    key: 'feature2',
    descriptionKey: 'feature2_desc',
    gradient: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)'
  },
  {
    icon: <DashboardIcon sx={{ fontSize: 40 }} />,
    key: 'feature3',
    descriptionKey: 'feature3_desc',
    gradient: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)'
  },
  {
    icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
    key: 'feature4',
    descriptionKey: 'feature4_desc',
    gradient: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)'
  },
  {
    icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} />,
    key: 'feature5',
    descriptionKey: 'feature5_desc',
    gradient: 'linear-gradient(135deg, #E0F7FA 0%, #B2EBF2 100%)'
  },
  {
    icon: <CalendarMonthIcon sx={{ fontSize: 40 }} />,
    key: 'feature6',
    descriptionKey: 'feature6_desc',
    gradient: 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)'
  }
];

const pricingPlans = [
  {
    key: 'free',
    features: [
      'pricing.free.feature1',
      'pricing.free.feature2',
      'pricing.free.feature3',
      'pricing.free.feature4',
      'pricing.free.feature5'
    ]
  },
  {
    key: 'pro',
    features: [
      'pricing.pro.feature1',
      'pricing.pro.feature2',
      'pricing.pro.feature3',
      'pricing.pro.feature4',
      'pricing.pro.feature5',
      'pricing.pro.feature6'
    ]
  },
  {
    key: 'enterprise',
    features: [
      'pricing.enterprise.feature1',
      'pricing.enterprise.feature2',
      'pricing.enterprise.feature3',
      'pricing.enterprise.feature4',
      'pricing.enterprise.feature5',
      'pricing.enterprise.feature6'
    ]
  }
];

const testimonials = [
  {
    name: 'testimonial1.name',
    role: 'testimonial1.role',
    avatar: 'A',
    content: 'testimonial1.content'
  },
  {
    name: 'testimonial2.name',
    role: 'testimonial2.role',
    avatar: 'A',
    content: 'testimonial2.content'
  },
  {
    name: 'testimonial3.name',
    role: 'testimonial3.role',
    avatar: 'M',
    content: 'testimonial3.content'
  }
];

const faqs = [
  {
    question: 'faq.question1',
    answer: 'faq.answer1'
  },
  {
    question: 'faq.question2',
    answer: 'faq.answer2'
  },
  {
    question: 'faq.question3',
    answer: 'faq.answer3'
  },
  {
    question: 'faq.question4',
    answer: 'faq.answer4'
  }
];

const LandingPage: React.FC = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h2" component="h1" gutterBottom>
                  {t('landing.hero_title')}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {t('landing.hero_subtitle')}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  {t('landing.get_started')}
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <HeroDemo />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }} id="features">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          {t('landing.features_title')}
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2,
                    minHeight: '250px',
                    width: '100%',
                    background: feature.gradient,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                      filter: 'brightness(1.05)',
                    },
                    '& .MuiSvgIcon-root': {
                      transition: 'all 0.3s ease-in-out',
                      color: theme.palette.primary.main,
                    },
                    '&:hover .MuiSvgIcon-root': {
                      transform: 'scale(1.1)',
                      color: theme.palette.primary.dark,
                    }
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mb: 2,
                    p: 2,
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(5px)',
                  }}>
                    {feature.icon}
                  </Box>
                  <CardContent sx={{ 
                    flexGrow: 1, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    '&:last-child': {
                      pb: 2
                    }
                  }}>
                    <Typography 
                      variant="h6" 
                      component="h3" 
                      gutterBottom 
                      align="center"
                      sx={{
                        color: theme.palette.primary.dark,
                        fontWeight: 600
                      }}
                    >
                      {t(`landing.${feature.key}`)}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      align="center"
                      sx={{
                        lineHeight: 1.6,
                        color: 'rgba(0, 0, 0, 0.7)'
                      }}
                    >
                      {t(`landing.${feature.descriptionKey}`)}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            {t('landing.testimonials_title')}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 8 }}
          >
            {t('landing.testimonials_subtitle')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card 
                    sx={{ 
                      height: '100%',
                      minHeight: '250px',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                        filter: 'brightness(1.05)',
                      }
                    }}
                  >
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      display: 'flex', 
                      flexDirection: 'column',
                      '&:last-child': {
                        pb: 2
                      }
                    }}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 2,
                        p: 2,
                        borderRadius: '12px',
                        background: 'rgba(33, 150, 243, 0.1)',
                      }}>
                        <Avatar 
                          sx={{ 
                            bgcolor: theme.palette.primary.main, 
                            mr: 2,
                            width: 56,
                            height: 56,
                            fontSize: '1.5rem'
                          }}
                        >
                          {testimonial.avatar}
                        </Avatar>
                        <Box>
                          <Typography 
                            variant="h6"
                            sx={{
                              color: theme.palette.primary.dark,
                              fontWeight: 600
                            }}
                          >
                            {t(testimonial.name)}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{
                              color: 'rgba(0, 0, 0, 0.7)'
                            }}
                          >
                            {t(testimonial.role)}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography 
                        variant="body1"
                        sx={{
                          lineHeight: 1.8,
                          color: 'rgba(0, 0, 0, 0.8)',
                          flexGrow: 1,
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        {t(testimonial.content)}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ py: 8 }} id="pricing">
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            {t('navbar.pricing')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      minHeight: '500px',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                        filter: 'brightness(1.05)',
                      }
                    }}
                  >
                    <CardContent sx={{ 
                      height: '100%',
                      display: 'flex', 
                      flexDirection: 'column',
                      p: 3,
                      '&:last-child': {
                        pb: 3
                      }
                    }}>
                      <Box sx={{ mb: 3 }}>
                        <Typography 
                          variant="h4" 
                          component="h3" 
                          gutterBottom
                          sx={{
                            color: theme.palette.primary.dark,
                            fontWeight: 600
                          }}
                        >
                          {t(`pricing.${plan.key}.title`)}
                        </Typography>
                        <Typography 
                          variant="h3" 
                          component="div" 
                          gutterBottom
                          sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 700
                          }}
                        >
                          ₺{t(`pricing.${plan.key}.price`)}
                          <Typography 
                            variant="subtitle1" 
                            component="span"
                            sx={{
                              color: 'text.secondary',
                              ml: 1
                            }}
                          >
                            /ay
                          </Typography>
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '300px'
                      }}>
                        <Box>
                          {plan.features.map((feature, featureIndex) => (
                            <Typography
                              key={featureIndex}
                              variant="body1"
                              sx={{ 
                                mb: 2,
                                display: 'flex',
                                alignItems: 'center',
                                color: 'rgba(0, 0, 0, 0.8)'
                              }}
                            >
                              • {t(feature)}
                            </Typography>
                          ))}
                        </Box>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          sx={{ 
                            mt: 'auto',
                            py: 1.5,
                            fontSize: '1.1rem',
                            fontWeight: 600
                          }}
                        >
                          Planı Seç
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }} id="faq">
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            {t('navbar.faq')}
          </Typography>
          <Box sx={{ mt: 4 }}>
            {faqs.map((faq, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{t(faq.question)}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{t(faq.answer)}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ py: 8 }} id="contact">
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            {t('navbar.contact')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {t('contact.reach_us')}
                </Typography>
                <Typography variant="body1" paragraph>
                  {t('contact.reach_us_desc')}
                </Typography>
                <Typography variant="body1">
                  {t('contact.email')}
                </Typography>
                <Typography variant="body1">
                  {t('contact.phone')}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {t('contact.request_demo')}
                </Typography>
                <Typography variant="body1" paragraph>
                  {t('contact.request_demo_desc')}
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                  {t('contact.request_demo_button')}
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                {t('footer.title')}
              </Typography>
              <Typography variant="body2">
                {t('footer.description')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                {t('footer.quick_links')}
              </Typography>
              <Typography variant="body2" component="div">
                <a href="#features" style={{ color: 'white', textDecoration: 'none' }}>
                  {t('footer.features')}
                </a>
                <br />
                <a href="#pricing" style={{ color: 'white', textDecoration: 'none' }}>
                  {t('footer.pricing')}
                </a>
                <br />
                <a href="#faq" style={{ color: 'white', textDecoration: 'none' }}>
                  {t('footer.faq')}
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                {t('footer.legal')}
              </Typography>
              <Typography variant="body2" component="div">
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                  {t('footer.privacy')}
                </a>
                <br />
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                  {t('footer.terms')}
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2">
              {t('footer.copyright', { year: new Date().getFullYear() })}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage; 