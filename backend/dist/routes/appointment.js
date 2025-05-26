"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const appointment_1 = require("../controllers/appointment");
const router = express_1.default.Router();
// Tüm rotalar korumalı
router.use(auth_1.protect);
router.route('/')
    .get(appointment_1.getAllAppointments)
    .post(appointment_1.createAppointment);
router.route('/:id')
    .put(appointment_1.updateAppointment)
    .delete(appointment_1.deleteAppointment);
exports.default = router;
