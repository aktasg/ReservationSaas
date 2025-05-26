"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const employee_1 = require("../controllers/employee");
const router = express_1.default.Router();
// Tüm rotalar korumalı
router.use(auth_1.protect);
router.route('/')
    .get(employee_1.getAllEmployees)
    .post(employee_1.createEmployee);
router.route('/:id')
    .put(employee_1.updateEmployee)
    .delete(employee_1.deleteEmployee);
exports.default = router;
