import mongoose, { Document, Schema } from 'mongoose';

export interface IBusiness extends Document {
  name: string;
  email: string;
  phone: string;
  address: string;
  subscriptionPlan: 'free' | 'professional' | 'enterprise';
  status: 'active' | 'inactive' | 'suspended';
  settings: {
    workingHours: {
      start: string;
      end: string;
      days: string[];
    };
    timezone: string;
    currency: string;
    language: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const BusinessSchema = new Schema<IBusiness>(
  {
    name: {
      type: String,
      required: [true, 'Business name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
    subscriptionPlan: {
      type: String,
      enum: ['free', 'professional', 'enterprise'],
      default: 'free',
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'suspended'],
      default: 'active',
    },
    settings: {
      workingHours: {
        start: {
          type: String,
          default: '09:00',
        },
        end: {
          type: String,
          default: '18:00',
        },
        days: {
          type: [String],
          default: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
        },
      },
      timezone: {
        type: String,
        default: 'Europe/Istanbul',
      },
      currency: {
        type: String,
        default: 'TRY',
      },
      language: {
        type: String,
        default: 'tr',
      },
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
BusinessSchema.index({ email: 1 }, { unique: true });
BusinessSchema.index({ status: 1 });

export default mongoose.model<IBusiness>('Business', BusinessSchema); 