import mongoose, { Document, Schema } from 'mongoose';

export interface IEmployee extends Document {
  businessId: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  workingHours: {
    start: string;
    end: string;
    days: string[];
  };
  services: mongoose.Types.ObjectId[];
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

const EmployeeSchema = new Schema<IEmployee>(
  {
    businessId: {
      type: Schema.Types.ObjectId,
      ref: 'Business',
      required: [true, 'Business ID is required'],
    },
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    position: {
      type: String,
      required: [true, 'Position is required'],
      trim: true,
    },
    workingHours: {
      start: {
        type: String,
        required: [true, 'Working hours start time is required'],
        default: '09:00',
      },
      end: {
        type: String,
        required: [true, 'Working hours end time is required'],
        default: '18:00',
      },
      days: {
        type: [String],
        required: [true, 'Working days are required'],
        default: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      },
    },
    services: [{
      type: Schema.Types.ObjectId,
      ref: 'Service',
    }],
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
EmployeeSchema.index({ businessId: 1 });
EmployeeSchema.index({ email: 1 });
EmployeeSchema.index({ status: 1 });

export default mongoose.model<IEmployee>('Employee', EmployeeSchema); 