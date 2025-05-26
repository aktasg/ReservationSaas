"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.protect = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const protect = async (req, res, next) => {
    var _a;
    try {
        let token;
        if ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }
        if (!token) {
            return res.status(401).json({ message: 'Yetkilendirme başarısız: Token bulunamadı' });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const user = await User_1.default.findById(decoded.id).select('-password');
        if (!user) {
            return res.status(401).json({ message: 'Yetkilendirme başarısız: Kullanıcı bulunamadı' });
        }
        req.user = user;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Yetkilendirme başarısız: Geçersiz token' });
    }
};
exports.protect = protect;
const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Yetkilendirme başarısız: Kullanıcı bulunamadı' });
        }
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                message: 'Bu işlem için yetkiniz bulunmamaktadır',
            });
        }
        next();
    };
};
exports.authorize = authorize;
