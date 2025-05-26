"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAppointment = exports.updateAppointment = exports.createAppointment = exports.getAllAppointments = void 0;
const Appointment_1 = __importDefault(require("../models/Appointment"));
// Tüm randevuları getir
const getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment_1.default.find({ businessId: req.user._id })
            .populate('employeeId', 'name');
        res.json(appointments);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAllAppointments = getAllAppointments;
// Yeni randevu oluştur
const createAppointment = async (req, res) => {
    try {
        const appointment = await Appointment_1.default.create({
            ...req.body,
            businessId: req.user._id,
        });
        res.status(201).json(appointment);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.createAppointment = createAppointment;
// Randevu güncelle
const updateAppointment = async (req, res) => {
    try {
        const appointment = await Appointment_1.default.findOneAndUpdate({ _id: req.params.id, businessId: req.user._id }, req.body, { new: true, runValidators: true });
        if (!appointment) {
            return res.status(404).json({ message: 'Randevu bulunamadı' });
        }
        res.json(appointment);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.updateAppointment = updateAppointment;
// Randevu sil
const deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment_1.default.findOneAndDelete({
            _id: req.params.id,
            businessId: req.user._id,
        });
        if (!appointment) {
            return res.status(404).json({ message: 'Randevu bulunamadı' });
        }
        res.json({ message: 'Randevu başarıyla silindi' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteAppointment = deleteAppointment;
