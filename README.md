# Reservation SaaS

Modern bir randevu yönetim sistemi. İşletmeler için özelleştirilebilir randevu takip ve yönetim çözümü.

## Özellikler

- İşletme yönetimi
- Çalışan yönetimi
- Randevu takibi
- Müşteri yönetimi
- Admin paneli
- Responsive tasarım

## Teknolojiler

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- TypeScript

### Frontend
- React
- Material-UI
- TypeScript
- React Router
- Axios

## Kurulum

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## Ortam Değişkenleri

Backend için `.env` dosyası oluşturun:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/reservation-saas
JWT_SECRET=your-secret-key
```

## Lisans

MIT 