import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        home: 'Home',
        about: 'About',
        features: 'Features',
        contact: 'Contact',
        language: 'Language',
        login: 'Login',
        start_free: 'Start Free',
        pricing: 'Pricing',
        signup: 'Sign Up',
        faq: 'FAQ'
      },
      landing: {
        hero_title: 'Take Your Business to the Future',
        hero_subtitle: 'Digitize your business with AI-powered reservation system',
        get_started: 'Get Started',
        demo: 'See Demo',
        features_title: 'Features',
        feature1: 'AI-Powered Reservation',
        feature1_desc: 'Analyze customer preferences and automate reservations with our AI technology.',
        feature2: 'WhatsApp & Telegram Integration',
        feature2_desc: 'Chat directly with your customers and manage reservations in real-time.',
        feature3: 'Central Dashboard',
        feature3_desc: 'Manage your entire business from one place, view reservations and customer data.',
        feature4: 'Detailed Reporting',
        feature4_desc: 'Analyze your business performance, create custom reports and make data-driven decisions.',
        feature5: 'Mobile App',
        feature5_desc: 'Manage your business from anywhere. Control is in your hands with our iOS and Android apps.',
        feature6: 'Calendar Integration',
        feature6_desc: 'Work in sync with Google Calendar, Outlook and other popular calendar applications.',
        testimonials_title: 'What Our Customers Say',
        testimonials_subtitle: 'Discover how our customers are transforming their businesses'
      },
      pricing: {
        free: {
          title: 'Free',
          price: '0',
          feature1: 'Basic reservation management',
          feature2: 'WhatsApp integration',
          feature3: 'Basic reporting',
          feature4: '1 user',
          feature5: '14-day free trial'
        },
        pro: {
          title: 'Professional',
          price: '199',
          feature1: 'All Free features',
          feature2: 'AI-powered reservation',
          feature3: 'Telegram integration',
          feature4: 'Advanced reporting',
          feature5: '5 users',
          feature6: '24/7 support'
        },
        enterprise: {
          title: 'Enterprise',
          price: '499',
          feature1: 'All Pro features',
          feature2: 'Custom AI models',
          feature3: 'API access',
          feature4: 'Unlimited users',
          feature5: 'Priority support',
          feature6: 'Custom integrations'
        }
      },
      testimonial1: {
        name: 'John Smith',
        role: 'Hair Salon Owner',
        content: 'Thanks to this system, we can manage our appointments much more efficiently. Our customers are very happy because they can make appointments via WhatsApp.'
      },
      testimonial2: {
        name: 'Sarah Johnson',
        role: 'Spa Center Manager',
        content: 'The AI-powered reservation system learns customer preferences and saves us time. I definitely recommend it.'
      },
      testimonial3: {
        name: 'Michael Brown',
        role: 'Restaurant Owner',
        content: 'Our work has become much easier thanks to the mobile app and calendar integration. Our customers are very satisfied because they can make online reservations.'
      },
      faq: {
        question1: 'How does the system work?',
        answer1: 'Our system is an AI-powered reservation management platform. Your customers can make reservations via WhatsApp or Telegram, website or mobile app. The system automatically checks availability and manages appointments.',
        question2: 'How long is the free trial?',
        answer2: 'You can try all features free for 14 days. After this period, you can choose the plan that best suits you.',
        question3: 'Can I get technical support?',
        answer3: 'Yes, we offer email support for all our plans. 24/7 phone support is also available in our Professional and Enterprise plans.',
        question4: 'Can I integrate with my existing system?',
        answer4: 'Yes, our system can be integrated with your existing software with API support. We also offer custom integration support in our Enterprise plan.'
      },
      contact: {
        reach_us: 'Contact Us',
        reach_us_desc: 'You can reach us via email or phone for your questions.',
        email: 'Email: info@reservationsaas.com',
        phone: 'Phone: +90 (212) 123 45 67',
        request_demo: 'Request Demo',
        request_demo_desc: 'Request a free demo to learn more about our system.',
        request_demo_button: 'Request Demo'
      }
    }
  },
  tr: {
    translation: {
      navbar: {
        home: 'Ana Sayfa',
        about: 'Hakkında',
        features: 'Özellikler',
        contact: 'İletişim',
        language: 'Dil',
        login: 'Giriş',
        start_free: 'Ücretsiz Başla',
        pricing: 'Fiyatlandırma',
        signup: 'Kayıt Ol',
        faq: 'SSS'
      },
      landing: {
        hero_title: 'İşletmenizi Geleceğe Taşıyın',
        hero_subtitle: 'AI destekli rezervasyon sistemi ile işletmenizi dijitalleştirin',
        get_started: 'Hemen Başlayın',
        demo: 'Demoyu Gör',
        features_title: 'Özellikler',
        feature1: 'AI Destekli Rezervasyon',
        feature1_desc: 'Yapay zeka teknolojimiz ile müşteri tercihlerini analiz edin ve rezervasyonları otomatikleştirin.',
        feature2: 'WhatsApp & Telegram Entegrasyonu',
        feature2_desc: 'Müşterilerinizle doğrudan mesajlaşın ve rezervasyonları anlık olarak yönetin.',
        feature3: 'Merkezi Dashboard',
        feature3_desc: 'Tüm işletmenizi tek bir yerden yönetin, rezervasyonları ve müşteri verilerini görüntüleyin.',
        feature4: 'Detaylı Raporlama',
        feature4_desc: 'İşletmenizin performansını analiz edin, özel raporlar oluşturun ve veriye dayalı kararlar alın.',
        feature5: 'Mobil Uygulama',
        feature5_desc: 'İşletmenizi her yerden yönetin. iOS ve Android uygulamalarımız ile her an kontrol sizde.',
        feature6: 'Takvim Entegrasyonu',
        feature6_desc: 'Google Calendar, Outlook ve diğer popüler takvim uygulamaları ile senkronize çalışın.',
        testimonials_title: 'Müşterilerimiz Ne Diyor',
        testimonials_subtitle: 'Müşterilerimizin işletmelerini nasıl dönüştürdüklerini keşfedin'
      },
      pricing: {
        free: {
          title: 'Ücretsiz',
          price: '0',
          feature1: 'Temel rezervasyon yönetimi',
          feature2: 'WhatsApp entegrasyonu',
          feature3: 'Temel raporlama',
          feature4: '1 kullanıcı',
          feature5: '14 gün ücretsiz deneme'
        },
        pro: {
          title: 'Profesyonel',
          price: '199',
          feature1: 'Tüm Ücretsiz özellikleri',
          feature2: 'AI destekli rezervasyon',
          feature3: 'Telegram entegrasyonu',
          feature4: 'Gelişmiş raporlama',
          feature5: '5 kullanıcı',
          feature6: '7/24 destek'
        },
        enterprise: {
          title: 'Kurumsal',
          price: '499',
          feature1: 'Tüm Profesyonel özellikleri',
          feature2: 'Özel AI modelleri',
          feature3: 'API erişimi',
          feature4: 'Sınırsız kullanıcı',
          feature5: 'Öncelikli destek',
          feature6: 'Özel entegrasyonlar'
        }
      },
      testimonial1: {
        name: 'Ahmet Yılmaz',
        role: 'Kuaför Salonu Sahibi',
        content: 'Bu sistem sayesinde randevularımızı çok daha verimli yönetebiliyoruz. Müşterilerimiz de WhatsApp üzerinden randevu alabildikleri için çok memnun.'
      },
      testimonial2: {
        name: 'Ayşe Kaya',
        role: 'Spa Merkezi Yöneticisi',
        content: 'AI destekli rezervasyon sistemi, müşteri tercihlerini öğreniyor ve bize zaman kazandırıyor. Kesinlikle tavsiye ediyorum.'
      },
      testimonial3: {
        name: 'Mehmet Demir',
        role: 'Restoran İşletmecisi',
        content: 'Mobil uygulama ve takvim entegrasyonu sayesinde işimiz çok kolaylaştı. Müşterilerimiz de online rezervasyon yapabildikleri için çok memnun.'
      },
      faq: {
        question1: 'Sistem nasıl çalışıyor?',
        answer1: 'Sistemimiz, yapay zeka destekli bir rezervasyon yönetim platformudur. Müşterileriniz WhatsApp veya Telegram üzerinden, web sitesi veya mobil uygulama üzerinden rezervasyon yapabilir. Sistem otomatik olarak müsaitlik durumunu kontrol eder ve randevuları yönetir.',
        question2: 'Ücretsiz deneme süresi ne kadar?',
        answer2: '14 gün boyunca tüm özellikleri ücretsiz olarak deneyebilirsiniz. Bu süre sonunda size en uygun planı seçebilirsiniz.',
        question3: 'Teknik destek alabilir miyim?',
        answer3: 'Evet, tüm planlarımızda e-posta desteği sunuyoruz. Profesyonel ve Kurumsal planlarımızda 7/24 telefon desteği de mevcuttur.',
        question4: 'Mevcut sistemimle entegre edebilir miyim?',
        answer4: 'Evet, sistemimiz API desteği ile mevcut yazılımlarınızla entegre edilebilir. Kurumsal planımızda özel entegrasyon desteği de sunuyoruz.'
      },
      contact: {
        reach_us: 'Bize Ulaşın',
        reach_us_desc: 'Sorularınız için bize e-posta gönderebilir veya telefon numaramızdan ulaşabilirsiniz.',
        email: 'E-posta: info@reservationsaas.com',
        phone: 'Telefon: +90 (212) 123 45 67',
        request_demo: 'Demo İsteyin',
        request_demo_desc: 'Sistemimizi daha detaylı incelemek için ücretsiz demo talep edin.',
        request_demo_button: 'Demo Talep Et'
      }
    }
  },
  fr: {
    translation: {
      navbar: {
        home: 'Accueil',
        about: 'À propos',
        features: 'Fonctionnalités',
        contact: 'Contact',
        language: 'Langue',
        login: 'Connexion',
        start_free: 'Commencer gratuitement',
        pricing: 'Tarification',
        signup: "S'inscrire",
        faq: 'FAQ'
      },
      landing: {
        hero_title: 'Amenez votre entreprise vers l\'avenir',
        hero_subtitle: 'Numérisez votre entreprise avec notre système de réservation alimenté par l\'IA',
        get_started: 'Commencer',
        demo: 'Voir la démo',
        features_title: 'Fonctionnalités',
        feature1: 'Réservation alimentée par l\'IA',
        feature1_desc: 'Analysez les préférences des clients et automatisez les réservations avec notre technologie d\'IA.',
        feature2: 'Intégration WhatsApp & Telegram',
        feature2_desc: 'Discutez directement avec vos clients et gérez les réservations en temps réel.',
        feature3: 'Tableau de bord central',
        feature3_desc: 'Gérez toute votre entreprise depuis un seul endroit, consultez les réservations et les données clients.',
        feature4: 'Rapports détaillés',
        feature4_desc: 'Analysez les performances de votre entreprise, créez des rapports personnalisés et prenez des décisions basées sur les données.',
        feature5: 'Application mobile',
        feature5_desc: 'Gérez votre entreprise de n\'importe où. Le contrôle est entre vos mains avec nos applications iOS et Android.',
        feature6: 'Intégration calendrier',
        feature6_desc: 'Travaillez en synchronisation avec Google Calendar, Outlook et d\'autres applications de calendrier populaires.',
        testimonials_title: 'Ce que disent nos clients',
        testimonials_subtitle: 'Découvrez comment nos clients transforment leurs entreprises'
      },
      pricing: {
        free: {
          title: 'Gratuit',
          price: '0',
          feature1: 'Gestion basique des réservations',
          feature2: 'Intégration WhatsApp',
          feature3: 'Rapports basiques',
          feature4: '1 utilisateur',
          feature5: 'Essai gratuit de 14 jours'
        },
        pro: {
          title: 'Professionnel',
          price: '199',
          feature1: 'Toutes les fonctionnalités gratuites',
          feature2: 'Réservation alimentée par l\'IA',
          feature3: 'Intégration Telegram',
          feature4: 'Rapports avancés',
          feature5: '5 utilisateurs',
          feature6: 'Support 24/7'
        },
        enterprise: {
          title: 'Entreprise',
          price: '499',
          feature1: 'Toutes les fonctionnalités Pro',
          feature2: 'Modèles d\'IA personnalisés',
          feature3: 'Accès API',
          feature4: 'Utilisateurs illimités',
          feature5: 'Support prioritaire',
          feature6: 'Intégrations personnalisées'
        }
      },
      testimonial1: {
        name: 'Jean Dupont',
        role: 'Propriétaire de salon de coiffure',
        content: 'Grâce à ce système, nous pouvons gérer nos rendez-vous beaucoup plus efficacement. Nos clients sont très satisfaits car ils peuvent prendre rendez-vous via WhatsApp.'
      },
      testimonial2: {
        name: 'Sophie Martin',
        role: 'Gérante de centre spa',
        content: 'Le système de réservation alimenté par l\'IA apprend les préférences des clients et nous fait gagner du temps. Je le recommande vivement.'
      },
      testimonial3: {
        name: 'Pierre Dubois',
        role: 'Propriétaire de restaurant',
        content: 'Notre travail est devenu beaucoup plus facile grâce à l\'application mobile et l\'intégration du calendrier. Nos clients sont très satisfaits car ils peuvent faire des réservations en ligne.'
      },
      faq: {
        question1: 'Comment fonctionne le système ?',
        answer1: 'Notre système est une plateforme de gestion de réservations alimentée par l\'IA. Vos clients peuvent faire des réservations via WhatsApp ou Telegram, le site web ou l\'application mobile. Le système vérifie automatiquement la disponibilité et gère les rendez-vous.',
        question2: 'Quelle est la durée de l\'essai gratuit ?',
        answer2: 'Vous pouvez essayer toutes les fonctionnalités gratuitement pendant 14 jours. Après cette période, vous pouvez choisir le plan qui vous convient le mieux.',
        question3: 'Puis-je obtenir un support technique ?',
        answer3: 'Oui, nous offrons un support par e-mail pour tous nos plans. Un support téléphonique 24/7 est également disponible dans nos plans Professionnel et Entreprise.',
        question4: 'Puis-je intégrer avec mon système existant ?',
        answer4: 'Oui, notre système peut être intégré avec votre logiciel existant grâce au support API. Nous offrons également un support d\'intégration personnalisé dans notre plan Entreprise.'
      },
      contact: {
        reach_us: 'Contactez-nous',
        reach_us_desc: 'Vous pouvez nous contacter par e-mail ou par téléphone pour vos questions.',
        email: 'E-mail : info@reservationsaas.com',
        phone: 'Téléphone : +90 (212) 123 45 67',
        request_demo: 'Demander une démo',
        request_demo_desc: 'Demandez une démo gratuite pour en savoir plus sur notre système.',
        request_demo_button: 'Demander une démo'
      }
    }
  },
  es: {
    translation: {
      navbar: {
        home: 'Inicio',
        about: 'Acerca de',
        features: 'Características',
        contact: 'Contacto',
        language: 'Idioma',
        login: 'Iniciar sesión',
        start_free: 'Comenzar gratis',
        pricing: 'Precios',
        signup: 'Registrarse',
        faq: 'Preguntas frecuentes'
      },
      landing: {
        hero_title: 'Lleva tu negocio al futuro',
        hero_subtitle: 'Digitaliza tu negocio con nuestro sistema de reservas impulsado por IA',
        get_started: 'Comenzar',
        demo: 'Ver demo',
        features_title: 'Características',
        feature1: 'Reservas impulsadas por IA',
        feature1_desc: 'Analiza las preferencias de los clientes y automatiza las reservas con nuestra tecnología de IA.',
        feature2: 'Integración WhatsApp & Telegram',
        feature2_desc: 'Chatea directamente con tus clientes y gestiona las reservas en tiempo real.',
        feature3: 'Panel central',
        feature3_desc: 'Gestiona todo tu negocio desde un solo lugar, visualiza reservas y datos de clientes.',
        feature4: 'Informes detallados',
        feature4_desc: 'Analiza el rendimiento de tu negocio, crea informes personalizados y toma decisiones basadas en datos.',
        feature5: 'Aplicación móvil',
        feature5_desc: 'Gestiona tu negocio desde cualquier lugar. El control está en tus manos con nuestras aplicaciones iOS y Android.',
        feature6: 'Integración de calendario',
        feature6_desc: 'Trabaja en sincronización con Google Calendar, Outlook y otras aplicaciones de calendario populares.',
        testimonials_title: 'Lo que dicen nuestros clientes',
        testimonials_subtitle: 'Descubre cómo nuestros clientes están transformando sus negocios'
      },
      pricing: {
        free: {
          title: 'Gratis',
          price: '0',
          feature1: 'Gestión básica de reservas',
          feature2: 'Integración WhatsApp',
          feature3: 'Informes básicos',
          feature4: '1 usuario',
          feature5: 'Prueba gratuita de 14 días'
        },
        pro: {
          title: 'Profesional',
          price: '199',
          feature1: 'Todas las características gratuitas',
          feature2: 'Reservas impulsadas por IA',
          feature3: 'Integración Telegram',
          feature4: 'Informes avanzados',
          feature5: '5 usuarios',
          feature6: 'Soporte 24/7'
        },
        enterprise: {
          title: 'Empresarial',
          price: '499',
          feature1: 'Todas las características Pro',
          feature2: 'Modelos de IA personalizados',
          feature3: 'Acceso API',
          feature4: 'Usuarios ilimitados',
          feature5: 'Soporte prioritario',
          feature6: 'Integraciones personalizadas'
        }
      },
      testimonial1: {
        name: 'Juan García',
        role: 'Propietario de peluquería',
        content: 'Gracias a este sistema, podemos gestionar nuestras citas de manera mucho más eficiente. Nuestros clientes están muy contentos porque pueden hacer citas a través de WhatsApp.'
      },
      testimonial2: {
        name: 'María Rodríguez',
        role: 'Gerente de centro spa',
        content: 'El sistema de reservas impulsado por IA aprende las preferencias de los clientes y nos ahorra tiempo. Definitivamente lo recomiendo.'
      },
      testimonial3: {
        name: 'Carlos Martínez',
        role: 'Propietario de restaurante',
        content: 'Nuestro trabajo se ha vuelto mucho más fácil gracias a la aplicación móvil y la integración del calendario. Nuestros clientes están muy satisfechos porque pueden hacer reservas en línea.'
      },
      faq: {
        question1: '¿Cómo funciona el sistema?',
        answer1: 'Nuestro sistema es una plataforma de gestión de reservas impulsada por IA. Tus clientes pueden hacer reservas a través de WhatsApp o Telegram, el sitio web o la aplicación móvil. El sistema verifica automáticamente la disponibilidad y gestiona las citas.',
        question2: '¿Cuánto dura la prueba gratuita?',
        answer2: 'Puedes probar todas las características gratis durante 14 días. Después de este período, puedes elegir el plan que mejor se adapte a ti.',
        question3: '¿Puedo obtener soporte técnico?',
        answer3: 'Sí, ofrecemos soporte por correo electrónico para todos nuestros planes. También está disponible soporte telefónico 24/7 en nuestros planes Profesional y Empresarial.',
        question4: '¿Puedo integrar con mi sistema existente?',
        answer4: 'Sí, nuestro sistema puede integrarse con tu software existente con soporte API. También ofrecemos soporte de integración personalizado en nuestro plan Empresarial.'
      },
      contact: {
        reach_us: 'Contáctenos',
        reach_us_desc: 'Puede contactarnos por correo electrónico o teléfono para sus preguntas.',
        email: 'Correo: info@reservationsaas.com',
        phone: 'Teléfono: +90 (212) 123 45 67',
        request_demo: 'Solicitar Demo',
        request_demo_desc: 'Solicite una demo gratuita para conocer más sobre nuestro sistema.',
        request_demo_button: 'Solicitar Demo'
      }
    }
  },
  de: {
    translation: {
      navbar: {
        home: 'Startseite',
        about: 'Über uns',
        features: 'Funktionen',
        contact: 'Kontakt',
        language: 'Sprache',
        login: 'Anmelden',
        start_free: 'Kostenlos starten',
        pricing: 'Preise',
        signup: 'Registrieren',
        faq: 'FAQ'
      },
      landing: {
        hero_title: 'Bringen Sie Ihr Unternehmen in die Zukunft',
        hero_subtitle: 'Digitalisieren Sie Ihr Unternehmen mit unserem KI-gestützten Reservierungssystem',
        get_started: 'Jetzt starten',
        demo: 'Demo ansehen',
        features_title: 'Funktionen',
        feature1: 'KI-gestützte Reservierung',
        feature1_desc: 'Analysieren Sie Kundenpräferenzen und automatisieren Sie Reservierungen mit unserer KI-Technologie.',
        feature2: 'WhatsApp & Telegram Integration',
        feature2_desc: 'Chatten Sie direkt mit Ihren Kunden und verwalten Sie Reservierungen in Echtzeit.',
        feature3: 'Zentrales Dashboard',
        feature3_desc: 'Verwalten Sie Ihr gesamtes Unternehmen von einem Ort aus, sehen Sie Reservierungen und Kundendaten ein.',
        feature4: 'Detaillierte Berichte',
        feature4_desc: 'Analysieren Sie Ihre Geschäftsleistung, erstellen Sie benutzerdefinierte Berichte und treffen Sie datengestützte Entscheidungen.',
        feature5: 'Mobile App',
        feature5_desc: 'Verwalten Sie Ihr Unternehmen von überall. Die Kontrolle liegt in Ihren Händen mit unseren iOS- und Android-Apps.',
        feature6: 'Kalender-Integration',
        feature6_desc: 'Arbeiten Sie synchron mit Google Kalender, Outlook und anderen beliebten Kalenderanwendungen.',
        testimonials_title: 'Was unsere Kunden sagen',
        testimonials_subtitle: 'Entdecken Sie, wie unsere Kunden ihre Unternehmen transformieren'
      },
      pricing: {
        free: {
          title: 'Kostenlos',
          price: '0',
          feature1: 'Grundlegende Reservierungsverwaltung',
          feature2: 'WhatsApp-Integration',
          feature3: 'Grundlegende Berichte',
          feature4: '1 Benutzer',
          feature5: '14-tägige kostenlose Testversion'
        },
        pro: {
          title: 'Professional',
          price: '199',
          feature1: 'Alle kostenlosen Funktionen',
          feature2: 'KI-gestützte Reservierung',
          feature3: 'Telegram-Integration',
          feature4: 'Erweiterte Berichte',
          feature5: '5 Benutzer',
          feature6: '24/7 Support'
        },
        enterprise: {
          title: 'Enterprise',
          price: '499',
          feature1: 'Alle Pro-Funktionen',
          feature2: 'Benutzerdefinierte KI-Modelle',
          feature3: 'API-Zugang',
          feature4: 'Unbegrenzte Benutzer',
          feature5: 'Prioritäts-Support',
          feature6: 'Benutzerdefinierte Integrationen'
        }
      },
      testimonial1: {
        name: 'Hans Schmidt',
        role: 'Friseursalon-Besitzer',
        content: 'Dank dieses Systems können wir unsere Termine viel effizienter verwalten. Unsere Kunden sind sehr zufrieden, weil sie Termine über WhatsApp vereinbaren können.'
      },
      testimonial2: {
        name: 'Maria Weber',
        role: 'Spa-Zentrum Managerin',
        content: 'Das KI-gestützte Reservierungssystem lernt Kundenpräferenzen und spart uns Zeit. Ich empfehle es definitiv.'
      },
      testimonial3: {
        name: 'Thomas Müller',
        role: 'Restaurantbesitzer',
        content: 'Unsere Arbeit ist durch die mobile App und Kalender-Integration viel einfacher geworden. Unsere Kunden sind sehr zufrieden, weil sie online reservieren können.'
      },
      faq: {
        question1: 'Wie funktioniert das System?',
        answer1: 'Unser System ist eine KI-gestützte Reservierungsverwaltungsplattform. Ihre Kunden können Reservierungen über WhatsApp oder Telegram, die Website oder die mobile App vornehmen. Das System prüft automatisch die Verfügbarkeit und verwaltet Termine.',
        question2: 'Wie lange dauert die kostenlose Testversion?',
        answer2: 'Sie können alle Funktionen 14 Tage lang kostenlos testen. Nach dieser Zeit können Sie den Plan wählen, der am besten zu Ihnen passt.',
        question3: 'Kann ich technischen Support erhalten?',
        answer3: 'Ja, wir bieten E-Mail-Support für alle unsere Pläne. 24/7 Telefon-Support ist auch in unseren Professional- und Enterprise-Plänen verfügbar.',
        question4: 'Kann ich mit meinem bestehenden System integrieren?',
        answer4: 'Ja, unser System kann mit Ihrer bestehenden Software über API-Unterstützung integriert werden. Wir bieten auch benutzerdefinierte Integrationsunterstützung in unserem Enterprise-Plan.'
      },
      contact: {
        reach_us: 'Kontaktieren Sie uns',
        reach_us_desc: 'Sie können uns per E-Mail oder Telefon für Ihre Fragen erreichen.',
        email: 'E-Mail: info@reservationsaas.com',
        phone: 'Telefon: +90 (212) 123 45 67',
        request_demo: 'Demo anfordern',
        request_demo_desc: 'Fordern Sie eine kostenlose Demo an, um mehr über unser System zu erfahren.',
        request_demo_button: 'Demo anfordern'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'tr',
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n; 