import React from 'react';
import { Box, Paper, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const HeroDemo: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const conversations = {
    tr: [
      { sender: 'customer', message: 'Merhaba, yarın için randevu almak istiyorum.' },
      { sender: 'ai', message: 'Merhaba! Size yardımcı olmaktan mutluluk duyarım. Hangi hizmet için randevu almak istersiniz?' },
      { sender: 'customer', message: 'Saç kesimi için.' },
      { sender: 'ai', message: 'Tabii, yarın için müsait saatlerimiz: 10:00, 11:30, 14:00 ve 16:30. Hangisi size uygun?' },
      { sender: 'customer', message: '14:00 uygun olur.' },
      { sender: 'ai', message: 'Harika! Yarın saat 14:00 için saç kesimi randevunuzu oluşturdum. Başka bir yardıma ihtiyacınız var mı?' }
    ],
    en: [
      { sender: 'customer', message: 'Hi, I would like to make an appointment for tomorrow.' },
      { sender: 'ai', message: 'Hello! I\'d be happy to help you. What service would you like to book?' },
      { sender: 'customer', message: 'For a haircut.' },
      { sender: 'ai', message: 'Sure, our available times for tomorrow are: 10:00, 11:30, 14:00, and 16:30. Which one works for you?' },
      { sender: 'customer', message: '14:00 would be good.' },
      { sender: 'ai', message: 'Great! I\'ve scheduled your haircut appointment for tomorrow at 14:00. Is there anything else you need help with?' }
    ],
    fr: [
      { sender: 'customer', message: 'Bonjour, je voudrais prendre rendez-vous pour demain.' },
      { sender: 'ai', message: 'Bonjour ! Je serais ravi de vous aider. Pour quel service souhaitez-vous prendre rendez-vous ?' },
      { sender: 'customer', message: 'Pour une coupe de cheveux.' },
      { sender: 'ai', message: 'Bien sûr, nos horaires disponibles pour demain sont : 10h00, 11h30, 14h00 et 16h30. Lequel vous convient ?' },
      { sender: 'customer', message: '14h00 me conviendrait.' },
      { sender: 'ai', message: 'Parfait ! J\'ai programmé votre rendez-vous pour une coupe de cheveux demain à 14h00. Avez-vous besoin d\'autre chose ?' }
    ],
    es: [
      { sender: 'customer', message: 'Hola, me gustaría hacer una cita para mañana.' },
      { sender: 'ai', message: '¡Hola! Me alegro de ayudarte. ¿Para qué servicio te gustaría reservar?' },
      { sender: 'customer', message: 'Para un corte de pelo.' },
      { sender: 'ai', message: 'Por supuesto, nuestros horarios disponibles para mañana son: 10:00, 11:30, 14:00 y 16:30. ¿Cuál te viene bien?' },
      { sender: 'customer', message: 'Las 14:00 estaría bien.' },
      { sender: 'ai', message: '¡Perfecto! He programado tu cita para el corte de pelo mañana a las 14:00. ¿Necesitas algo más?' }
    ],
    de: [
      { sender: 'customer', message: 'Hallo, ich möchte einen Termin für morgen vereinbaren.' },
      { sender: 'ai', message: 'Hallo! Ich helfe Ihnen gerne. Für welchen Service möchten Sie einen Termin vereinbaren?' },
      { sender: 'customer', message: 'Für einen Haarschnitt.' },
      { sender: 'ai', message: 'Natürlich, unsere verfügbaren Zeiten für morgen sind: 10:00, 11:30, 14:00 und 16:30. Welche passt Ihnen?' },
      { sender: 'customer', message: '14:00 wäre gut.' },
      { sender: 'ai', message: 'Ausgezeichnet! Ich habe Ihren Haarschnitt-Termin für morgen um 14:00 Uhr vereinbart. Kann ich Ihnen noch bei etwas anderem helfen?' }
    ]
  };

  const currentConversation = conversations[currentLang as keyof typeof conversations] || conversations.en;

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
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar
              sx={{
                bgcolor: '#25D366',
                width: 40,
                height: 40,
                mr: 1,
              }}
            >
              <WhatsAppIcon sx={{ color: 'white' }} />
            </Avatar>
            <Typography variant="h6" sx={{ color: '#075E54' }}>
              WhatsApp AI
            </Typography>
          </Box>
          <Box sx={{ maxHeight: 300, overflow: 'auto' }}>
            {currentConversation.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: msg.sender === 'customer' ? 'flex-end' : 'flex-start',
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: '80%',
                      bgcolor: msg.sender === 'customer' ? '#DCF8C6' : 'white',
                      p: 1.5,
                      borderRadius: 2,
                      boxShadow: 1,
                    }}
                  >
                    <Typography variant="body1">{msg.message}</Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default HeroDemo; 