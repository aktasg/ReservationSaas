"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const appointmentSchema = new mongoose_1.default.Schema({
    customerName: {
        type: String,
        required: [true, 'Müşteri adı zorunludur'],
        trim: true,
    },
    customerPhone: {
        type: String,
        required: [true, 'Müşteri telefonu zorunludur'],
        trim: true,
    },
    customerEmail: {
        type: String,
        required: [true, 'Müşteri e-postası zorunludur'],
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Geçerli bir e-posta adresi giriniz'],
    },
    date: {
        type: Date,
        required: [true, 'Randevu tarihi zorunludur'],
    },
    startTime: {
        type: String,
        required: [true, 'Başlangıç saati zorunludur'],
    },
    endTime: {
        type: String,
        required: [true, 'Bitiş saati zorunludur'],
    },
    service: {
        type: String,
        required: [true, 'Hizmet bilgisi zorunludur'],
        trim: true,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled', 'completed'],
        default: 'pending',
    },
    notes: {
        type: String,
        trim: true,
    },
    employeeId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    businessId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('Appointment', appointmentSchema);
