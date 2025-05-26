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

const features = [
  {
    icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
    title: 'AI Destekli Rezervasyon',
    description: 'Yapay zeka teknolojimiz ile müşteri tercihlerini analiz edin ve rezervasyonları otomatikleştirin.'
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: 40 }} />,
    title: 'WhatsApp & Telegram Entegrasyonu',
    description: 'Müşterilerinizle doğrudan mesajlaşın ve rezervasyonları anlık olarak yönetin.'
  },
  {
    icon: <DashboardIcon sx={{ fontSize: 40 }} />,
    title: 'Merkezi Dashboard',
    description: 'Tüm işletmenizi tek bir yerden yönetin, rezervasyonları ve müşteri verilerini görüntüleyin.'
  },
  {
    icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
    title: 'Detaylı Raporlama',
    description: 'İşletmenizin performansını analiz edin, özel raporlar oluşturun ve veriye dayalı kararlar alın.'
  },
  {
    icon: <PhoneIphoneIcon sx={{ fontSize: 40 }} />,
    title: 'Mobil Uygulama',
    description: 'İşletmenizi her yerden yönetin. iOS ve Android uygulamalarımız ile her an kontrol sizde.'
  },
  {
    icon: <CalendarMonthIcon sx={{ fontSize: 40 }} />,
    title: 'Takvim Entegrasyonu',
    description: 'Google Calendar, Outlook ve diğer popüler takvim uygulamaları ile senkronize çalışın.'
  }
];

const pricingPlans = [
  {
    title: 'Ücretsiz',
    price: '0',
    features: [
      'Temel rezervasyon yönetimi',
      'WhatsApp entegrasyonu',
      'Temel raporlama',
      '1 kullanıcı',
      '14 gün ücretsiz deneme'
    ]
  },
  {
    title: 'Profesyonel',
    price: '199',
    features: [
      'Tüm Ücretsiz özellikleri',
      'AI destekli rezervasyon',
      'Telegram entegrasyonu',
      'Gelişmiş raporlama',
      '5 kullanıcı',
      '7/24 destek'
    ]
  },
  {
    title: 'Kurumsal',
    price: '499',
    features: [
      'Tüm Profesyonel özellikleri',
      'Özel AI modelleri',
      'API erişimi',
      'Sınırsız kullanıcı',
      'Öncelikli destek',
      'Özel entegrasyonlar'
    ]
  }
];

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Kuaför Salonu Sahibi',
    avatar: 'A',
    content: 'Bu sistem sayesinde randevularımızı çok daha verimli yönetebiliyoruz. Müşterilerimiz de WhatsApp üzerinden randevu alabildikleri için çok memnun.'
  },
  {
    name: 'Ayşe Kaya',
    role: 'Spa Merkezi Yöneticisi',
    avatar: 'A',
    content: 'AI destekli rezervasyon sistemi, müşteri tercihlerini öğreniyor ve bize zaman kazandırıyor. Kesinlikle tavsiye ediyorum.'
  },
  {
    name: 'Mehmet Demir',
    role: 'Restoran İşletmecisi',
    avatar: 'M',
    content: 'Mobil uygulama ve takvim entegrasyonu sayesinde işimiz çok kolaylaştı. Müşterilerimiz de online rezervasyon yapabildikleri için çok memnun.'
  }
];

const faqs = [
  {
    question: 'Sistem nasıl çalışıyor?',
    answer: 'Sistemimiz, yapay zeka destekli bir rezervasyon yönetim platformudur. Müşterileriniz WhatsApp veya Telegram üzerinden, web sitesi veya mobil uygulama üzerinden rezervasyon yapabilir. Sistem otomatik olarak müsaitlik durumunu kontrol eder ve randevuları yönetir.'
  },
  {
    question: 'Ücretsiz deneme süresi ne kadar?',
    answer: '14 gün boyunca tüm özellikleri ücretsiz olarak deneyebilirsiniz. Bu süre sonunda size en uygun planı seçebilirsiniz.'
  },
  {
    question: 'Teknik destek alabilir miyim?',
    answer: 'Evet, tüm planlarımızda e-posta desteği sunuyoruz. Profesyonel ve Kurumsal planlarımızda 7/24 telefon desteği de mevcuttur.'
  },
  {
    question: 'Mevcut sistemimle entegre edebilir miyim?',
    answer: 'Evet, sistemimiz API desteği ile mevcut yazılımlarınızla entegre edilebilir. Kurumsal planımızda özel entegrasyon desteği de sunuyoruz.'
  }
];

const LandingPage: React.FC = () => {
  const theme = useTheme();
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
                  İşletmenizi Geleceğe Taşıyın
                </Typography>
                <Typography variant="h5" gutterBottom>
                  AI destekli rezervasyon sistemi ile işletmenizi dijitalleştirin
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Hemen Başlayın
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
          Özellikler
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
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 2,
                  }}
                >
                  <Box sx={{ color: theme.palette.primary.main, mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Müşterilerimiz Ne Diyor?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
                          {testimonial.avatar}
                        </Avatar>
                        <Box>
                          <Typography variant="h6">{testimonial.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body1">{testimonial.content}</Typography>
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
            Fiyatlandırma
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
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                    }}
                  >
                    <CardContent>
                      <Typography variant="h4" component="h3" gutterBottom>
                        {plan.title}
                      </Typography>
                      <Typography variant="h3" component="div" gutterBottom>
                        ₺{plan.price}
                        <Typography variant="subtitle1" component="span">
                          /ay
                        </Typography>
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        {plan.features.map((feature, featureIndex) => (
                          <Typography
                            key={featureIndex}
                            variant="body1"
                            sx={{ mb: 1 }}
                          >
                            • {feature}
                          </Typography>
                        ))}
                      </Box>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 3 }}
                      >
                        Planı Seç
                      </Button>
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
            Sık Sorulan Sorular
          </Typography>
          <Box sx={{ mt: 4 }}>
            {faqs.map((faq, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
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
            İletişim
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Bize Ulaşın
                </Typography>
                <Typography variant="body1" paragraph>
                  Sorularınız için bize e-posta gönderebilir veya telefon numaramızdan ulaşabilirsiniz.
                </Typography>
                <Typography variant="body1">
                  E-posta: info@reservationsaas.com
                </Typography>
                <Typography variant="body1">
                  Telefon: +90 (212) 123 45 67
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Demo İsteyin
                </Typography>
                <Typography variant="body1" paragraph>
                  Sistemimizi daha detaylı incelemek için ücretsiz demo talep edin.
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Demo Talep Et
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
                ReservationSaaS
              </Typography>
              <Typography variant="body2">
                İşletmenizi dijitalleştirin, randevularınızı otomatikleştirin.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Hızlı Bağlantılar
              </Typography>
              <Typography variant="body2" component="div">
                <a href="#features" style={{ color: 'white', textDecoration: 'none' }}>
                  Özellikler
                </a>
                <br />
                <a href="#pricing" style={{ color: 'white', textDecoration: 'none' }}>
                  Fiyatlandırma
                </a>
                <br />
                <a href="#faq" style={{ color: 'white', textDecoration: 'none' }}>
                  SSS
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Yasal
              </Typography>
              <Typography variant="body2" component="div">
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                  Gizlilik Politikası
                </a>
                <br />
                <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                  Kullanım Şartları
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2">
              © {new Date().getFullYear()} ReservationSaaS. Tüm hakları saklıdır.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage; 