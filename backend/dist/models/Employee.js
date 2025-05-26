"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const employeeSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'İsim alanı zorunludur'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'E-posta alanı zorunludur'],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Geçerli bir e-posta adresi giriniz'],
    },
    phone: {
        type: String,
        required: [true, 'Telefon alanı zorunludur'],
        trim: true,
    },
    position: {
        type: String,
        required: [true, 'Pozisyon alanı zorunludur'],
        trim: true,
    },
    businessId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('Employee', employeeSchema);
