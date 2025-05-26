import mongoose, { Document, Schema } from 'mongoose';

export interface IService extends Document {
  businessId: mongoose.Types.ObjectId;
  name: string;
  description: string;
  duration: number;
  price: number;
  color: string;
  status: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
  {
    businessId: {
      type: Schema.Types.ObjectId,
      ref: 'Business',
      required: [true, 'Business ID is required'],
    },
    name: {
      type: String,
      required: [true, 'Service name is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Service description is required'],
      trim: true,
    },
    duration: {
      type: Number,
      required: [true, 'Duration is required'],
      min: [15, 'Duration must be at least 15 minutes'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative'],
    },
    color: {
      type: String,
      default: '#2196F3',
    },
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
ServiceSchema.index({ businessId: 1 });
ServiceSchema.index({ status: 1 });
ServiceSchema.index({ businessId: 1, name: 1 }, { unique: true });

export default mongoose.model<IService>('Service', ServiceSchema); 