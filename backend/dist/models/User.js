"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'İsim alanı zorunludur'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'E-posta alanı zorunludur'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Geçerli bir e-posta adresi giriniz'],
    },
    password: {
        type: String,
        required: [true, 'Şifre alanı zorunludur'],
        minlength: [6, 'Şifre en az 6 karakter olmalıdır'],
    },
    role: {
        type: String,
        enum: ['super-admin', 'business-admin', 'user'],
        default: 'business-admin',
    },
    businessName: {
        type: String,
        required: function () {
            return this.role === 'business-admin';
        },
        trim: true,
    },
    businessAddress: {
        type: String,
        trim: true,
    },
    businessPhone: {
        type: String,
        trim: true,
    },
    businessEmail: {
        type: String,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Geçerli bir e-posta adresi giriniz'],
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});
// Şifreyi hashleme
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcryptjs_1.default.genSalt(10);
        this.password = await bcryptjs_1.default.hash(this.password, salt);
        next();
    }
    catch (error) {
        next(error);
    }
});
// Şifre karşılaştırma metodu
userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcryptjs_1.default.compare(candidatePassword, this.password);
};
exports.default = mongoose_1.default.model('User', userSchema);
