import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
  businessId: mongoose.Types.ObjectId;
  email: string;
  password: string;
  role: 'admin' | 'manager' | 'employee';
  firstName: string;
  lastName: string;
  phone?: string;
  status: 'active' | 'inactive';
  lastLogin?: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    businessId: {
      type: Schema.Types.ObjectId,
      ref: 'Business',
      required: [true, 'Business ID is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
    },
    role: {
      type: String,
      enum: ['admin', 'manager', 'employee'],
      default: 'employee',
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
    phone: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
UserSchema.index({ businessId: 1 });
UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ role: 1 });

// Hash password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Compare password method
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<IUser>('User', UserSchema); 