import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Avatar, useTheme } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  {
    type: 'user',
    content: 'Merhaba, yarın saat 15:00\'te randevu almak istiyorum.',
    delay: 1000,
  },
  {
    type: 'bot',
    content: 'Merhaba! Size yardımcı olmaktan mutluluk duyarım. Yarın saat 15:00 için müsaitlik durumunu kontrol ediyorum...',
    delay: 2000,
  },
  {
    type: 'bot',
    content: 'Harika! Yarın saat 15:00 müsait. Randevunuzu onaylamak için "Evet" yazabilirsiniz.',
    delay: 3000,
  },
  {
    type: 'user',
    content: 'Evet, onaylıyorum.',
    delay: 4000,
  },
  {
    type: 'bot',
    content: 'Randevunuz başarıyla oluşturuldu! WhatsApp üzerinden detayları size ileteceğim. Başka bir yardıma ihtiyacınız var mı?',
    delay: 5000,
  },
];

const HeroDemo: React.FC = () => {
  const theme = useTheme();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isDemoComplete, setIsDemoComplete] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (currentMessageIndex < messages.length - 1) {
        setCurrentMessageIndex(prev => prev + 1);
      } else {
        setIsDemoComplete(true);
      }
    }, messages[currentMessageIndex].delay);

    return () => clearTimeout(timer);
  }, [currentMessageIndex]);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 500,
        height: 400,
        perspective: '1000px',
      }}
    >
      <motion.div
        initial={{ rotateX: 0, rotateY: 0 }}
        animate={{ rotateX: 5, rotateY: 5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 2,
            height: '100%',
            background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 1 }}>
              <SmartToyIcon />
            </Avatar>
            <Typography variant="h6">AI Asistan</Typography>
          </Box>

          {/* Chat Window */}
          <Box
            sx={{
              height: 'calc(100% - 100px)',
              overflowY: 'auto',
              mb: 2,
              p: 1,
            }}
          >
            <AnimatePresence>
              {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start',
                      mb: 2,
                    }}
                  >
                    <Paper
                      sx={{
                        p: 2,
                        maxWidth: '80%',
                        bgcolor: message.type === 'user' ? theme.palette.primary.main : 'grey.100',
                        color: message.type === 'user' ? 'white' : 'text.primary',
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="body1">{message.content}</Typography>
                    </Paper>
                  </Box>
                </motion.div>
              ))}
            </AnimatePresence>
          </Box>

          {/* Input Area */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              size="small"
              placeholder="Mesajınızı yazın..."
              disabled={!isDemoComplete}
            />
            <Button
              variant="contained"
              color="primary"
              disabled={!isDemoComplete}
              startIcon={<WhatsAppIcon />}
            >
              Gönder
            </Button>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default HeroDemo; 