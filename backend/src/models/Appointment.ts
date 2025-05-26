import mongoose from 'mongoose';

export interface IAppointment extends mongoose.Document {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  date: Date;
  startTime: string;
  endTime: string;
  service: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
  employeeId: mongoose.Types.ObjectId;
  businessId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const appointmentSchema = new mongoose.Schema(
  {
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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
    },
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IAppointment>('Appointment', appointmentSchema); 