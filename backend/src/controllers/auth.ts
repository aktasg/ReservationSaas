import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import mongoose from 'mongoose';

// JWT Token oluşturma
const generateToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'your-secret-key', {
    expiresIn: '30d',
  });
};

// Kullanıcı kaydı
export const register = async (req: Request, res: Response) => {
  try {
    console.log('Register request body:', req.body); // Debug log

    const { 
      name, 
      email, 
      password, 
      role = 'business-admin',
      businessName,
      businessAddress,
      businessPhone,
      businessEmail 
    } = req.body;

    // Gerekli alanları kontrol et
    if (!name || !email || !password) {
      return res.status(400).json({ 
        message: 'Eksik bilgi',
        details: {
          name: !name ? 'İsim alanı zorunludur' : undefined,
          email: !email ? 'E-posta alanı zorunludur' : undefined,
          password: !password ? 'Şifre alanı zorunludur' : undefined
        }
      });
    }

    // E-posta kontrolü
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Bu e-posta adresi zaten kullanımda' });
    }

    // Super-admin kontrolü
    if (role === 'super-admin') {
      const superAdminExists = await User.findOne({ role: 'super-admin' });
      if (superAdminExists) {
        return res.status(400).json({ message: 'Super-admin zaten mevcut' });
      }
    }

    // İşletme yöneticisi için zorunlu alanlar
    if (role === 'business-admin' && !businessName) {
      return res.status(400).json({ 
        message: 'İşletme bilgileri eksik',
        details: {
          businessName: 'İşletme adı zorunludur'
        }
      });
    }

    // Kullanıcı oluştur
    const user = await User.create({
      name,
      email,
      password,
      role,
      businessName,
      businessAddress,
      businessPhone,
      businessEmail,
    });

    // Token oluştur
    const token = generateToken(user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      businessName: user.businessName,
      businessAddress: user.businessAddress,
      businessPhone: user.businessPhone,
      businessEmail: user.businessEmail,
      token,
    });
  } catch (error: any) {
    console.error('Register error:', error); // Debug log

    // Mongoose validation error
    if (error instanceof mongoose.Error.ValidationError) {
      const validationErrors: Record<string, string> = {};
      Object.keys(error.errors).forEach(key => {
        validationErrors[key] = error.errors[key].message;
      });
      return res.status(400).json({ 
        message: 'Validasyon hatası',
        details: validationErrors
      });
    }

    // Duplicate key error (e.g., duplicate email)
    if (error.code === 11000) {
      return res.status(400).json({ 
        message: 'Bu e-posta adresi zaten kullanımda'
      });
    }

    res.status(500).json({ 
      message: 'Sunucu hatası',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Kullanıcı girişi
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Kullanıcıyı bul
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Geçersiz e-posta veya şifre' });
    }

    // Aktif kullanıcı kontrolü
    if (!user.isActive) {
      return res.status(401).json({ message: 'Hesabınız devre dışı bırakılmış' });
    }

    // Şifreyi kontrol et
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Geçersiz e-posta veya şifre' });
    }

    // Token oluştur
    const token = generateToken(user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      businessName: user.businessName,
      businessAddress: user.businessAddress,
      businessPhone: user.businessPhone,
      businessEmail: user.businessEmail,
      token,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Mevcut kullanıcı bilgilerini getir
export const getMe = async (req: Request, res: Response) => {
  try {
    const user = await User.findById((req as any).user._id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }
    res.json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Tüm kullanıcıları getir (sadece super-admin için)
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const user = await User.findById((req as any).user._id);
    if (!user || user.role !== 'super-admin') {
      return res.status(403).json({ message: 'Bu işlem için yetkiniz yok' });
    }

    const users = await User.find().select('-password');
    res.json(users);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Kullanıcı durumunu güncelle (sadece super-admin için)
export const updateUserStatus = async (req: Request, res: Response) => {
  try {
    const admin = await User.findById((req as any).user._id);
    if (!admin || admin.role !== 'super-admin') {
      return res.status(403).json({ message: 'Bu işlem için yetkiniz yok' });
    }

    const { userId } = req.params;
    const { isActive } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
    }

    // Super-admin'i devre dışı bırakmaya çalışıyorsa engelle
    if (user.role === 'super-admin') {
      return res.status(403).json({ message: 'Super-admin hesabı devre dışı bırakılamaz' });
    }

    user.isActive = isActive;
    await user.save();

    res.json({ message: 'Kullanıcı durumu güncellendi' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}; 