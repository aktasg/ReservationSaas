"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserStatus = exports.getAllUsers = exports.getMe = exports.login = exports.register = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const mongoose_1 = __importDefault(require("mongoose"));
// JWT Token oluşturma
const generateToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET || 'your-secret-key', {
        expiresIn: '30d',
    });
};
// Kullanıcı kaydı
const register = async (req, res) => {
    try {
        console.log('Register request body:', req.body); // Debug log
        const { name, email, password, role = 'business-admin', businessName, businessAddress, businessPhone, businessEmail } = req.body;
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
        const userExists = await User_1.default.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Bu e-posta adresi zaten kullanımda' });
        }
        // Super-admin kontrolü
        if (role === 'super-admin') {
            const superAdminExists = await User_1.default.findOne({ role: 'super-admin' });
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
        const user = await User_1.default.create({
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
    }
    catch (error) {
        console.error('Register error:', error); // Debug log
        // Mongoose validation error
        if (error instanceof mongoose_1.default.Error.ValidationError) {
            const validationErrors = {};
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
exports.register = register;
// Kullanıcı girişi
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Kullanıcıyı bul
        const user = await User_1.default.findOne({ email });
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
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.login = login;
// Mevcut kullanıcı bilgilerini getir
const getMe = async (req, res) => {
    try {
        const user = await User_1.default.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        }
        res.json(user);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.getMe = getMe;
// Tüm kullanıcıları getir (sadece super-admin için)
const getAllUsers = async (req, res) => {
    try {
        const user = await User_1.default.findById(req.user._id);
        if (!user || user.role !== 'super-admin') {
            return res.status(403).json({ message: 'Bu işlem için yetkiniz yok' });
        }
        const users = await User_1.default.find().select('-password');
        res.json(users);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.getAllUsers = getAllUsers;
// Kullanıcı durumunu güncelle (sadece super-admin için)
const updateUserStatus = async (req, res) => {
    try {
        const admin = await User_1.default.findById(req.user._id);
        if (!admin || admin.role !== 'super-admin') {
            return res.status(403).json({ message: 'Bu işlem için yetkiniz yok' });
        }
        const { userId } = req.params;
        const { isActive } = req.body;
        const user = await User_1.default.findById(userId);
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
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.updateUserStatus = updateUserStatus;
