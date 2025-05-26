"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.createEmployee = exports.getAllEmployees = void 0;
const Employee_1 = __importDefault(require("../models/Employee"));
// Tüm çalışanları getir
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee_1.default.find({ businessId: req.user._id });
        res.json(employees);
    }
    catch (error) {
        console.error('Get all employees error:', error);
        res.status(500).json({ message: error.message });
    }
};
exports.getAllEmployees = getAllEmployees;
// Yeni çalışan ekle
const createEmployee = async (req, res) => {
    try {
        console.log('Create employee request body:', req.body);
        console.log('User ID:', req.user._id);
        const employee = await Employee_1.default.create({
            ...req.body,
            businessId: req.user._id,
        });
        res.status(201).json(employee);
    }
    catch (error) {
        console.error('Create employee error:', error);
        res.status(400).json({
            message: error.message,
            details: error.errors // Mongoose validation errors
        });
    }
};
exports.createEmployee = createEmployee;
// Çalışan güncelle
const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee_1.default.findOneAndUpdate({ _id: req.params.id, businessId: req.user._id }, req.body, { new: true, runValidators: true });
        if (!employee) {
            return res.status(404).json({ message: 'Çalışan bulunamadı' });
        }
        res.json(employee);
    }
    catch (error) {
        console.error('Update employee error:', error);
        res.status(400).json({ message: error.message });
    }
};
exports.updateEmployee = updateEmployee;
// Çalışan sil
const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee_1.default.findOneAndDelete({
            _id: req.params.id,
            businessId: req.user._id,
        });
        if (!employee) {
            return res.status(404).json({ message: 'Çalışan bulunamadı' });
        }
        res.json({ message: 'Çalışan başarıyla silindi' });
    }
    catch (error) {
        console.error('Delete employee error:', error);
        res.status(500).json({ message: error.message });
    }
};
exports.deleteEmployee = deleteEmployee;
