import mongoose, { Document, Schema } from 'mongoose';

export interface IAppointment extends Document {
  businessId: mongoose.Types.ObjectId;
  employeeId: mongoose.Types.ObjectId;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  serviceId: mongoose.Types.ObjectId;
  date: Date;
  duration: number;
  status: 'scheduled' | 'completed' | 'cancelled' | 'no-show';
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    businessId: {
      type: Schema.Types.ObjectId,
      ref: 'Business',
      required: [true, 'Business ID is required'],
    },
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
      required: [true, 'Employee ID is required'],
    },
    customerName: {
      type: String,
      required: [true, 'Customer name is required'],
      trim: true,
    },
    customerPhone: {
      type: String,
      required: [true, 'Customer phone is required'],
      trim: true,
    },
    customerEmail: {
      type: String,
      trim: true,
      lowercase: true,
    },
    serviceId: {
      type: Schema.Types.ObjectId,
      ref: 'Service',
      required: [true, 'Service ID is required'],
    },
    date: {
      type: Date,
      required: [true, 'Appointment date is required'],
    },
    duration: {
      type: Number,
      required: [true, 'Duration is required'],
      min: [15, 'Duration must be at least 15 minutes'],
    },
    status: {
      type: String,
      enum: ['scheduled', 'completed', 'cancelled', 'no-show'],
      default: 'scheduled',
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
AppointmentSchema.index({ businessId: 1 });
AppointmentSchema.index({ employeeId: 1 });
AppointmentSchema.index({ date: 1 });
AppointmentSchema.index({ status: 1 });
AppointmentSchema.index({ businessId: 1, date: 1 });
AppointmentSchema.index({ businessId: 1, employeeId: 1, date: 1 });

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema); 