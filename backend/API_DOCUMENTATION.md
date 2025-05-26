# Reservation SaaS API Dokümantasyonu

## Genel Bilgiler

Bu API, randevu yönetim sistemi için geliştirilmiş bir RESTful API'dir. Sistem, işletmelerin randevularını, çalışanlarını, hizmetlerini ve müşterilerini yönetmelerini sağlar.

### Temel URL
```
http://localhost:5000/api
```

### Kimlik Doğrulama
Tüm korumalı endpoint'ler için JWT token gereklidir. Token'ı request header'ında şu şekilde göndermelisiniz:
```
Authorization: Bearer <your_token>
```

## API Endpoint'leri

### 1. İşletme (Business) Endpoint'leri

#### İşletme Oluşturma
```http
POST /api/businesses
```
- Public endpoint
- Yeni bir işletme kaydı oluşturur

#### İşletme Listeleme (Admin)
```http
GET /api/businesses
```
- Admin yetkisi gerektirir
- Tüm işletmeleri listeler

#### İşletme Detayları
```http
GET /api/businesses/:id
```
- İşletme detaylarını getirir

#### İşletme Güncelleme
```http
PUT /api/businesses/:id
```
- İşletme bilgilerini günceller

#### İşletme Silme
```http
DELETE /api/businesses/:id
```
- İşletmeyi siler

#### İşletme Ayarları Güncelleme
```http
PUT /api/businesses/:id/settings
```
- İşletme ayarlarını günceller

#### Abonelik Planı Güncelleme
```http
PUT /api/businesses/:id/subscription
```
- İşletmenin abonelik planını günceller

#### İşletme Durumu Güncelleme
```http
PUT /api/businesses/:id/status
```
- İşletmenin durumunu günceller

### 2. Kullanıcı (User) Endpoint'leri

#### Kullanıcı Kaydı
```http
POST /api/users/register
```
- Public endpoint
- Yeni kullanıcı kaydı oluşturur

#### Kullanıcı Girişi
```http
POST /api/users/login
```
- Public endpoint
- Kullanıcı girişi yapar ve token döner

#### Profil Bilgileri
```http
GET /api/users/profile
```
- Kullanıcının profil bilgilerini getirir

#### Profil Güncelleme
```http
PUT /api/users/profile
```
- Kullanıcı profilini günceller

#### Şifre Değiştirme
```http
PUT /api/users/change-password
```
- Kullanıcı şifresini değiştirir

#### İşletme Kullanıcılarını Listeleme
```http
GET /api/users/business
```
- Admin yetkisi gerektirir
- İşletmenin tüm kullanıcılarını listeler

#### Kullanıcı Durumu Güncelleme
```http
PUT /api/users/:id/status
```
- Admin yetkisi gerektirir
- Kullanıcının durumunu günceller

### 3. Çalışan (Employee) Endpoint'leri

#### Çalışan Ekleme
```http
POST /api/employees
```
- Admin yetkisi gerektirir
- Yeni çalışan ekler

#### Çalışanları Listeleme
```http
GET /api/employees
```
- Tüm çalışanları listeler

#### Çalışan Detayları
```http
GET /api/employees/:id
```
- Çalışan detaylarını getirir

#### Çalışan Güncelleme
```http
PUT /api/employees/:id
```
- Admin yetkisi gerektirir
- Çalışan bilgilerini günceller

#### Çalışan Silme
```http
DELETE /api/employees/:id
```
- Admin yetkisi gerektirir
- Çalışanı siler

#### Çalışma Saatleri Güncelleme
```http
PUT /api/employees/:id/working-hours
```
- Admin yetkisi gerektirir
- Çalışanın çalışma saatlerini günceller

#### Hizmet Atamaları Güncelleme
```http
PUT /api/employees/:id/services
```
- Admin yetkisi gerektirir
- Çalışanın hizmet atamalarını günceller

#### Çalışan Durumu Güncelleme
```http
PUT /api/employees/:id/status
```
- Admin yetkisi gerektirir
- Çalışanın durumunu günceller

### 4. Hizmet (Service) Endpoint'leri

#### Hizmet Ekleme
```http
POST /api/services
```
- Admin yetkisi gerektirir
- Yeni hizmet ekler

#### Hizmetleri Listeleme
```http
GET /api/services
```
- Tüm hizmetleri listeler

#### Aktif Hizmetleri Listeleme
```http
GET /api/services/active
```
- Aktif hizmetleri listeler

#### Hizmet Detayları
```http
GET /api/services/:id
```
- Hizmet detaylarını getirir

#### Hizmet Güncelleme
```http
PUT /api/services/:id
```
- Admin yetkisi gerektirir
- Hizmet bilgilerini günceller

#### Hizmet Silme
```http
DELETE /api/services/:id
```
- Admin yetkisi gerektirir
- Hizmeti siler

#### Hizmet Durumu Güncelleme
```http
PUT /api/services/:id/status
```
- Admin yetkisi gerektirir
- Hizmetin durumunu günceller

### 5. Randevu (Appointment) Endpoint'leri

#### Randevu Oluşturma
```http
POST /api/appointments
```
- Yeni randevu oluşturur

#### Randevuları Listeleme
```http
GET /api/appointments
```
- Tüm randevuları listeler

#### Randevu Detayları
```http
GET /api/appointments/:id
```
- Randevu detaylarını getirir

#### Randevu Güncelleme
```http
PUT /api/appointments/:id
```
- Randevu bilgilerini günceller

#### Randevu Silme
```http
DELETE /api/appointments/:id
```
- Randevuyu siler

#### Randevu Durumu Güncelleme
```http
PUT /api/appointments/:id/status
```
- Randevunun durumunu günceller

#### Tarih Aralığına Göre Randevuları Listeleme
```http
GET /api/appointments/date-range
```
- Belirli bir tarih aralığındaki randevuları listeler

#### Çalışana Göre Randevuları Listeleme
```http
GET /api/appointments/employee
```
- Belirli bir çalışanın randevularını listeler

## Hata Kodları

- `400` - Bad Request: İstek formatı hatalı
- `401` - Unauthorized: Kimlik doğrulama gerekli
- `403` - Forbidden: Yetkisiz erişim
- `404` - Not Found: Kaynak bulunamadı
- `500` - Internal Server Error: Sunucu hatası

## Başarılı Yanıt Formatı
```json
{
  "success": true,
  "data": {
    // Response data
  }
}
```

## Hata Yanıt Formatı
```json
{
  "success": false,
  "error": "Hata mesajı"
}
``` 